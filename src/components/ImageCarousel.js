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
  const alt = "Children playing";

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    cssEase: "linear",
  };
  return (
    <div className="slider-container m-2 lg:mx-auto">
      <Slider {...settings}>
        <div className="">
          <img className="lg:h-15 h-14 h:w-full p-1" src={main1} alt={alt} />
        </div>
        <div className="">
          <img className="lg:h-15 h-14 w-full p-1" src={main2} alt={alt} />
        </div>
        <div className="">
          <img className="lg:h-15 h-14 w-full p-1" src={main3} alt={alt} />
        </div>
        <div className="">
          <img className="lg:h-15 h-14 w-full p-1" src={main4} alt={alt} />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
