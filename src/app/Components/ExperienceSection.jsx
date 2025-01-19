"use client";
import { React, useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import { motion, useInView } from "framer-motion";

const ExperienceData = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Beyond Zero Technologies Pty Ltd",
    date: "Nov. 2024 -- Current",
    descriptions: [
      "Assist in developing and implementing frontend and backend solutions",
      "Collaborate with UX/UI teams to create seamless user experiences",
      "Participate in QA processes by understanding project requirements and executing AC testing",
      "Learn how to write automated tests, including unit, end-to-end, and integration tests, using modern testing frameworks",
      "Help maintain and update documentation for both frontend and backend components",
      "Learn and apply best practices for code quality and performance",  
    ],
    imgUrl: "/Images/bztIcon.png",
  },
  {
    id: 2,
    title: "Machine Learning Engineer",
    company: "Sahara Space Pty Ltd",
    date: "Jul. 2023 -- Nov. 2023",
    descriptions: [
      "Led the development of the On-Board Machine Learning system for estimating spacecraft pose, utilizing the SPEED dataset for initial model design and development",
      "As Project Team Lead, allocated work, conducted client meetings, and implemented optimization techniques to enhance performance",
      "Leveraged skills in Python, machine learning, and project management",
    ],
    imgUrl: "/Images/sahara_logo.png",
  },
  {
    id: 3,
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
