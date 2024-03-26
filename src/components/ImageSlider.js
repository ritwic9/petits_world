import React from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";

import main1 from "../images/main1.jpg";
import main2 from "../images/main2.jpg";
import main3 from "../images/main3.jpg";
import main4 from "../images/main4.jpg";

const ImageSlider = () => {
  console.log(main1);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //       infinite: true,
      //       dots: true,
      //     },
      //   },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //       initialSlide: 2,
      //     },
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //     },
      //   },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="mx-11">
          <img src={main1} alt="trust" className="" />
        </div>
        <div>
          <img src={main2} alt="trust" className="" />
        </div>
        <div>
          <img src={main3} alt="trust" className="" />
        </div>
        <div>
          <img src={main4} alt="trust" className="" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
