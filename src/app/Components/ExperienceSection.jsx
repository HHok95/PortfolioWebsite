"use client";
import { React, useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import { motion, useInView } from "framer-motion";

const ExperienceData = [
  {
    id: 1,
    title: "Project Team Lead",
    company: "Sahara Space Pty Ltd",
    date: "Jul. 2023 -- Nov. 2023",
    descriptions: [
      "Led the development of the On-Board Machine Learning system for estimating spacecraft pose.",
      "Utilised the SPEED dataset for the initial design and development of the Convolutional Neural Networks.",
    ],
    imgUrl: "/Images/sahara_logo.png",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "COSC2299",
    date: "Jul. 2023 -- Nov. 2023",
    descriptions: [
      "Designed and Developed SuperPrice, a grocery price matching and delivery web application, allowing users to get the best price of groceries from different sellers and deliver them straight to their doorstep.",
      `Worked with React, REST API, Spring Boot, RDS, Java, Docker, and ECR.`,
    ],
    imgUrl: "/Images/RMIT_logo.png",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 100, opacity: 0, scale: 0.5 },
    animate: { y: 0, opacity: 1, scale: 1 },
  };
  return (
    <section id="experience" className="text-white md:pt-32 md:my-28 my-16">
      <h2 className="text-center font-mono text-4xl font-bold mt-4 mb-8 md:mb-12">
        EXPERIENCES
      </h2>

      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 1 }}
        ref={ref}
        className="flex flex-row gap-2 overflow-x-scroll snap-x snap-mandatory"
      >
        {ExperienceData.map((t) => (
          <ExperienceCard
            key={t.id}
            title={t.title}
            company={t.company}
            date={t.date}
            descriptions={t.descriptions}
            imgUrl={t.imgUrl}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
