/**
 * @copyright 2024 AliMahdi
 * @license Apache-2.0
 */

{/*}
import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                </h1>

                <div className="relative md:justify-self-center">
                    <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
                        <span className="material-symbols-rounded">
                            {navOpen ? 'close': 'menu'}
                        </span>
                    </button>

                    <Navbar navOpen={navOpen} />

                </div>

                <a href="/contact" className="btn btn-secondary max-md:hidden md:justify-self-end">Contact Me</a>

            </div>
        </header>
    )
}

export default Header;
*/}


import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const activeBox = useRef(null);
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Reset the active box styling
    if (activeBox.current) {
      activeBox.current.style.width = "0";
      activeBox.current.style.height = "0";
      activeBox.current.style.top = "0";
      activeBox.current.style.left = "0";
    }

    // Clear active state from navbar links
    const activeLinks = document.querySelectorAll(".nav-link.active");
    activeLinks.forEach((link) => link.classList.remove("active"));

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

        {/* Contact Button for Larger Screens */}
        <button
          className="btn btn-secondary max-md:hidden md:justify-self-end"
          onClick={handleContactClick}
        >
          Contact Me
        </button>
      </div>
    </header>
  );
};

export default Header;


