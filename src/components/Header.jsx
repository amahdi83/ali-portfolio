/**
 * @copyright 2024 AliMahdi
 * @license Apache-2.0
 */


import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const activeBox = useRef(null);
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Hide the active box
    if (activeBox.current) {
      activeBox.current.style.width = "0";
      activeBox.current.style.height = "0";
    }

    // Navigate to the contact page
    navigate("/contact");
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1></h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          {/* Pass the activeBox ref to the Navbar */}
          <Navbar navOpen={navOpen} activeBox={activeBox} />
        </div>

        {/* Remove the contact button from the header on smaller screens */}
        <div className="hidden md:block">
          {/* This button is only shown on larger screens */}
          <button
            className="btn btn-secondary md:justify-self-end"
            onClick={handleContactClick}
          >
            Contact Me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;






