/**
 * @copyright 2024 AliMahdi
 * @license Apache-2.0
 */

import { ButtonPrimary, ButtonOutline } from "../components/Button";
import { useEffect, useRef } from "react";
import Typed from "typed.js";


const Home = () => {

  const typedTextRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedTextRef.current, {
        strings: ["Computer Vision Scientist", "Machine Learning Engineer", "AI Specialist"],
        typeSpeed: 100,  // typing speed
        backSpeed: 100,  // backspacing speed
        backDelay: 2000, // delay before backspacing
        loop: true,      // loop the typing effect
        cursorChar: "|", // Change cursor to underscore
    });

    // Cleanup on component unmount
    return () => {
        typed.destroy();
    };
}, []);

useEffect(() => {
  // Force reload of images when navigating to the homepage
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.src = img.src; // This forces the image to reload
  });
}, []);

const aboutItems = [
  {
      label: 'Years of research',
      number: 12
  },
  {
      label: 'Years of industry',
      number: 6
  }
];



    return (
      <section id="home" className="pt-28 lg:pt-36">
        <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <figure className="img-box w-9 h-9 rounded-xl">
                <img src="images/avatar-1.jpg" width={40} height={40} alt="Ali Mahdi portrait" className="img-cover" />
              </figure>

              <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                </span>

                Available for work
              </div>
            </div>

            <h2 className="headline-1 max-w-[15ch] sm:max-w-[30ch] lg:nax-w-[15ch] mt-5 mb-8 lg:mb-10">
              <h2 className="text-[35px]">Hi, I am Ali Mahdi. A</h2>
              <span ref={typedTextRef} className="text-[34px]"></span>
            </h2>

            <div className="flex items-center gap-3">
              <ButtonPrimary label="Download CV" icon="download"/>

              {/*<ButtonOutline href="/skills" label="My Skills" icon="arrow_downward" />*/}
            </div>
          </div>

          <div className="hidden lg:block">
            <figure className="w-full max-w-[350px] ml-auto bg-gradient-to-t from-sky-400 via-40% via-sky-400/40 to-90% rounded-[50px] overflow-hidden">
              <img src="images/hero-banner.png" width={656} height={800} alt="Ali Mahdi" className="w-full" />
            </figure>
          </div>
        </div>

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-10 reveal-up mt-10 max-w-[108ch] mx-auto">
          <p className="text-zinc-300 mb-8 md:mb-8 md:text-xl md:max-w-[80ch]">
          Welcome! I'm Ali, a Machine Learning expert with more than 12 years of research and over 6 years of practical experience in the industry. I blend creativity with deep technical skills to transform cutting-edge Machine Learning concepts into innovative, high-performing solutions that push the boundaries of what’s possible.
          </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-7">
                {
                    aboutItems.map(({ label, number }, key) => (
                        <div key={key}>
                          <div className="flex items-center md:mb-2">
                              <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                              <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                          </div>
                          <p className="text-sm text-zinc-400">{label}</p>
                        </div>
                    ))
                }
                
            </div>
          </div>
        
            {/* CSS for typed cursor */}
            <style>{`
                .typed-cursor {
                    font-size: 35px; /* Cursor size */
                    color: #f43f5e; /* Cursor color */
                    animation: blink 0.8s infinite; /* Slower blinking */
                }

                @keyframes blink {
                    0%, 100% { opacity: 1; } /* Fully visible */
                    50% { opacity: 0.5; }   /* Slightly dimmed */
                }
            `}</style>
        

      </section>
    )
}

  export default Home;