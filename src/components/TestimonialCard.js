import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//components
import ast from "../images/svg/ast.svg";
export const TestimonialCard = () => {
  var settings = {
    className: "",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    // autoplaySpeed: 3000,
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
  };
  return (
    <div className="slider-container m-2">
      <Slider {...settings}>
        <div className="py-2 px-1 h-full bg-primary rounded-tr-3xl rounded-bl-3xl">
          <div className="flex">
            <img src={ast} alt="colon" />
            <span className="pl-2 self-end font-medium text-sm">
              Dr Jyothi & Dr Harish Rao <br />
              Parents of Anirudh Rao
            </span>
          </div>
          <div className="my-2">
            <p className="font-medium text-xs">
              “Petits World’s entire team is amazing. My son loves to go to
              school. He learnt a lot. We are thankful to the Petits team.”
            </p>
          </div>
        </div>
        <div className="py-2 px-1 h-full bg-primary rounded-tr-3xl rounded-bl-3xl">
          <div className="flex">
            <img src={ast} alt="colon" />
            <span className="pl-2 self-end font-medium text-sm">
              Mrs. Zareena Ummer Farooq <br />
              Mom of Faraz Ali
            </span>
          </div>
          <div className="my-2">
            <p className="font-medium text-xs">
              “Thank you from bottom of my heart for giving such a good and
              strong foundation to my son.”
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};
