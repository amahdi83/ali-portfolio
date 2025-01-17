

/**
 * @copyright 2024 AliMahdi
 * @license Apache-2.0
 */

{/*}
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
*/}


import { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ navOpen }) => {
  const activeBox = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Reset the active box size and position when navigating to the contact page
    if (location.pathname === "/contact" && activeBox.current) {
      activeBox.current.style.width = "0";
      activeBox.current.style.height = "0";
    }
  }, [location]);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Skills", link: "/skills" },
    { label: "Projects", link: "/projects" },
    { label: "Publications", link: "/publications" },
  ];

  // Handle active box appearance on click
  const handleClick = (e) => {
    if (activeBox.current) {
      const buttonRect = e.target.getBoundingClientRect();
      activeBox.current.style.top = `${buttonRect.top + window.scrollY}px`;
      activeBox.current.style.left = `${buttonRect.left + window.scrollX}px`;
      activeBox.current.style.width = `${buttonRect.width}px`;
      activeBox.current.style.height = `${buttonRect.height}px`;
    }
  };

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link }, key) => (
        <NavLink
          to={link}
          key={key}
          className="nav-link"
          activeClassName="active"
          onClick={handleClick}
        >
          {label}
        </NavLink>
      ))}

      {/* "Contact Me" button inside navbar for small screens only */}
      <NavLink
        to="/contact"
        className="nav-link md:hidden"
        onClick={handleClick} // Trigger active box on click
      >
        Contact Me
      </NavLink>

      {/* Active box to show on clicking Contact Me on small screens */}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default Navbar;







