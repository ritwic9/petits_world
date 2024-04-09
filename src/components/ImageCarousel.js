import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImage } from "gatsby-plugin-image";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 8000,
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
          <StaticImage
            className="lg:h-15 h-14 h:w-full p-1"
            src="../images/m1.jpg"
            alt="Children playing in school"
            placeholder="blurred"
            transformOptions={{ fit: "cover", cropFocus: "attention" }}
          />
        </div>
        <div className="">
          <StaticImage
            className="lg:h-15 h-14 w-full p-1"
            src="../images/m2.jpg"
            alt="Field trip"
            placeholder="blurred"
            transformOptions={{ fit: "cover", cropFocus: "attention" }}
          />
        </div>
        <div className="">
          <StaticImage
            className="lg:h-15 h-14 w-full p-1"
            src="../images/m3.jpg"
            alt="Children playing in the park"
            placeholder="blurred"
            transformOptions={{ fit: "cover", cropFocus: "attention" }}
          />
        </div>
        <div className="">
          <StaticImage
            className="lg:h-15 h-14 w-full p-1"
            src="../images/m4.jpg"
            alt="Adventure excursions"
            placeholder="blurred"
            transformOptions={{ fit: "cover", cropFocus: "attention" }}
          />
        </div>
        <div className="">
          <StaticImage
            className="lg:h-15 h-14 w-full p-1"
            src="../images/m5.jpg"
            alt="Children in class"
            placeholder="blurred"
            transformOptions={{ fit: "cover", cropFocus: "attention" }}
          />
        </div>
        <div className="">
          <StaticImage
            className="lg:h-15 h-14 w-full p-1"
            src="../images/m6.jpg"
            alt="Children playing with toys and puzzles"
            placeholder="blurred"
            transformOptions={{ fit: "cover", cropFocus: "attention" }}
          />
        </div>
        <div className="">
          <StaticImage
            className="lg:h-15 h-14 w-full p-1"
            src="../images/m7.jpg"
            alt="Children dancing"
            placeholder="blurred"
            transformOptions={{ fit: "cover", cropFocus: "attention" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
