import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function MySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="bg-gray-200 h-64">Slide 1</div>
        <div className="bg-gray-300 h-64">Slide 2</div>
        <div className="bg-gray-400 h-64">Slide 3</div>
      </Slider>
    </div>
  );
}
