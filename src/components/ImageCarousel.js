import React from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";

import main1 from "../images/main1.jpg";
import main2 from "../images/main2.jpg";
import main3 from "../images/main3.jpg";
import main4 from "../images/main4.jpg";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
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
      </Slider>
    </div>
  );
};

export default ImageCarousel;
