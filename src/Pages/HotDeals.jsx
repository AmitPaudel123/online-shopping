import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import images
import img1 from "../Images/HotDeals/p13.jpg";
import img2 from "../Images/HotDeals/p15.jpg";
import cart from "../Images/cart.png";

//for larger devices
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

// for smaller devices

const SmallPrevArrow = (props) => {
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
        marginLeft: "90%",
      }}
      onClick={onClick}
    ></div>
  );
};

//for larger devices
const HotDeals = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SmallPrevArrow/>,
        }
      }
    ]
  };

 

  return (
    <>
      <div className=" w-[95%] md:w-[30%] lg:w-[25%] xl:w-[15%]  shadow-sm shadow-slate-400 rounded-sm px-4 py-2">
        <p className=" text-lg font-bold text-slate-600 ml-2">Hot Deals</p>
        <hr className=" my-2" />

        <Slider {...settings}>
          <div>
            <div>
              
              <div className=" flex absolute bottom-32 mx-5 md:mx-0 lg:mx-5 gap-4 md:gap-[0.2rem] lg:gap-[0.3rem] ">
                <div className=" flex flex-col justify-center items-center px-1 py-1 bg-white rounded-md md:ml-2 xl:ml-1">
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
              <img src={img1} alt="" className=" mx-auto" />
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
           
            <div className=" flex absolute bottom-32 mx-5 md:mx-0 lg:mx-5 gap-4 md:gap-[0.2rem] lg:gap-[0.3rem]">
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
            <img src={img2} alt="" className=" mx-auto" />
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
