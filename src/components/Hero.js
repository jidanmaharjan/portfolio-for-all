import React from "react";

//icons
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";

//image
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font pt-8">
      <div className="container md:mx-auto flex md:px-12 p-4 py-20 md:pb-8 md:flex-row flex-col-reverse items-center">
        <div className="lg:flex-grow self-start md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start md:text-left mb-16 md:mb-0  text-center">
          <p className="mb-4 leading-relaxed text-2xl 2xl:text-4xl text-gray-400 md:mt-12">
            HEY THERE !
          </p>
          <h1 className="title-font sm:text-7xl text-3xl 2xl:text-8xl md:mb-4 font-semibold text-red-500">
            I AM [NAME]
          </h1>
          <p className="mb-8 leading-relaxed text-2xl 2xl:text-5xl sm:text-3xl font-semibold">
            [POST]
          </p>
          <div className="flex items-center text-3xl 2xl:text-4xl mt-4 2xl:mt-8 text-gray-400">
            <a className="mr-4 hover:text-red-400" href="#">
              <AiFillGithub />
            </a>
            <a className="mr-4 hover:text-red-400" href="#">
              <AiFillLinkedin />
            </a>
            <a className="mr-4 hover:text-red-400" href="#">
              <AiOutlineTwitter />
            </a>
          </div>
          <div className="flex justify-center mt-12 2xl:mt-16">
            <Link
              to={"/services"}
              className="inline-flex 2xl:text-2xl text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg"
            >
              CHECK MY SERVICES
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2  blob--object bg-red-400 overflow-hidden pointer-events-none mb-8 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={hero}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
