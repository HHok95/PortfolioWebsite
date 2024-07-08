"use client"
import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ProjectCard = ({ imgUrl, title, description, previewUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {/* <Link href={gitUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>
          </Link> */}
          {/* <Link href={previewUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>
          </Link> */}
          <button onClick={openModal} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>
          </button>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3  bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
      {isModalOpen && (
        // Create a modal to display the full size image
        <div 
          className="fixed inset-0 bg-opacity-50 bg-black z-50 flex justify-center items-center"
          onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
        >
          <div className="flex flex-col modal-content max-w-[75%] max-h-[75%]">
            <button onClick={closeModal} className="flex justify-end p-2 text-slate-300 hover:text-white">
              <XMarkIcon className="h-10 w-10" />
            </button>
            <img src={imgUrl} alt="Full size image"/>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
