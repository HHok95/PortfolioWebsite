import React from "react";
import Image from "next/image";

const ExperienceSection = () => {
  return (
    <section id="experience" className="text-white font-rubik md:my-28 my-16">
      <h2 className="text-center font-mono text-4xl font-bold mt-4 mb-8 md:mb-12">
        EXPERIENCE
      </h2>

      <div className="flex flex-row gap-2 overflow-x-scroll snap-x snap-mandatory">
        {/* Card 1 */}
        <div className="flex shrink-0 snap-center flex-col rounded-3xl pb-12 px-6 md:px-14 lg:px-28 w-3/4 h-3/4 ml-10 md:ml-20 lg:ml-48 mr-2 justify-center items-center bg-[#303036]">
          <Image
            src={"/Images/sahara_logo.png"}
            width={300}
            height={150}
            alt="Sahara Logo"
          />
          <div className="w-full px-6">
            <h4 className="font-bold text-2xl mt-4">Sahara Space Pty Ltd</h4>
            <h4 className="text-xl mt-2">Project Team Lead</h4>
            <div className="ml-2">
              <h5 className="mt-4">Jul. 2023 -- Nov. 2023</h5>
              <ul className="mt-2 list-disc pl-4">
                <li className="my-1">
                  Led the development of the On-Board Machine Learning system
                  for estimating spacecraft pose.
                </li>
                <li className="my-1">
                  Utilised the SPEED dataset for the initial design and
                  development of the Convolutional Neural Networks.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex shrink-0 snap-center flex-col rounded-3xl pb-12 px-6 md:px-14 lg:px-28 w-3/4 h-3/4 mx-2 justify-center items-center bg-[#303036]">
          <Image
            src={"/Images/sahara_logo.png"}
            width={300}
            height={150}
            alt="Sahara Logo"
          />
          <div className="w-full px-6">
            <h4 className="font-bold text-2xl mt-4">Sahara Space Pty Ltd</h4>
            <h4 className="text-xl mt-2">Project Team Lead</h4>
            <div className="ml-2">
              <h5 className="mt-4">Jul. 2023 -- Nov. 2023</h5>
              <ul className="mt-2 list-disc pl-4">
                <li className="my-1">
                  Led the development of the On-Board Machine Learning system
                  for estimating spacecraft pose.
                </li>
                <li className="my-1">
                  Utilised the SPEED dataset for the initial design and
                  development of the Convolutional Neural Networks.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex shrink-0 snap-center flex-col rounded-3xl pb-12 px-6 md:px-14 lg:px-28 mr-10 md:mr-20 lg:mr-48 w-3/4 h-3/4 mx-2 justify-center items-center bg-[#303036]">
          <Image
            src={"/Images/sahara_logo.png"}
            width={300}
            height={150}
            alt="Sahara Logo"
          />
          <div className="w-full px-6">
            <h4 className="font-bold text-2xl mt-4">Sahara Space Pty Ltd</h4>
            <h4 className="text-xl mt-2">Project Team Lead</h4>
            <div className="ml-2">
              <h5 className="mt-4">Jul. 2023 -- Nov. 2023</h5>
              <ul className="mt-2 list-disc pl-4">
                <li className="my-1">
                  Led the development of the On-Board Machine Learning system
                  for estimating spacecraft pose.
                </li>
                <li className="my-1">
                  Utilised the SPEED dataset for the initial design and
                  development of the Convolutional Neural Networks.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
