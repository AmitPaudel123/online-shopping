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

const NewProducts = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const settings2 = {
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const settings3 = {
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="hidden md:block w-[75%] shadow-sm shadow-black rounded-sm">
        <div className=" flex items-center py-2 justify-between">
          <div className=" text-2xl font-bold ml-4">New Products</div>
          <div className=" flex gap-5 mr-20">
            <div className=" cursor-pointer">All</div>
            <div className=" cursor-pointer">Clothing</div>
            <div className=" cursor-pointer">Electronics</div>
            <div className=" cursor-pointer">Shoes</div>
          </div>
        </div>
        <hr className=" my-2" />
        {/* making responsive */}
        <div className=" hidden xl:block">
          <Slider {...settings}>
            <div>
              <div>
                <div className=" bg-yellow-400 text-black w-12 h-12 rounded-full text-sm  flex justify-center items-center absolute ml-[10rem] mt-2">
                  New
                </div>

                <img src={img1} alt="" className=" h-52 w-52 mx-auto" />
                <div className=" my-3 ml-3">
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
            </div>
            <div>
              <div>
                <div className=" bg-red-400 text-white w-12 h-12 rounded-full text-sm  flex justify-center items-center absolute ml-[10rem] mt-2">
                  Hot
                </div>

                <img src={img2} alt="" className=" h-52 w-52 mx-auto" />
                <div className=" my-3 ml-3">
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
            </div>
            <div>
              <div>
                <div className=" bg-blue-400 text-white w-12 h-12 rounded-full text-sm  flex justify-center items-center absolute ml-[10rem] mt-2">
                  New
                </div>

                <img src={img3} alt="" className=" h-52 w-52 mx-auto" />
                <div className=" my-3 ml-3">
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
            </div>
            <div>
              <div>
                <div className=" bg-red-400 text-white w-12 h-12 rounded-full text-sm  flex justify-center items-center absolute ml-[10rem] mt-2">
                  Sale
                </div>

                <img src={img4} alt="" className=" h-52 w-52 mx-auto" />
                <div className=" my-3 ml-3">
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
            </div>
            <div>
              <div>
                <div className=" bg-blue-400 text-white w-12 h-12 rounded-full text-sm  flex justify-center items-center absolute ml-[10rem] mt-2">
                  New
                </div>

                <img src={img5} alt="" className=" h-52 w-52 mx-auto" />
                <div className=" my-3 ml-3">
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
            </div>
            <div>
              <div>
                <div className=" bg-red-400 text-white w-12 h-12 rounded-full text-sm  flex justify-center items-center absolute ml-[10rem] mt-2">
                  Sale
                </div>

                <img src={img6} alt="" className=" h-52 w-52 mx-auto" />
                <div className=" my-3 ml-3">
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
            </div>
          </Slider>
        </div>
        {/* for tablets */}
        <div className=" hidden lg:block xl:hidden">
          <Slider {...settings2}>
            <div>
              <div>
                <div className=" bg-yellow-400 text-black w-12 h-12 rounded-full text-sm  flex justify-center items-center absolute ml-[10rem] mt-2">
                  New
                </div>

                <img src={img1} alt="" className=" h-52 w-52 mx-auto" />
                <div className=" my-3 ml-3">
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
            </div>
            <div>
              <div>
                <div className=" bg-red-400 text-white w-12 h-12 rounded-full text-sm  flex justify-center items-center absolute ml-[10rem] mt-2">
                  Hot
                </div>

                <img src={img2} alt="" className=" h-52 w-52 mx-auto" />
                <div className=" my-3 ml-3">
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
            </div>
            <div>
              <div>
                <div className=" bg-blue-400 text-white w-12 h-12 rounded-full text-sm  flex justify-center items-center absolute ml-[10rem] mt-2">
                  New
                </div>

                <img src={img3} alt="" className=" h-52 w-52 mx-auto" />
                <div className=" my-3 ml-3">
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
            </div>
            <div>
              <div>
                <div className=" bg-red-400 text-white w-12 h-12 rounded-full text-sm  flex justify-center items-center absolute ml-[10rem] mt-2">
                  Sale
                </div>

                <img src={img4} alt="" className=" h-52 w-52 mx-auto" />
                <div className=" my-3 ml-3">
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
            </div>
            <div>
              <div>
                <div className=" bg-blue-400 text-white w-12 h-12 rounded-full text-sm  flex justify-center items-center absolute ml-[10rem] mt-2">
                  New
                </div>

                <img src={img5} alt="" className=" h-52 w-52 mx-auto" />
                <div className=" my-3 ml-3">
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
            </div>
            <div>
              <div>
                <div className=" bg-red-400 text-white w-12 h-12 rounded-full text-sm  flex justify-center items-center absolute ml-[10rem] mt-2">
                  Sale
                </div>

                <img src={img6} alt="" className=" h-52 w-52 mx-auto" />
                <div className=" my-3 ml-3">
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
            </div>
          </Slider>
        </div>

        {/* for smaller devices, mobilephones */}
        <div className=" hidden md:block lg:hidden">
          <Slider {...settings3}>
            <div>
              <div>
                <div className=" bg-yellow-400 text-black w-12 h-12 rounded-full text-sm  flex justify-center items-center absolute ml-[10rem] mt-2">
                  New
                </div>

                <img src={img1} alt="" className=" h-52 w-52 mx-auto" />
                <div className=" my-3 ml-3">
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
            </div>
            <div>
              <div>
                <div className=" bg-red-400 text-white w-12 h-12 rounded-full text-sm  flex justify-center items-center absolute ml-[10rem] mt-2">
                  Hot
                </div>

                <img src={img2} alt="" className=" h-52 w-52 mx-auto" />
                <div className=" my-3 ml-3">
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
            </div>
            <div>
              <div>
                <div className=" bg-blue-400 text-white w-12 h-12 rounded-full text-sm  flex justify-center items-center absolute ml-[10rem] mt-2">
                  New
                </div>

                <img src={img3} alt="" className=" h-52 w-52 mx-auto" />
                <div className=" my-3 ml-3">
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
            </div>
            <div>
              <div>
                <div className=" bg-red-400 text-white w-12 h-12 rounded-full text-sm  flex justify-center items-center absolute ml-[10rem] mt-2">
                  Sale
                </div>

                <img src={img4} alt="" className=" h-52 w-52 mx-auto" />
                <div className=" my-3 ml-3">
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
            </div>
            <div>
              <div>
                <div className=" bg-blue-400 text-white w-12 h-12 rounded-full text-sm  flex justify-center items-center absolute ml-[10rem] mt-2">
                  New
                </div>

                <img src={img5} alt="" className=" h-52 w-52 mx-auto" />
                <div className=" my-3 ml-3">
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
            </div>
            <div>
              <div>
                <div className=" bg-red-400 text-white w-12 h-12 rounded-full text-sm  flex justify-center items-center absolute ml-[10rem] mt-2">
                  Sale
                </div>

                <img src={img6} alt="" className=" h-52 w-52 mx-auto" />
                <div className=" my-3 ml-3">
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
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default NewProducts;
