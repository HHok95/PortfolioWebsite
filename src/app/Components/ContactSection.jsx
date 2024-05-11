"use client";
import { React } from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center md:items-start ">
        <div className="flex flex-col md:flex-row justify-center items-center">
        <EnvelopeIcon className="h-12 w-12 text-white" />
        <span className="text-2xl text-white px-6">henghok95@gmail.com</span>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
        <MapPinIcon className="h-12 w-12 text-white" />
        <span className="text-2xl text-white px-6">Melbourne, Victoria, Australia</span>
        </div>
      </div>
      
    </section>
  );
};

export default ContactSection;
