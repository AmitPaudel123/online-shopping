import React from "react";
import Categories from "../Components/Categories";
import HotDeals from "./HotDeals";
import NewProducts from "./NewProducts";
import ImgSlider from "../Components/ImgSlider";
import ProductTag from "./ProductTag";
import Banner from "./Banner";
import Testimonial from "./Testimonial";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <>
      {" "}
      <div className=" flex flex-col-reverse md:flex-row justify-center  mt-8 gap-2 xl:gap-4">
        <Categories />
        <ImgSlider />
      </div>
      <div className=" flex flex-col md:flex-row justify-center mt-5 gap-4 ">
        <HotDeals />
        <NewProducts />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-5">
        <ProductTag />
        <Banner />
      </div>
      <div className=" flex flex-col md:flex-row justify-center items-center my-4 gap-4">
        <Testimonial />
        <Blogs />
      </div>
    </>
  );
};

export default Home;
