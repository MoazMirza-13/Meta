import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../src/sliderImgs/sI1.png";
import slider2 from "../../src/sliderImgs/sI2.png";
import slider3 from "../../src/sliderImgs/sI3.png";
import slider4 from "../../src/sliderImgs/sI4.png";

import { motion as m } from "framer-motion";

export default function Activity() {
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // fade: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
    pauseOnHover: true,
  };
  return (
    <div className="text-white w-[85%] m-auto flex flex-col  md:mt-32 mt-24 lg:mt-36 xl:mt-44 gap-8">
      <div className="flex flex-col gap-4 items-center">
        <m.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-ont_6 text-2xl text-center md:text-3xl xl:text-5xl xl:leading-snug  lg:text-4xl"
        >
          Our Latest <span className="meta">Activity</span>
        </m.h1>
        <m.p
          initial={{ opacity: 0, y: -90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-pop_6 text-base md:text-xl  text-center"
        >
          Adipiscing at in tellus integer. Pellentesque massa placerat duis
          ultricies. Venenatis cras
        </m.p>
      </div>
      <Slider className="w-[85%] m-auto" {...settings}>
        <div>
          <img src={slider2} alt="" />
        </div>
        <div>
          <img src={slider1} alt="" />
        </div>
        <div>
          <img src={slider3} alt="" />
        </div>
        <div>
          <img src={slider4} alt="" />
        </div>
      </Slider>
    </div>
  );
}
