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
        <li>Programming (Python, Java, C++)</li>
        <li>Website Development</li>
        <li>REST API</li>
        <li>Docker</li>
        <li>AWS</li>
        <li>Database</li>
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
            Highly motivated and ambitious Computer Science graduate seeking an entry level position to leverage my strong technical skills and 1+ years of customer service experience, while contributing to a company&apos;s growth and achieving its goals.
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
