import React from "react";
import { motion as m } from "framer-motion";
export default function Hero() {
  return (
    <div className="w-[85%] m-auto text-white lg:mt-[8rem] mt-[6rem] flex gap-3 flex-col-reverse lg:flex-row   ">
      <m.div
        initial={{ opacity: 0, y: +30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:gap-8 gap-4 lg:items-center lg:pt-[3.125rem] xl:pt-[5.2rem]"
      >
        <div className="flex gap-4 flex-col  text-center lg:text-center xl:text-start   lg:items-center lg:gap-8 ">
          {/* heading */}
          <h1 className="font-ont_6 text-lg text-center  xl:text-5xl xl:leading-snug xl:w-[38.25rem] lg:text-2xl">
            Explore the future of the
            <span
              className="meta pl-[0.4rem]
            xl:pl-[1.6rem]"
            >
              Metaverse
            </span>
          </h1>
          {/* p text */}
          <p className="font-pop_2 items-center xl:w-[32.563rem] xl:text-center">
            Let's explore and create your experience with metaverse.
          </p>
        </div>
        {/* buttons */}
        <div className="flex flex-col items-center md:gap-4 gap-6 lg:flex-row xl:gap-8">
          <m.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            type="spring "
            className="font-pop_3 btn_hero-1 w-[150px] xl:w-[173px] h-[45px] xl:h-[54px]"
          >
            Get Started
          </m.button>
          <m.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            type="spring "
            className="font-pop_3 btn_hero-2 w-[150px] xl:w-[173px] h-[45px] xl:h-[54px]"
          >
            {" "}
            Explore Now
          </m.button>
        </div>
        {/* after-btn-text */}
        <div
          //
          className=" hidden md:flex text-center md:gap-12 md:justify-center  "
        >
          <div>
            <h1 className="font-ont_3">29K+</h1>
            <p className="font-pop_2">Artworks</p>
          </div>
          <div>
            <h1 className="font-ont_3">18K+</h1>
            <p className="font-pop_2">Artists</p>
          </div>
          <div>
            <h1 className="font-ont_3">25K+</h1>
            <p className="font-pop_2">Auction</p>
          </div>
        </div>
      </m.div>
      {/* img */}
      <div>
        <img src="/pics/Group 48095504.png" alt=" " />
      </div>
    </div>
  );
}
