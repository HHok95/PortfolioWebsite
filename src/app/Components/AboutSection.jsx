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
        <li>Full Stack Development</li>
        <li>Docker</li>
        <li>AWS</li>
        <li>Python</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>SQL</li>
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
        <li>High School Diploma| Lyndale Secondary College | Nov 2020</li>
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
        <li>SharePoint | LinkedInLearn</li>
        <li>ServiceNow | LinkedInLearn</li>
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

  return (
    <section id="about" className="text-white" ref={ref}>
      <motion.div initial={{ opacity: 0, scale: 0.5, y: 100 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.5 }} className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <Image
          className="rounded-full"
          src={"/Images/hero-image.jpeg"}
          width={500}
          height={500}
          alt="Hero Image"
        />
        <div className="flex flex-col mt-4 md:mt-0 text-left h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            A resilient and results-driven IT professional with a strong
            &quot;can do&quot; attitude, I excel in collaborative environments,
            leveraging my software development expertise to drive innovation and
            achieve business objectives. Skilled in communication and teamwork,
            I enjoy fostering positive relationships and contributing to
            cross-functional projects that deliver exceptional results.
            Committed to continuous learning and staying ahead in technology
            trends, I am poised to contribute effectively to impactful
            initiatives and drive business success.
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
