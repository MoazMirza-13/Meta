import React from "react";
import { motion as m } from "framer-motion";

export default function AfterHero() {
  return (
    <div className="w-[85%] m-auto text-white flex flex-col lg:flex-row justify-between items-center lg:mt-0 md:mt-40 mt-20 gap-8 lg:gap-12 xl:gap-8  ">
      <m.img
        className="lg:w-[50%] w-auto xl:w-auto "
        initial={{ opacity: 0, x: -20, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        src="/pics/Group 48095505.png"
        alt=""
      />
      <m.div
        initial={{ opacity: 0, x: 20, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col md:gap-8 gap-4 text-center items-center"
      >
        <h1 className="font-ont_6 text-xl text-center md:text-3xl xl:text-5xl xl:leading-snug  lg:text-4xl">
          What is <span className="meta">Metaverse</span>
        </h1>
        <p className="font-pop_6 text-base md:text-xl xl:text-xl lg:text-lg xl:w-[32.75rem] ">
          Adipiscing at in tellus integer. Pellentesque massa placerat duis
          ultricies lacus. Nisi porta lorem mollis aliquam ut porttitor leo.
          Venenatis cras..
        </p>
        <m.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          type="spring "
          className="font-pop_3 btn3 "
        >
          Know More
        </m.button>
      </m.div>
    </div>
  );
}
