"use client";
import { React, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contactFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().optional(),
  message: z.string().min(1, { message: "Message cannot be empty" }),
});

const ContactSection = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });
  const { errors, isSubmitSuccessful } = formState;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const handleSubmission = async (formValues) => {
    const JSONdata = JSON.stringify(formValues);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await toast.promise(fetch(endpoint, options), {
      pending: "Message is sending... 🚀",
      success: "Message sent! 👌",
      error: "Failed to send message. 😢",
    });
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 md:pt-36 py-24 gap-4 relative"
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
          <Link
            href={"https://github.com/HHok95/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/hokheng/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form
          className="flex flex-col"
          onSubmit={handleSubmit(handleSubmission)}
        >
          <div className="mb-6">
            <label className="text-white block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="alan.turing@machine.com"
              {...register("email")}
            />
            <div className="text-red-500 text-xs px-2 py-1">
              {errors.email?.message}
            </div>
          </div>
          <div className="mb-6">
            <label className="text-white block text-sm mb-2 font-medium">
              Subject
            </label>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
              {...register("subject")}
            />
            <div className="text-red-500 text-xs px-2">
              {errors.subject?.message}
            </div>
          </div>
          <div className="mb-6">
            <label className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
              {...register("message")}
            />
            <div className="text-red-500 text-xs px-2 py-1">
              {errors.message?.message}
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default ContactSection;
