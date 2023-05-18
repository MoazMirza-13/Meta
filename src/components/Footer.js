import React from "react";
import { motion as m } from "framer-motion";
export default function Footer() {
  return (
    <div className="bg-[#090823] text-white mt-[9rem] xl:p-16 p-5 md:p-16 lg:p-12 ">
      <div className=" m-auto flex-wrap  flex md:gap-12 xl:gap-[3.5rem] gap-6 md:justify-center lg:justify-start lg:text-start md:text-center ">
        <m.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-3 md:gap-8"
        >
          <h1 className="meta font-ont_6 text-3xl md:text-5xl xl:text-5xl xl:leading-snug  lg:text-4xl">
            Meta
          </h1>
          <p className="font-pop_6 text-base md:text-xl md:w-[28.75rem] xl:w-[28.75rem] lg:w-[25.75rem]">
            Adipiscing at in tellus integer. Pellentesque massa placerat duis
            ultricies lacus. Nisi porta lorem mollis aliquam ut porttitor
          </p>
        </m.div>
        {/* about us */}
        <m.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-3 md:gap-6"
        >
          <h1 className="font-ont_6 text-lg md:text-3xl  xl:leading-snug  lg:text-2xl">
            About Us
          </h1>
          <ul className="font-pop_6 text-sm md:text-xl flex flex-col gap-1">
            <li className="cursor-pointer">About Meta</li>
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">FAQ</li>
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Terms of Service</li>
          </ul>
        </m.div>
        {/* services */}
        <m.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col gap-3 md:gap-6"
        >
          <h1 className="font-ont_6 text-lg md:text-3xl xl:leading-snug  lg:text-2xl ">
            Services
          </h1>
          <ul className="font-pop_6 text-sm md:text-xl flex flex-col gap-1">
            <li className="cursor-pointer">NFT Marketplace</li>
            <li className="cursor-pointer">Virtual Concert</li>
            <li className="cursor-pointer">Gaming</li>
            <li className="cursor-pointer">Artwork</li>
            <li className="cursor-pointer">Online Travel</li>
          </ul>
        </m.div>
        {/* contact */}
        <m.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col gap-3 md:pt-0 pt-4 md:gap-6"
        >
          <h1 className="font-ont_6 text-xl md:text-3xl xl:leading-snug  lg:text-2xl hidden md:block ">
            Contact
          </h1>
          <ul className="flex gap-6  md:justify-center justify-start lg:justify-normal">
            <li className="cursor-pointer">
              <img src="/pics/LinkedIn.png" alt="" />
            </li>
            <li className="cursor-pointer">
              <img src="/pics/Twitter Squared.png" alt="" />
            </li>
            <li className="cursor-pointer">
              <img src="/pics/Instagram.png" alt="" />
            </li>
            <li className="cursor-pointer">
              <img src="/pics/Facebook.png" alt="" />
            </li>
          </ul>
          <p className="font-pop_6 text-sm md:text-xl ">
            2022 © Meta.com All right reserved.
          </p>
        </m.div>
      </div>
    </div>
  );
}
