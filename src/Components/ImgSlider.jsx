import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//importing pictures
import slider1 from "../Images/slider1.jpg";
import slider2 from "../Images/slider2.jpg";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        marginRight: "2rem",
      }}
      onClick={onClick}
    ></div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        marginLeft: "2rem",
      }}
      onClick={onClick}
    ></div>
  );
};

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className=" hidden md:block md:w-[70%] lg:w-[75%]">
      <Slider {...settings}>
        <div>
          <div className=" absolute md:ml-[5%] lg:ml-[15%] md:mt-[5%] lg:mt-[10%]">
            <p className=" md:text-xl lg:text-2xl text-slate-600">
              SPRING 2023
            </p>
            <p className=" md:text-2xl lg:text-5xl font-bold lg:my-2">
              Women Fashion
            </p>
            <p className=" text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="  lg:text-lg text-white md:mt-2 lg:mt-4 bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-md">
              SHOP NOW
            </button>
          </div>
          <img src={slider1} alt="" />
        </div>
        <div>
          <div className=" absolute md:ml-[5%] lg:ml-[15%] md:mt-[5%] lg:mt-[10%]">
            <p className=" md:text-xl lg:text-2xl text-slate-600">TOP BRANDS</p>
            <p className=" md:text-2xl lg:text-5xl font-bold lg:my-2">
              New Collections{" "}
            </p>
            <p className=" text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="  lg:text-lg text-white md:mt-2 lg:mt-4 bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-md">
              SHOP NOW
            </button>
          </div>
          <img src={slider2} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default ImgSlider;
