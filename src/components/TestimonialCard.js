import React from "react";
import Slider from "react-slick";

//components
import ast from "../images/svg/ast.svg";
export const TestimonialCard = () => {
  var settings = {
    className: "",
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 4,
    initialSlide: 0,
    // responsive: [
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
    // ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="bg-primary p-1">
          <div className="flex justify-between">
            <img src={ast} className="" />
            <span className="self-end">
              Dr Jyothi & Dr Harish Rao Parents of Anirudh Rao
            </span>
          </div>
          <div>
            <p>
              “Petits World’s entire team is amazing. My son loves to go to
              school. He learnt a lot. We are thankful to the Petits team.”
            </p>
          </div>
        </div>
        {/* <div className="bg-primary p-1">
          <div className="flex justify-between">
            <img src={ast} className="" />
            <span className="self-end">
              Dr Jyothi & Dr Harish Rao Parents of Anirudh Rao
            </span>
          </div>
          <div>
            <p>
              “Petits World’s entire team is amazing. My son loves to go to
              school. He learnt a lot. We are thankful to the Petits team.”
            </p>
          </div>
        </div>
        <div className="bg-primary p-1">
          <div className="flex justify-between">
            <img src={ast} className="" />
            <span className="self-end">
              Dr Jyothi & Dr Harish Rao Parents of Anirudh Rao
            </span>
          </div>
          <div>
            <p>
              “Petits World’s entire team is amazing. My son loves to go to
              school. He learnt a lot. We are thankful to the Petits team.”
            </p>
          </div>
        </div> */}
      </Slider>
    </div>
  );
};
