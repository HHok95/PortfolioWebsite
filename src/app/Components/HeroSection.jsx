"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="h-screen flex justify-center">
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="flex items-center justify-center sm:mt-10">
        <div className="col-span-12 md:col-span-8 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-6xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
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
      </motion.div>
    </section>
  );
};

export default HeroSection;
