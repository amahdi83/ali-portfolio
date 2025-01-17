

/**
 * @copyright 2024 AliMahdi
 * @license Apache-2.0
 */
{/*}
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
*/}

{/*
import { useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ navOpen }) => {
  const activeBox = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const activeLink = document.querySelector(".nav-link.active");
    if (activeLink && activeBox.current) {
      const rect = activeLink.getBoundingClientRect();
      const parentRect = activeLink.offsetParent.getBoundingClientRect();

      activeBox.current.style.top = `${rect.top - parentRect.top}px`;
      activeBox.current.style.left = `${rect.left - parentRect.left}px`;
      activeBox.current.style.width = `${rect.width}px`;
      activeBox.current.style.height = `${rect.height}px`;
    }
  }, [location]);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Skills", link: "/skills" },
    { label: "Projects", link: "/projects" },
    { label: "Publications", link: "/publications" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link }, key) => (
        <NavLink
          to={link}
          key={key}
          className="nav-link"
          activeClassName="active"
        >
          {label}
        </NavLink>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default Navbar;
*/}
{/*}
import { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ navOpen }) => {
  const activeBox = useRef(null);
  const location = useLocation();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const activeLink = document.querySelector(".nav-link.active");
    if (activeLink && activeBox.current) {
      const rect = activeLink.getBoundingClientRect();
      const parentRect = activeLink.offsetParent.getBoundingClientRect();

      activeBox.current.style.top = `${rect.top - parentRect.top}px`;
      activeBox.current.style.left = `${rect.left - parentRect.left}px`;
      activeBox.current.style.width = `${rect.width}px`;
      activeBox.current.style.height = `${rect.height}px`;
    }
  }, [location]);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Skills", link: "/skills" },
    { label: "Projects", link: "/projects" },
    { label: "Publications", link: "/publications" },
  ];

  // Conditionally include "Contact" for small screens
  if (isSmallScreen) {
    navItems.push({ label: "Contact", link: "/contact" });
  }

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link }, key) => (
        <NavLink
          to={link}
          key={key}
          className="nav-link"
          activeClassName="active"
        >
          {label}
        </NavLink>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default Navbar;
*/}


import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ navOpen, activeBox }) => {
  const location = useLocation();

  useEffect(() => {
    const activeLink = document.querySelector(".nav-link.active");

    if (activeLink && activeBox.current && location.pathname !== "/contact") {
      const rect = activeLink.getBoundingClientRect();
      const parentRect = activeLink.offsetParent.getBoundingClientRect();

      activeBox.current.style.top = `${rect.top - parentRect.top}px`;
      activeBox.current.style.left = `${rect.left - parentRect.left}px`;
      activeBox.current.style.width = `${rect.width}px`;
      activeBox.current.style.height = `${rect.height}px`;
    } else if (location.pathname === "/contact" && activeBox.current) {
      // Hide the active box when on the contact page
      activeBox.current.style.width = "0";
      activeBox.current.style.height = "0";
    }
  }, [location, activeBox]);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Skills", link: "/skills" },
    { label: "Projects", link: "/projects" },
    { label: "Publications", link: "/publications" },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link }, key) => (
        <NavLink
          to={link}
          key={key}
          className="nav-link"
          activeClassName="active"
        >
          {label}
        </NavLink>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default Navbar;


