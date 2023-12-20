import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//importing pictures
import img1 from "../Images/Card-slider/member1.png";
import img2 from "../Images/Card-slider/member2.png";
import img3 from "../Images/Card-slider/member3.png";

const Testimonial = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    cssEase: "linear",
  };
  return (
    <>
      <div className=" shadow-sm shadow-slate-400 rounded-sm w-[90%] mx-auto h-fit md:h-full md:mx-0 md:w-[25%] xl:w-[15%] px-5 py-10">
        <Slider {...settings}>
          <div className=" w-[30%]">
            <img
              src={img1}
              alt=""
              className=" rounded-full w-[40%] md:w-[70%] mx-auto"
            />
            <p className=" text-center mx-auto w-1/2 md:w-fit">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              id voluptate error, ullam est adipisci, quam alias quidem nesciunt
            </p>
            <p className=" my-2 font-bold text-center">Steave Smith</p>
            <p className=" text-center text-slate-600">ABC Company</p>
          </div>
          <div>
            <img
              src={img2}
              alt=""
              className=" rounded-full w-[40%] md:w-[70%] mx-auto"
            />
            <p className=" mx-auto w-1/2 md:w-fit text-center">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              id voluptate error, ullam est adipisci, quam alias quidem nesciunt
            </p>
            <p className=" my-2 font-bold text-center">Elyse Pery</p>
            <p className=" text-center text-slate-600">XYZ Company</p>
          </div>
          <div>
            <img
              src={img3}
              alt=""
              className=" rounded-full w-[40%] md:w-[70%] mx-auto"
            />
            <p className=" text-center mx-auto w-1/2 md:w-full">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              id voluptate error, ullam est adipisci, quam alias quidem nesciunt
            </p>
            <p className=" my-2 font-bold text-center">Mitchel Starc</p>
            <p className=" text-center text-slate-600">ABC Company</p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Testimonial;
