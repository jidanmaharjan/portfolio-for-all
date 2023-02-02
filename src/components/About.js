import React from "react";
import { Link } from "react-router-dom";

//file
import cv from "../assets/CV.pdf";

//icons
import { FaGraduationCap } from "react-icons/fa";
import { MdHomeWork, MdWork } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">
              ABOUT ME
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Know My Details
            </h1>
          </div>
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                A QA Engineer, Passionate about Bugs
              </h1>
              <div className="leading-relaxed">
                I like to interrupt developers and provide them with new bugs in
                thier code just to hear them say no more please. 🤣 Then
                complain Devops Team about delay in new releases. 😈
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1-
              </h2>
              <p className="leading-relaxed">Years Exp</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                50+
              </h2>
              <p className="leading-relaxed">Docs</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                15+
              </h2>
              <p className="leading-relaxed">Projects</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1000+
              </h2>
              <p className="leading-relaxed">Bugs</p>
            </div>
            <div className="flex justify-center p-4">
              <a
                download={true}
                href={cv}
                className="inline-flex 2xl:text-2xl text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src="https://dummyimage.com/600x300"
              alt="stats"
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm"></div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 text-5xl bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                <AiFillProject />
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  College Group Project
                </h2>
                <p class="leading-relaxed">
                  Exam Schedule Viewer: A web based application developed where
                  students can view their exam routines online instead of
                  visiting college's noticeboard.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm"></div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 text-5xl bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                <FaGraduationCap />
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Graduation
                </h2>
                <p class="leading-relaxed">[Graduation description]</p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm"></div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 text-5xl bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                <MdWork />
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Internship
                </h2>
                <p class="leading-relaxed">[Internship Details]</p>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm"></div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 text-5xl bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
                <MdHomeWork />
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                  Fellowship
                </h2>
                <p class="leading-relaxed">
                  Joined Fellowship as Quality Assurance fellow in Gritfeat
                  Solutions Pvt. Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
