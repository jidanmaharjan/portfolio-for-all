import React from "react";
import Lottie from "react-lottie-player";
import ReactTyped from "react-typed";

//icons
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaKaggle } from "react-icons/fa";

//image
import hero from "../assets/hero.jpg";
import hand from "../assets/hand.json";

const Hero = () => {
  return (
    <section
      id="particles-js"
      className="text-gray-600 body-font dark:bg-slate-800 bg-gray-100"
    >
      <div className="container md:mx-auto  flex md:px-12 p-4 py-20 md:pb-8 min-h-screen md:flex-row flex-col-reverse justify-center items-center">
        <div className="lg:flex-grow w-full md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start md:text-left mb-16 md:mb-0  text-center">
          <p className="mb-4 leading-relaxed text-2xl 2xl:text-4xl text-gray-400 md:mt-12 flex items-center">
            HEY THERE{" "}
            <Lottie
              loop
              animationData={hand}
              play
              style={{ width: 60, height: 60 }}
            />{" "}
            !
          </p>
          <h1 className="title-font sm:text-7xl text-3xl 2xl:text-8xl md:mb-4 font-semibold text-blue-500">
            <ReactTyped
              className=""
              strings={["WHO AM I ?", "I AM DIPAK CRESTHA"]}
              typeSpeed={120}
              backSpeed={80}
              backDelay={2000}
              loop
            />
          </h1>
          <p className="mb-8 leading-relaxed text-2xl 2xl:text-5xl sm:text-3xl font-semibold">
            ML ENGINEER
          </p>
          <div className="flex items-center text-3xl 2xl:text-4xl mt-4 2xl:mt-8 text-gray-400">
            <a
              className="mr-4 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/shresthadipak"
            >
              <AiFillGithub />
            </a>
            <a
              className="mr-4 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/dipak-shrestha-99897311a/"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="mr-4 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/shresthadipak4"
            >
              <AiOutlineTwitter />
            </a>
            <a
              className="mr-4 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.kaggle.com/shresthadipak"
            >
              <FaKaggle />
            </a>
          </div>
          <div className="flex justify-center mt-12 2xl:mt-16">
            <a
              href="https://www.blog.shresthadipak.com.np/"
              target="_blank"
              norefferer
              className="inline-flex 2xl:text-2xl text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg"
            >
              CHECK MY BLOG
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2  blob--object bg-gradient-to-r from-violet-400 to-blue-400  pointer-events-none mb-8 md:mb-0">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 blob--object--small  overflow-hidden pointer-events-none mb-8 md:mb-0">
            <img
              className="object-cover object-center rounded aspect-square"
              alt="hero"
              src={hero}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
