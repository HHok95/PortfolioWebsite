"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#202020] drop-shadow-xl bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-7 py-4 md:px-20 md:py-10">
        <Link
          href={"/"}
          className=" mr-5 text-2xl md:text-5xl font-bold bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-white bg-clip-text text-transparent rounded-full"
        >
          HH
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <li>
              <Link href="/resume.pdf" download title="Resume">
                <span className="'block py-2 pl-3 pr-4 text-white sm:text-lg rounded md:p-0 hover:text-primary-500 duration-500'">Resume</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay
          links={navLinks}
          setNavbarOpen={setNavbarOpen}
          navBarOpen={navbarOpen}
        />
      ) : null}
    </nav>
  );
};

export default NavBar;
