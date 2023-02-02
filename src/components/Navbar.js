import React from "react";

import s from "../assets/logod.png";

//icons
import { FiSend } from "react-icons/fi";

const Navbar = () => {
  const activeLink = "mr-5 mb-4 md:mb-0 text-red-200 md:text-blue-400";
  const inActiveLink = "mr-5 mb-4 md:mb-0 hover:text-blue-500";
  return (
    <header
      className={`text-white md:text-gray-600 body-font fixed top-0  bg-white w-full z-40 `}
    >
      <div className="container mx-auto flex flex-wrap p-4 md:p-5 flex-row items-center h-fit w-full">
        <a
          href=""
          className="flex title-font font-medium items-center text-gray-900  w-fit"
        >
          <img className="w-10 h-10 " src={s} alt="" />
          <span className="ml-3 text-xl font-semibold text-blue-500 hover:text-blue-400">
            Portfolio.
          </span>
        </a>

        <a
          href="mailto:shresthadipak2049@gmail.com"
          className="inline-flex items-center ml-auto border border-blue-500 hover:border-blue-400 bg-transparent py-2 px-3 focus:outline-none text-blue-500 hover:text-blue-400 rounded text-base "
        >
          Lets Talk
          <FiSend className="ml-2" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
