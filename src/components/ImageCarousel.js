import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImage } from "gatsby-plugin-image";

import main1 from "../images/main1.jpg";
import main2 from "../images/main2.jpg";
import main3 from "../images/main3.jpg";
import main4 from "../images/main4.jpg";

const ImageCarousel = () => {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    cssEase: "linear",
  };
  return (
    <div className="slider-container m-2">
      <Slider {...settings}>
        <div>
          <img src={main1} />
        </div>
        <div>
          <img src={main2} />
        </div>
        <div>
          <img src={main3} />
        </div>
        <div>
          <img src={main4} />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
