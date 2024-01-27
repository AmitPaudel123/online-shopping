import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//importing images
import blog1 from "../Images/Blog/blog_big_01.jpg";
import blog2 from "../Images/Blog/blog_big_02.jpg";
import blog3 from "../Images/Blog/blog_big_03.jpg";
import { Link } from "react-router-dom";

//arrow customization for slider
//for larger screen
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        backgroundColor: "gray",
        top: "-2.5rem",
        borderRadius: "5px",
        width: "1.5rem",
        height: "1.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "97%",
      }}
      onClick={onClick}
    ></div>
  );
};

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
        top: "-2.5rem",
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



//for smaller devices
const SmallPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        backgroundColor: "gray",
        top: "-2.5rem",
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

const Blogs = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive : [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          cssEase: "linear",
          nextArrow: <SampleNextArrow />,
          prevArrow: <SmallPrevArrow />,},
       
      },
         ]
  };

  
  return (
    <>
      <div className=" w-[95%] mx-auto md:mx-0 md:w-[65%] lg:w-[75%] shadow-sm shadow-slate-400 rounded-sm p-5">
        <div className=" text-2xl font-bold">Latest Blogs</div>
        <hr className=" my-2" />

        {/* for larger screen */}
        <div className=" my-3">
          <Slider {...settings}>
            <div className=" cursor-pointer">
              <img src={blog1} alt="" className=" w-[98%] rounded-md" />
              <div>
                <p className=" font-bold text-2xl hover:text-blue-600 my-2">
                  <Link to="blogpost"> Lorem ipsum dolor sit amet.</Link>
                </p>
                <p className=" text-slate-600 my-2">
                  By Elyse Perry | Dec-6 2023
                </p>
                1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                fugit, laborum, ratione, a dignissimos impedit quam enim quidem
              </div>
            </div>
            <div className=" cursor-pointer">
              <img src={blog2} alt="" className=" w-[98%] rounded-md" />
              <div>
                <p className=" font-bold text-2xl hover:text-blue-600 my-2">
                  <Link to="/blogpost"> Dolore explicabo alias distinctio</Link>
                </p>
                <p className=" text-slate-600 my-2">
                  By Steave Smith | Dec-12 2023
                </p>
                2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                fugit, laborum, ratione, a dignissimos impedit quam enim quidem
              </div>
            </div>
            <div className=" cursor-pointer">
              <img src={blog3} alt="" className=" w-[98%] rounded-md" />
              <div>
                <p className=" font-bold text-2xl hover:text-blue-600 my-2">
                  <Link to="/blogpost"> Exercitationem veritatis eum ad</Link>
                </p>
                <p className=" text-slate-600 my-2">
                  By Steave Smith | Dec-20 2023
                </p>
                3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                fugit, laborum, ratione, a dignissimos impedit quam enim quidem
              </div>
            </div>
            <div className=" cursor-pointer">
              <img src={blog2} alt="" className=" w-[98%] rounded-md" />
              <div>
                <p className=" font-bold text-2xl hover:text-blue-600 my-2">
                  <Link to="/blogpost"> Dignissimos impedit quam enim</Link>
                </p>
                <p className=" text-slate-600 my-2">
                  By Mitchel Starc | Nov-6 2023
                </p>
                4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                fugit, laborum, ratione, a dignissimos impedit quam enim quidem
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Blogs;
