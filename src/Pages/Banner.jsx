import React from "react";

//importing pictures
import img1 from "../Images/Banners/home-banner1.jpg";
import img2 from "../Images/Banners/home-banner2.jpg";
import img3 from "../Images/Banners/home-banner3.jpg";

const Banner = () => {
  return (
    <>
      <div className=" w-[90%] md:w-[70%] lg:w-[75%] mx-auto md:mx-0 flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-6 py-5 ">
        <img src={img1} alt="" className=" w-[100%] md:w-[32%] rounded-md" />
        <img src={img3} alt="" className=" w-[100%] md:w-[32%] rounded-md" />
        <img src={img2} alt="" className=" w-[100%] md:w-[32%] rounded-md" />
      </div>
    </>
  );
};

export default Banner;
