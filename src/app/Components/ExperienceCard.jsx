import React from "react";
import Image from "next/image";

const ExperienceCard = ({ title, company, date, descriptions, imgUrl }) => {
  return (
    <div className="flex w-full shrink-0 snap-center flex-col rounded-3xl pb-12 px-6 md:px-14 lg:px-28 md:mx-20 lg:mx-30 md:w-3/4 md:h-3/4 justify-center items-center bg-[#303036]">
      <Image
        src={imgUrl}
        width={300}
        height={150}
        alt=""
        className="my-8"
      />
      <div className="w-full px-6">
        <h4 className="font-bold text-2xl mt-4">{company}</h4>
        <h4 className="text-xl mt-2">{title}</h4>
        <div className="ml-2">
          <h5 className="mt-4 text-lg">{date}</h5>
        </div>
          <ul className="mt-2 list-disc pl-4">
            {descriptions && descriptions.map((d,index) => (
              <li key={index} className="my-1">
                {d}
              </li>
            ))}
          </ul>
          </div>
    </div>
  );
};

export default ExperienceCard;
