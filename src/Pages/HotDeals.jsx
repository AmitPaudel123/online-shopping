import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import images
import img1 from "../Images/HotDeals/p13.jpg";
import img2 from "../Images/HotDeals/p15.jpg";
import cart from "../Images/cart.png";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        marginRight: "2rem",
        backgroundColor: "gray",
        top: "-1.6rem",
        borderRadius: "5px",
        width: "1.5rem",
        height: "1.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        backgroundColor: "gray",
        top: "-1.6rem",
        borderRadius: "5px",
        width: "1.5rem",
        height: "1.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "10rem",
      }}
      onClick={onClick}
    ></div>
  );
};
const HotDeals = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 800,
    // autoplaySpeed: 2000,
    cssEase: "linear",
    fade: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className=" w-[15%] shadow-sm shadow-black rounded-sm px-4 py-2">
        <p className=" text-lg font-bold text-slate-600 ml-2">Hot Deals</p>
        <hr className=" my-2" />

        <Slider {...settings} className=" ">
          <div>
            <div>
              <div className=" bg-red-400 text-white w-12 h-12 rounded-full text-sm font-bold flex justify-center items-center absolute ml-36 mt-2">
                49% <br /> OFF
              </div>
              <div className=" flex absolute bottom-32 gap-[0.3rem] ">
                <div className=" flex flex-col justify-center items-center px-1 py-1 bg-white rounded-md ml-1">
                  <p className=" font-bold text-sm">120</p>
                  <p>DAYS</p>
                </div>
                <div className=" flex flex-col justify-center items-center px-1 py-1 bg-white rounded-md">
                  <p className=" font-bold text-sm">20</p>
                  <p>HRS</p>
                </div>
                <div className=" flex flex-col justify-center items-center px-1 py-1 bg-white rounded-md">
                  <p className=" font-bold text-sm">36</p>
                  <p>MINS</p>
                </div>
                <div className=" flex flex-col justify-center items-center px-1 py-1 bg-white rounded-md">
                  <p className=" font-bold text-sm">60</p>
                  <p>SECS</p>
                </div>
              </div>
              <img src={img1} alt="" className=" h-52 w-52 mx-auto" />
            </div>
            <div className=" my-3">
              <p>Floral Print Buttoned</p>
              <p className=" text-blue-500">
                $600.00 <del className=" text-slate-600">$800</del>
              </p>
              <div className=" flex bg-blue-600 rounded-md justify-between items-center w-fit cursor-pointer hover:bg-blue-700 my-3">
                <div className=" bg-yellow-400 px-3 py-2 rounded-l-md">
                  <img src={cart} alt="" className=" w-5" />
                </div>
                <div className=" text-lg mx-auto text-white px-3">
                  Add To Cart
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" bg-red-400 text-white w-12 h-12 rounded-full text-sm font-bold flex justify-center items-center absolute ml-36 mt-2">
              35% <br /> OFF
            </div>
            <div className=" flex absolute bottom-32 gap-[0.3rem] ">
              <div className=" flex flex-col justify-center items-center px-1 py-1 bg-white rounded-md ml-1">
                <p className=" font-bold text-sm">120</p>
                <p>DAYS</p>
              </div>
              <div className=" flex flex-col justify-center items-center px-1 py-1 bg-white rounded-md">
                <p className=" font-bold text-sm">20</p>
                <p>HRS</p>
              </div>
              <div className=" flex flex-col justify-center items-center px-1 py-1 bg-white rounded-md">
                <p className=" font-bold text-sm">36</p>
                <p>MINS</p>
              </div>
              <div className=" flex flex-col justify-center items-center px-1 py-1 bg-white rounded-md">
                <p className=" font-bold text-sm">60</p>
                <p>SECS</p>
              </div>
            </div>
            <img src={img2} alt="" className=" h-52 w-52 mx-auto" />
            <div className=" my-3">
              <p>Floral Print Buttoned</p>
              <p className=" text-blue-500">
                $600.00 <del className=" text-slate-600">$800</del>
              </p>
              <div className=" flex bg-blue-600 rounded-md justify-between items-center w-fit cursor-pointer hover:bg-blue-700 my-3">
                <div className=" bg-yellow-400 px-3 py-2 rounded-l-md">
                  <img src={cart} alt="" className=" w-5" />
                </div>
                <div className=" text-lg mx-auto text-white px-3">
                  Add To Cart
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HotDeals;
