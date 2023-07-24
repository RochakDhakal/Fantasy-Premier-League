import React, { useState } from "react";
import "./style.css"
import PLLogo from "../../assets/PremierLeagueLogo.png"
import { Link } from "react-router-dom";

function Header() {
/* The code snippet is using the `useState` hook from React to create a state variable called
`isNavOpen` and a function called `setIsNavOpen` to update the state. The initial value of
`isNavOpen` is set to `false`. */
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-violet-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src={PLLogo} className="h-8 mr-3" alt="Premier League Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-900 hover:text-white">
            Premier League Stats
          </span>
        </Link>
        <button
          onClick={handleNavToggle}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isNavOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isNavOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-violet-800 md:dark:bg-violet-800 dark:border-violet-800">
            <li>
              <Link
              to="/fplstats"
                className="header-list"
                onClick={handleNavToggle}
              >
                FPL
              </Link>
            </li>
            <li>
              <Link
                to="/fixtures"
                onClick={handleNavToggle}
                className="header-list"
              >
                Fixtures
              </Link>
            </li>
            <li>
              <Link
                to="/players"
                className="header-list"
                onClick={handleNavToggle}
              >
                Players
              </Link>
            </li>
            <li>
              <Link
                to="/live"
                className="header-list"
                onClick={handleNavToggle}
              >
                Live
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
