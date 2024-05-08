import React from "react";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="footer footer-center mt-20 p-5 bg-neutral-800 bg-opacity-25 md:block">
      <div className="flex flex-col items-center justify-center">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl font-bold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-white bg-clip-text text-transparent rounded-full"
        >
          HH
        </Link>
        <p className="text-xs font-bold text-[#ADB1BE] opacity-60 py-1">
          Designed and Developed by
        </p>
        <p className="text-xs font-bold text-[#FFFCF5] opacity-60 py-1">
          Hok Heng
        </p>
        <p className="text-xs text-[#ADB1BE] py-1 opacity-60">
          Copyright © 2023 - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
