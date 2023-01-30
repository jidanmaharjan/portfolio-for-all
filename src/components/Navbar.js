import React from "react";
import { Link, NavLink } from "react-router-dom";

import s from "../assets/s.png";

//icons
import { FiSend } from "react-icons/fi";

const Navbar = ({ navToggle, setNavToggle }) => {
  const activeLink = "mr-5 mb-4 md:mb-0 text-red-200 md:text-red-400";
  const inActiveLink = "mr-5 mb-4 md:mb-0 hover:text-red-500";
  return (
    <header
      className={`text-white md:text-gray-600 body-font fixed right-0 md:top-0 bg-red-500 md:bg-white w-60 md:w-full transition-all duration-300 z-40 ${
        !navToggle && "translate-x-[100%] md:translate-x-0"
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-4 md:p-5  flex-col md:flex-row md:items-center h-screen md:h-fit w-60 md:w-full">
        <Link
          to={"/"}
          onClick={() => setNavToggle(false)}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img className="w-10 h-10 rounded-full" src={s} alt="" />
          <span className="ml-3 text-xl font-semibold text-red-400 hover:text-red-300">
            Portfolio.
          </span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-col md:flex-row flex-wrap items-start md:items-center text-base justify-center">
          <NavLink
            onClick={() => setNavToggle(false)}
            to={"/"}
            className={({ isActive }) => (isActive ? activeLink : inActiveLink)}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setNavToggle(false)}
            to={"/about"}
            className={({ isActive }) => (isActive ? activeLink : inActiveLink)}
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setNavToggle(false)}
            to={"/services"}
            className={({ isActive }) => (isActive ? activeLink : inActiveLink)}
          >
            Services
          </NavLink>
          <NavLink
            onClick={() => setNavToggle(false)}
            to={"/contact"}
            className={({ isActive }) => (isActive ? activeLink : inActiveLink)}
          >
            Contact
          </NavLink>
        </nav>
        <a
          onClick={() => setNavToggle(false)}
          href="mailto:sumitramhrjn@gmail.com"
          className="inline-flex items-center border md:border-red-400 md:hover:border-red-500 bg-transparent py-2 px-3 focus:outline-none md:text-red-400 md:hover:text-red-500 rounded text-base mt-4 md:mt-0"
        >
          Lets Talk
          <FiSend className="ml-2" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
