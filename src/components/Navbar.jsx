/**
 * @copyright 2024 AliMahdi
 * @license Apache-2.0
 */

import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef(null);
    const activeBox = useRef(null);
    const location = useLocation();

    const initActiveBox = () => {
        if (lastActiveLink.current && activeBox.current) {
            activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
            activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
            activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
            activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
        }
    };

    useEffect(() => {
        // Set the default active link based on the current location
        const activeLink = document.querySelector(`.nav-link[href="${location.pathname}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
            lastActiveLink.current = activeLink;
        }
        initActiveBox();

        window.addEventListener("resize", initActiveBox);
        return () => window.removeEventListener("resize", initActiveBox);
    }, [location.pathname]);

    const activeCurrentLink = (event) => {
        if (lastActiveLink.current) {
            lastActiveLink.current.classList.remove("active");
        }
        event.target.classList.add("active");
        lastActiveLink.current = event.target;

        if (activeBox.current) {
            activeBox.current.style.top = event.target.offsetTop + "px";
            activeBox.current.style.left = event.target.offsetLeft + "px";
            activeBox.current.style.width = event.target.offsetWidth + "px";
            activeBox.current.style.height = event.target.offsetHeight + "px";
        }
    };

    const navItems = [
        { label: "Home", link: "/", className: "nav-link" },
        { label: "Skills", link: "/skills", className: "nav-link" },
        { label: "Projects", link: "/projects", className: "nav-link" },
        { label: "Publications", link: "/publications", className: "nav-link" },
        { label: "Contact", link: "/contact", className: "nav-link md:hidden" },
    ];

    return (
        <nav className={`navbar ${navOpen ? "active" : ""}`}>
            {navItems.map(({ label, link, className }, key) => (
                <NavLink
                    to={link}
                    key={key}
                    className={({ isActive }) => `${className} ${isActive ? "active" : ""}`}
                    onClick={activeCurrentLink}
                >
                    {label}
                </NavLink>
            ))}
            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
};

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
