import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="shadow z-50 top-0">
      <nav className=" border-gray-200 bg-gradient-to-r from-gray-900 to-green-950 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between  items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="./assets/tnd1.png"
              className="mr-3 h-20 hover:shadow-2xl hover:shadow-green-400 hover:scale-110"
              alt="TND Logo"
            />
          </Link>

          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-green-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } lg:hidden w-full`}
          >
            <ul className="flex flex-col mt-4  font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-white" : "text-green-400"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-800 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-white" : "text-green-400"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-800 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-white" : "text-green-400"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-800 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-white" : "text-green-400"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-800 lg:p-0`
                  }
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resources"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-white" : "text-green-400"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-800 lg:p-0`
                  }
                >
                  Resources
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Desktop menu */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="desktop-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block hover:scale-125 py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-white " : "text-green-400"
                    }  hover:shadow-2xl hover:shadow-green-400 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block hover:scale-125 py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-white " : "text-green-400"
                    }  hover:shadow-2xl hover:shadow-green-400 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block hover:scale-125 py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-white " : "text-green-400"
                    }  hover:shadow-2xl hover:shadow-green-400 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className={({ isActive }) =>
                    `block hover:scale-125 py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-white " : "text-green-400"
                    }  hover:shadow-2xl hover:shadow-green-400 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                  }
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resources"
                  className={({ isActive }) =>
                    `block hover:scale-125 py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-white " : "text-green-400"
                    }  hover:shadow-2xl hover:shadow-green-400 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                  }
                >
                  Resources
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
