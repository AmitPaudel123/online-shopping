import React from "react";
import Categories from "./Categories";
import ProductTag from "../Pages/ProductTag";
import Testimonial from "../Pages/Testimonial";

//importing pictures
import banner1 from "../Images/Health&Beauty/cat-banner-1.jpg";
import ShopBy from "./ShopBy";
import List from "./List";

const Health = () => {
  return (
    <>
      <div className=" my-5">
        <div className=" flex flex-col md:flex-row gap-4 justify-center ">
          <Categories />
          <div className=" w-[75%] hidden md:block">
            <img
              src={banner1}
              alt=""
              className=" mx-auto w-full h-full rounded-md"
            />
          </div>
          <div className="hidden md:flex flex-col space-y-3 absolute md:ml-8 lg:ml-[-5rem]">
            <p className=" text-6xl font-bold mt-[5rem]">BIG SALE</p>
            <p className=" text-3xl">Save up to 49% off</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <button className=" bg-blue-600 px-5 py-2 rounded-md text-white text-lg hover:bg-blue-700 w-fit">
              SHOW NOW
            </button>
          </div>
        </div>

        <div className=" flex flex-col flex-wrap md:flex-row justify-center gap-4 my-5">
          {" "}
          <ShopBy />
          <List />
        </div>
      </div>
    </>
  );
};

export default Health;
