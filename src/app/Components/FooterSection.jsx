import React from "react";

const FooterSection = () => {
  return (
    <footer className="footer footer-center mt-20 p-5 bg-neutral-800 bg-opacity-20 md:block z-10">
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl md:text-5xl font-bold bg-gradient-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent rounded-full">
          HH
        </span>
        <span className="text-xs text-white py-1 opacity-60">
          Copyright © 2024 - All right reserved
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
