"use client"
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Grocery Price Comparison Website",
    description: "A React-based Grocery Price Matching and Delivery platform with Microservice Architecture, leveraging Spring Boot MVC for API development and implementing a CI/CD pipeline using GitHub Actions for automated deployment.",
    image: "/Images/Projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "#project",
    previewUrl: "#project",
  },
  {
    id: 2,
    title: "Histopathology Cancer Cell Classification",
    description: "A Machine Learning system that can classify histopathology images of cancerous cells with an f1-score of 0.86 trained on over 20,000 images.",
    image: "/Images/Projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "#project",
    previewUrl: "#project",
  },
  {
    id: 3,
    title: "Spacecraft Pose Estimation",
    description: "A high-precision spacecraft pose estimation ML model in Python using Tensorflow through rigorous team-based efforts and iterative testing.",
    image: "/Images/Projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "#project",
    previewUrl: "#project",
  }
];

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              tags={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
