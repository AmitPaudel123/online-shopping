import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//importing images
import blog1 from "../Images/Blog/blog_big_01.jpg";
import blog2 from "../Images/Blog/blog_big_02.jpg";
import blog3 from "../Images/Blog/blog_big_03.jpg";

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

// for smaller devices
const SampleNextArrow1 = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        marginRight: "0.2rem",
        backgroundColor: "gray",
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
const SamplePrevArrow1 = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundColor: "gray",
        borderRadius: "5px",
        width: "1.5rem",
        height: "1.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "0.2rem",
      }}
      onClick={onClick}
    ></div>
  );
};

const Blogs = () => {
  const settings1 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const settings2 = {
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow1 />,
    prevArrow: <SamplePrevArrow1 />,
  };

  const settings3 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow1 />,
    prevArrow: <SamplePrevArrow1 />,
  };
  return (
    <>
      <div className=" w-[90%] mx-auto md:mx-0 md:w-[65%] lg:w-[75%] shadow-sm shadow-slate-400 rounded-sm p-5">
        <div className=" text-2xl font-bold">Latest Blogs</div>
        <hr className=" my-2" />

        {/* for larger screen */}
        <div className="hidden lg:block my-3">
          <Slider {...settings1}>
            <div className=" cursor-pointer">
              <img src={blog1} alt="" className=" w-[98%] rounded-md" />
              <div>
                <p className=" font-bold text-2xl hover:text-blue-600 my-2">
                  Lorem ipsum dolor sit amet.
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
                  Dolore explicabo alias distinctio{" "}
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
                  Exercitationem veritatis eum ad{" "}
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
                  Dignissimos impedit quam enim{" "}
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

        {/* for medium-size screen */}
        <div className="hidden md:block lg:hidden my-3">
          <Slider {...settings2}>
            <div className=" cursor-pointer">
              <img src={blog1} alt="" className=" w-[98%] rounded-md" />
              <div>
                <p className=" font-bold text-2xl hover:text-blue-600 my-2">
                  Lorem ipsum dolor sit amet.
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
                  Dolore explicabo alias distinctio{" "}
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
                  Exercitationem veritatis eum ad{" "}
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
                  Dignissimos impedit quam enim{" "}
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

        {/* for smaller device */}
        <div className=" md:hidden my-3">
          <Slider {...settings3}>
            <div className=" cursor-pointer">
              <img src={blog1} alt="" className=" w-[98%] rounded-md mx-auto" />
              <div>
                <p className=" font-bold text-2xl hover:text-blue-600 my-2">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className=" text-slate-600 my-2">
                  By Elyse Perry | Dec-6 2023
                </p>
                1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                fugit, laborum, ratione, a dignissimos impedit quam enim quidem
              </div>
            </div>
            <div className=" cursor-pointer">
              <img src={blog2} alt="" className=" w-[98%] rounded-md mx-auto" />
              <div>
                <p className=" font-bold text-2xl hover:text-blue-600 my-2">
                  Dolore explicabo alias distinctio{" "}
                </p>
                <p className=" text-slate-600 my-2">
                  By Steave Smith | Dec-12 2023
                </p>
                2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                fugit, laborum, ratione, a dignissimos impedit quam enim quidem
              </div>
            </div>
            <div className=" cursor-pointer">
              <img src={blog3} alt="" className=" w-[98%] rounded-md mx-auto" />
              <div>
                <p className=" font-bold text-2xl hover:text-blue-600 my-2">
                  Exercitationem veritatis eum ad{" "}
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
                  Dignissimos impedit quam enim{" "}
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
