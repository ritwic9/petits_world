import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//components
import ast from "../images/svg/ast.svg";
export const TestimonialCard = () => {
  var settings = {
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
  };
  return (
    <div className="slider-container m-2">
      <Slider {...settings}>
        {/* Testimonial 1 */}
        <div
          id="slider"
          className="py-2 px-1 bg-primary rounded-tr-3xl rounded-bl-3xl h-14 lg:w-15"
        >
          <div className="flex">
            <img src={ast} alt="colon" />
            <span className="pl-2 self-end font-medium text-sm">
              Dr Jyothi & Dr Harish Rao, <br />
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

        {/* Testimonial 2 */}
        <div className="py-2 px-1 bg-primary rounded-tr-3xl rounded-bl-3xl h-14 lg:w-15">
          <div className="flex">
            <img src={ast} alt="colon" />
            <span className="pl-2 self-end font-medium text-sm">
              Mrs. Zareena Ummer Farooq, <br />
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

        {/* Testimonial 3 */}
        <div className="py-2 px-1 bg-primary rounded-tr-3xl rounded-bl-3xl h-14 lg:w-15">
          <div className="flex">
            <img src={ast} alt="colon" />
            <span className="pl-2 self-end font-medium text-sm">
              Mrs. Shubhi Kumar Shrivastava, <br />
              Mom of Atharva Kumar
            </span>
          </div>
          <div className="my-2">
            <p className="font-medium text-xs">
              “Thank you so much Petits World for giving unconditional love and
              care for my son. Despite of so many kids in school, you all give
              personal attention to every child. You are the best in Pre-school
              here.”
            </p>
          </div>
        </div>

        {/* Testimonial 4 */}
        <div className="py-2 px-1 bg-primary rounded-tr-3xl rounded-bl-3xl h-14 lg:w-15">
          <div className="flex">
            <img src={ast} alt="colon" />
            <span className="pl-2 self-end font-medium text-sm">
              Mrs. Shantha Vijay, <br />
              Mom of Jiya
            </span>
          </div>
          <div className="my-2">
            <p className="font-medium text-xs">
              “Petits is the world of love and care. Thank you so much ! Kids
              will miss you.”
            </p>
          </div>
        </div>

        {/* Testimonial 5 */}
        <div className="py-2 px-1 bg-primary rounded-tr-3xl rounded-bl-3xl h-14 lg:w-15">
          <div className="flex">
            <img src={ast} alt="colon" />
            <span className="pl-2 self-end font-medium text-sm">
              Mrs. Akshata Prabhu, <br />
              Mom of Sakshi Prabhu
            </span>
          </div>
          <div className="my-2">
            <p className="font-medium text-xs">
              “We would like to say that Petits World is the best thing that
              happened to our daughter Sakshi. Thank you for all the wonderful
              things you have thought her. She is all ready for next part of her
              life.”
            </p>
          </div>
        </div>

        {/* Testimonial 6 */}
        <div className="py-2 px-1 bg-primary rounded-tr-3xl rounded-bl-3xl h-14 lg:w-15">
          <div className="flex">
            <img src={ast} alt="colon" />
            <span className="pl-2 self-end font-medium text-sm">
              Mrs. Devina Jadhav, <br />
              Mom of Esha Jadhav
            </span>
          </div>
          <div className="my-2">
            <p className="font-medium text-xs">
              “Organization at its best in all aspects. Very glad that Esha is
              part of your school. You have provided her a solid foundation for
              her future.”
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};
