"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Hello, I&apos;m</span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Hok',
                            1000, // wait 1s
                            'a Software Engineer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={30}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-6">
                    I&apos;m currently looking for new opportunities, my inbox is always open. I&apos;ll try my best to get back to you!
                </p>
                <div>
                    <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
                    <button className='px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 text-white rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        src={'/Images/hero-image.jpeg'}
                        width={300}
                        height={300}
                        alt='Hero Image'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection