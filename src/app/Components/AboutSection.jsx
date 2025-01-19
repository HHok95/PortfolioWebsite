"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Proficient in Python, TypeScript, C++, and SQL</li>
        <li>Experience with React, Vite, and modern web development</li>
        <li>Familiar with REST APIs, Docker, and AWS</li>
        <li>Skilled in database management (MySQL, PostgreSQL)</li>
      </ul>

    ),
  },
  {
    title: "Educations",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>ACS Professional Year | Monash College | Mar 2025</li>
        <li>Bachelor of Computer Science | RMIT University | Dec 2023</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Power Platform Fundamentals | Microsoft</li>
        <li>Cloud Computing | IBM</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const cardVariants = {
    initial: { y: 100, opacity: 0, scale: 0.5 },
    animate: { y: 0, opacity: 1, scale: 1 },
  };

  return (
    <section id="about" className="text-white md:pt-32">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 1 }}
        ref={ref}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16"
      >
        <Image
          className="rounded-full"
          src={"/Images/hero-image.jpeg"}
          width={500}
          height={500}
          alt="Hero Image"
        />
        <div className="flex flex-col mt-4 md:mt-0 text-left h-full">
          <h2 className="text-4xl font-mono font-bold text-white mb-4">ABOUT ME</h2>
          <p className="text-base lg:text-lg">
          Software Engineer with a solid foundation in computer science and practical experience in designing, building, and optimizing software systems. Passionate about crafting innovative solutions and thriving in collaborative team environments. Dedicated to continuous learning and exploring emerging technologies to deliver impactful and high-performing projects.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
