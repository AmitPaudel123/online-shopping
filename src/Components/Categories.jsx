import React from "react";

import arrow from "../Images/icons8-arrow-24.png";
import clothing from "../Images/icons8-shopping-bag-50 (1).png";
import electronic from "../Images/icons8-laptop-50.png";
import health from "../Images/icons8-health-50.png";
import shoes from "../Images/icons8-dog-paw-64.png";
import watches from "../Images/icons8-clock-50.png";
import garden from "../Images/icons8-leaf-24.png";
import kids from "../Images/icons8-paper-plane-50.png";
import jewellery from "../Images/icons8-diamond-50.png";
import sports from "../Images/icons8-football-50.png";
const Categories = () => {
  return (
    <>
      <div className=" bg-yellow-300 rounded-md shadow-sm shadow-slate-400 w-[90%] mx-auto md:mx-0 md:w-fit xl:w-[15%]">
        <div className="  text-xl px-4 py-2">
          <span className=" text-2xl text-black"> &#9776;</span> Categories
        </div>
        <div className=" bg-white px-4 py-2 text-lg cursor-pointer text-slate-600 space-y-2">
          <div className="flex justify-between">
            <div className=" flex items-center space-x-1">
              {" "}
              <img src={clothing} alt="" className="w-4" />
              <div> Clothing</div>
            </div>
            <img src={arrow} alt="" />
          </div>
          <hr />
          <div className=" flex justify-between">
            <div className=" flex items-center space-x-1">
              <img src={electronic} alt="" className="w-4" />

              <div>Electronics</div>
            </div>
            <img src={arrow} alt="" />
          </div>
          <hr />
          <div className=" flex justify-between">
            <div className=" flex items-center space-x-1">
              <img src={shoes} alt="" className="w-4" />

              <div>Shoes</div>
            </div>
            <img src={arrow} alt="" />
          </div>
          <hr />
          <div className=" flex justify-between">
            <div className=" flex items-center space-x-1">
              <img src={watches} alt="" className="w-4" />

              <div>Watches</div>
            </div>
            <img src={arrow} alt="" />
          </div>
          <hr />
          <div className=" flex justify-between">
            <div className=" flex items-center space-x-1">
              <img src={jewellery} alt="" className="w-4" />

              <div>Jewellery</div>
            </div>
            <img src={arrow} alt="" />
          </div>
          <hr />
          <div className=" flex justify-between">
            <div className=" flex items-center space-x-1">
              <img src={health} alt="" className="w-4" />

              <div>Health & Beauty</div>
            </div>
            <img src={arrow} alt="" />
          </div>
          <hr />
          <div className=" flex justify-between">
            <div className=" flex items-center space-x-1">
              <img src={kids} alt="" className=" w-4" />
              <div>Kids & Babies</div>
            </div>
            <img src={arrow} alt="" />
          </div>
          <hr />
          <div className=" flex justify-between">
            <div className=" flex items-center space-x-1">
              <img src={sports} alt="" className=" w-4" />
              <div>Sports</div>
            </div>
            <img src={arrow} alt="" />
          </div>
          <hr />
          <div className=" flex justify-between">
            <div className=" flex items-center space-x-1">
              <img src={garden} alt="" className=" w-4" />

              <div>Home & Garden</div>
            </div>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
