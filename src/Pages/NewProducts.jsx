import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//importing images
import img1 from "../Images/NewProducts/p1.jpg";
import img2 from "../Images/NewProducts/p11.jpg";
import img3 from "../Images/NewProducts/p2.jpg";
import img4 from "../Images/NewProducts/p4.jpg";
import img5 from "../Images/NewProducts/p5.jpg";
import img6 from "../Images/NewProducts/p6.jpg";
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

const NewProducts = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive : [
{
  breakpoint: 1024,
  settings: { slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SmallPrevArrow />,},
 
},

{
  breakpoint: 767,
  settings:{ slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SmallPrevArrow/>,}
 
},
   ]
  };


  return (
    <>
      <div className=" w-[95%] mx-auto md:mx-0 md:w-[65%] lg:w-[75%] shadow-sm shadow-slate-400 rounded-sm">
        <div className=" flex flex-col lg:flex-row lg:items-center py-2 justify-between">
          <div className=" text-2xl font-bold ml-4">New Products</div>
          <div className=" flex gap-2 lg:gap-5 ml-4 lg:ml-0 md:mr-3 lg:mr-20">
            <div className=" cursor-pointer">All</div>
            <div className=" cursor-pointer">Clothing</div>
            <div className=" cursor-pointer">Electronics</div>
            <div className=" cursor-pointer">Shoes</div>
          </div>
        </div>
        <hr className=" my-2" />

        
        <div className=" ">
          <Slider {...settings}>
            <div>
              <div>
               

                <img
                  src={img1}
                  alt=""
                  className=" w-[95%] mx-auto rounded-md"
                />
                <div className=" my-3 ml-3">
                  <p>Floral Print Buttoned</p>
                  <p className=" text-blue-500">
                    $600.00 <del className=" text-slate-600">$800</del>
                  </p>
                  <div className=" flex bg-blue-600 rounded-md justify-between items-center w-fit md:py-3 lg:py-0 cursor-pointer hover:bg-blue-700 my-3">
                    <div className=" bg-yellow-400 px-3 py-2 rounded-l-md md:hidden lg:block ">
                      <img src={cart} alt="" className=" w-5" />
                    </div>
                    <div className=" text-lg mx-auto text-white px-3">
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
              

                <img
                  src={img2}
                  alt=""
                  className=" w-[95%] mx-auto rounded-md"
                />
                <div className=" my-3 ml-3">
                  <p>Floral Print Buttoned</p>
                  <p className=" text-blue-500">
                    $600.00 <del className=" text-slate-600">$800</del>
                  </p>
                  <div className=" flex bg-blue-600 rounded-md justify-between items-center w-fit cursor-pointer md:py-3 lg:py-0 hover:bg-blue-700 my-3">
                    <div className=" bg-yellow-400 px-3 py-2 rounded-l-md md:hidden lg:block">
                      <img src={cart} alt="" className=" w-5" />
                    </div>
                    <div className=" text-lg mx-auto text-white px-3">
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
            

                <img
                  src={img3}
                  alt=""
                  className=" w-[95%] mx-auto rounded-md"
                />
                <div className=" my-3 ml-3">
                  <p>Floral Print Buttoned</p>
                  <p className=" text-blue-500">
                    $600.00 <del className=" text-slate-600">$800</del>
                  </p>
                  <div className=" flex bg-blue-600 rounded-md justify-between items-center w-fit cursor-pointer md:py-3 lg:py-0 hover:bg-blue-700 my-3">
                    <div className=" bg-yellow-400 px-3 py-2 rounded-l-md md:hidden lg:block">
                      <img src={cart} alt="" className=" w-5" />
                    </div>
                    <div className=" text-lg mx-auto text-white px-3">
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
              

                <img
                  src={img4}
                  alt=""
                  className=" w-[95%] mx-auto rounded-md"
                />
                <div className=" my-3 ml-3">
                  <p>Floral Print Buttoned</p>
                  <p className=" text-blue-500">
                    $600.00 <del className=" text-slate-600">$800</del>
                  </p>
                  <div className=" flex bg-blue-600 rounded-md justify-between items-center w-fit cursor-pointer md:py-3 lg:py-0 hover:bg-blue-700 my-3">
                    <div className=" bg-yellow-400 px-3 py-2 rounded-l-md md:hidden lg:block">
                      <img src={cart} alt="" className=" w-5" />
                    </div>
                    <div className=" text-lg mx-auto text-white px-3">
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
            
                <img
                  src={img5}
                  alt=""
                  className=" w-[95%] mx-auto rounded-md"
                />
                <div className=" my-3 ml-3">
                  <p>Floral Print Buttoned</p>
                  <p className=" text-blue-500">
                    $600.00 <del className=" text-slate-600">$800</del>
                  </p>
                  <div className=" flex bg-blue-600 rounded-md justify-between items-center w-fit cursor-pointer md:py-3 lg:py-0 hover:bg-blue-700 my-3">
                    <div className=" bg-yellow-400 px-3 py-2 rounded-l-md md:hidden lg:block">
                      <img src={cart} alt="" className=" w-5" />
                    </div>
                    <div className=" text-lg mx-auto text-white px-3">
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>

                <img
                  src={img6}
                  alt=""
                  className=" w-[95%] mx-auto rounded-md"
                />
                <div className=" my-3 ml-3">
                  <p>Floral Print Buttoned</p>
                  <p className=" text-blue-500">
                    $600.00 <del className=" text-slate-600">$800</del>
                  </p>
                  <div className=" flex bg-blue-600 rounded-md justify-between items-center w-fit cursor-pointer md:py-3 lg:py-0 hover:bg-blue-700 my-3">
                    <div className=" bg-yellow-400 px-3 py-2 rounded-l-md md:hidden lg:block">
                      <img src={cart} alt="" className=" w-5" />
                    </div>
                    <div className=" text-lg mx-auto text-white px-3">
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
       
      </div>
    </>
  );
};

export default NewProducts;
