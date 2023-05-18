import React from "react";
import { motion as m } from "framer-motion";
export default function Cards() {
  return (
    <div className="text-white w-[85%] m-auto md:mt-32 mt-24 lg:mt-36 xl:mt-44">
      <div className="flex flex-col gap-4 items-center text-center lg:gap-8">
        <m.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-ont_6 text-2xl text-center md:text-3xl xl:text-5xl xl:leading-snug  lg:text-4xl"
        >
          How does the <span className="meta">Metaverse work</span>
        </m.h1>
        <m.p
          initial={{ opacity: 0, y: -90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-pop_6 text-base md:text-xl lg:w-[36.5rem] text-center"
        >
          Adipiscing at in tellus integer. Pellentesque massa placerat duis
          ultricies. Venenatis crasunsus
        </m.p>
      </div>

      {/* cards */}
      <div className="lg:pt-16 pt-10 flex flex-wrap md:gap-10 gap-8  justify-center">
        {/* card1 */}
        <m.div
          initial={{ opacity: 0, x: -23, y: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[23.375rem] h-[27.125rem] bg-[#090823] rounded-3xl flex flex-col gap-3 p-4 "
        >
          <img src="/pics/istock-1354645775jpg-20220210041327 1.png" alt="" />
          <h1 className="font-ont_3">Discuss with Colleagues</h1>
          <p className="font-pop_1 ">
            Working online is the same experience as work ing in an office. This
            will be. achieved with..
          </p>
          <div className="flex gap-4">
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              type="spring "
              className="font-pop_1 btn4"
            >
              Try now
            </m.button>
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              type="spring "
              className="font-pop_1 btn5"
            >
              4$ / 1 Month
            </m.button>
          </div>
        </m.div>
        {/* card2 */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[23.375rem] h-[27.125rem] bg-[#090823] rounded-3xl flex flex-col gap-3 p-4 "
        >
          <img src="/pics/card2.png" alt="" />
          <h1 className="font-ont_3">Virtual Reality Concert</h1>
          <p className="font-pop_1 ">
            Watching concerts virtually is one of the things that can be done in
            cyberspace..
          </p>
          <div className="flex gap-4">
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              type="spring "
              className="font-pop_1 btn4"
            >
              Try now
            </m.button>
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              type="spring "
              className="font-pop_1 btn5"
            >
              4$ / 1 Month
            </m.button>
          </div>
        </m.div>
        {/* card3 */}
        <m.div
          initial={{ opacity: 0, x: 23, y: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[23.375rem] h-[27.125rem] bg-[#090823] rounded-3xl flex flex-col gap-3 p-4 "
        >
          <img src="/pics/card3.png" alt="" />
          <h1 className="font-ont_3">Playing Games</h1>
          <p className="font-pop_1 ">
            For gamers, the metaverse could be an interesting platform of choice
            for the..
          </p>
          <div className="flex gap-4">
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              type="spring "
              className="font-pop_1 btn4"
            >
              Try now
            </m.button>
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              type="spring "
              className="font-pop_1 btn5"
            >
              4$ / 1 Month
            </m.button>
          </div>
        </m.div>
        {/* card4 */}
        <m.div
          initial={{ opacity: 0, x: -23, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[23.375rem] h-[27.125rem] bg-[#090823] rounded-3xl flex flex-col gap-3 p-4 "
        >
          <img src="/pics/card4.png" alt="" />
          <h1 className="font-ont_3">Online Travel</h1>
          <p className="font-pop_1 ">
            With cyberspace, online travel is certainly not impossible. We can
            do this with the help of..
          </p>
          <div className="flex gap-4">
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              type="spring "
              className="font-pop_1 btn4"
            >
              Try now
            </m.button>
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              type="spring "
              className="font-pop_1 btn5"
            >
              4$ / 1 Month
            </m.button>
          </div>
        </m.div>
        {/* card5 */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ dealy: 0.5, duration: 0.5 }}
          className="w-[23.375rem] h-[27.125rem] bg-[#090823] rounded-3xl flex flex-col gap-3 p-4 "
        >
          <img src="/pics/card5.png" alt="" />
          <h1 className="font-ont_3">Artworks</h1>
          <p className="font-pop_1 ">
            In the past, works of art such as paintings could only be seen in
            the real world..
          </p>
          <div className="flex gap-4">
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              type="spring "
              className="font-pop_1 btn4"
            >
              Try now
            </m.button>
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              type="spring "
              className="font-pop_1 btn5"
            >
              4$ / 1 Month
            </m.button>
          </div>
        </m.div>
        {/* card6 */}
        <m.div
          initial={{ opacity: 0, x: 23, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[23.375rem] h-[27.125rem] bg-[#090823] rounded-3xl flex flex-col gap-3 p-4 "
        >
          <img src="/pics/card6.png" alt="" />
          <h1 className="font-ont_3">Digital Clothing</h1>
          <p className="font-pop_1 ">
            The community has also been active with the emergence of paintings
            or drawings..
          </p>
          <div className="flex gap-4">
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              type="spring "
              className="font-pop_1 btn4"
            >
              Try now
            </m.button>
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              type="spring "
              className="font-pop_1 btn5"
            >
              4$ / 1 Month
            </m.button>
          </div>
        </m.div>
      </div>
    </div>
  );
}
