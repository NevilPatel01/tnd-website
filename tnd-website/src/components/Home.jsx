import { useEffect } from "react";
import Typed from "typed.js";
import About from "./About";
import Contact from "./Contact";
import Particlesjs from "../Particlejs";

const Home = () => {
  useEffect(() => {
    const options = {
      strings: [
        "THE NEW DEVELOPERS CLUB",
        "FUTURE CODERS",
        "INNOVATIVE THINKERS",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(".typing-element", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="relative min-h-screen flex flex-col bg-gradient-to-r from-gray-900 to-green-950 overflow-hidden">
        {/* Background GIF */}
        <Particlesjs />
        <div className="flex-1 flex overflow-hidden">
          {/* Left Side - Typed Text */}
          <div className="flex-1 flex items-center justify-center hover:scale-110 text-center text-white ">
            <div>
              {/* Text Writing Animation */}
              <h1 className="text-5xl font-bold mb-4 typing-element"></h1>

              {/* Subtitle */}
              <h2 className="text-lg  hover:scale-115 ">
                THE PREMIUM CLUB OF SOFTWARE DEVELOPERS
              </h2>
            </div>
          </div>

          {/* Right Side - Floating GIF */}
          <div className="flex-1 flex items-center hover:scale-125 justify-center z-20">
            <img
              src="./gif/kek-angry.gif"
              alt="Floating GIF"
              className="w-80 h-80 hover:scale-125 animate-bounce"
            />
          </div>
        </div>
      </div>
      <About />
      <Contact />
    </>
  );
};

export default Home;
