

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
    // Note: "Contact Me" button is now handled separately in the Header component
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

      {/* "Contact Me" button in navbar for smaller screens only */}
      <NavLink
        to="/contact"
        className="nav-link md:hidden"
        onClick={() => activeBox.current.style.width = "0"} // Reset active box when Contact is clicked
      >
        Contact Me
      </NavLink>

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default Navbar;


