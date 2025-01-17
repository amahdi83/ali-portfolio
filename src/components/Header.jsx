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
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const activeBox = useRef(null);

  const resetActiveBox = () => {
    if (activeBox.current) {
      activeBox.current.style.width = "0";
      activeBox.current.style.height = "0";
    }
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

          {/* Pass the activeBox reference to the Navbar */}
          <Navbar navOpen={navOpen} activeBox={activeBox} />
        </div>

        {/* Contact Button for Larger Screens */}
        <a
          href="/contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
          onClick={resetActiveBox} // Reset the active box on button click
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
