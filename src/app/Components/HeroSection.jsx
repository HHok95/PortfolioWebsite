"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import GitHubIcon from "../../../public/github-icon.svg";
import LinkedInIcon from "../../../public/linkedin-icon.svg";

const HeroSection = () => {
  return (
    <section>
      <div className="flex sm:flex bg-dark px-4 pt-8">
        <div className="hidden md:block min-h-screen">
          <div
            id="left"
            className="flex justify-center items-center min-h-screen pr-10"
          >
            
              <div className="flex flex-col justify-center">
                <Link
                  href={"https://github.com/HHok95/"}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-2xl md:text-5xl text-white font-semibold"
                >
                  <Image
                    src={GitHubIcon}
                    alt="github logo"
                    className="h-8 w-8 md:h-12 md:w-12"
                  />
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/hokheng/"}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-2xl md:text-5xl text-white font-semibold"
                >
                  <Image
                    src={LinkedInIcon}
                    alt="linkedIn logo"
                    className="h-8 w-8 md:h-12 md:w-12"
                  />
                </Link>
              </div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-white mb-4 text-4xl sm:text-6xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
              Hello, I&apos;m
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Hok Heng",
                1000, // wait 1s
                "a Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ color: "#F0ABFC" }}
            />
          </h1>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-6">
            I am deeply committed to harnessing technology to craft software
            solutions that elevate the well-being of individuals and
            communities. Driven by a profound interest in software development,
            I am actively refining my skills and seeking substantial industry
            exposure to foster innovation and create meaningful impact.
          </p>
        </div>
        <div className="hidden md:block">
          <div
            id="right"
            className="flex text-white justify-center items-center min-h-screen pr-10 rotate-90"
          >
            henghok95@gmail.com
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
