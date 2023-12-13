import React, { useState } from "react";

//imorting images for navbar
import logo from "../Images/logo1.png";
import cartpic from "../Images/cart.png";
import clothingpic from "../Images/top-menu-banner.jpg";
import electronicpic from "../Images/top-menu-banner1.jpg";
import cartSamplePic from "../Images/p4.jpg";

import downarr from "../Images/icons8-sort-down-30.png";
import search from "../Images/icons8-search-50.png";
import acc from "../Images/icons8-person-24.png";
import login from "../Images/icons8-padlock-50.png";
import cartlogo from "../Images/icons8-love-26.png";
import checkout from "../Images/icons8-correct-64.png";
const Navbar = () => {
  const [usd, setUsd] = useState(false);
  const [english, setEnglish] = useState(false);
  const [catagories, setCategories] = useState(false);
  const [cart, setCart] = useState(false);
  const [clothing, setClothing] = useState(false);
  const [electronic, setElectronic] = useState(false);
  const [pages, setPages] = useState(false);

  // for smaller screens
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className=" bg-blue-500 ">
        <div className=" flex mx-16 py-3 text-white justify-between">
          <div className=" flex gap-4">
            <div>
              {" "}
              <div
                className=" cursor-pointer flex"
                onMouseOver={() => {
                  setUsd(true);
                }}
                onMouseLeave={() => {
                  setUsd(false);
                }}
              >
                USD
                <img src={downarr} alt="" className="w-[1rem]" />
              </div>
              {/* USD content */}
              {usd && (
                <div
                  className=" absolute bg-white text-black flex flex-col pag-2 px-6 shadow-sm shadow-black rounded-sm"
                  onMouseOver={() => {
                    setUsd(true);
                  }}
                  onMouseLeave={() => {
                    setUsd(false);
                  }}
                >
                  <p className=" cursor-pointer">USD</p>
                  <p className=" cursor-pointer">INR</p>
                  <p className=" cursor-pointer">BPB</p>
                </div>
              )}
            </div>
            <div>
              <p
                className=" cursor-pointer hidden sm:flex"
                onMouseOver={() => {
                  setEnglish(true);
                }}
                onMouseLeave={() => {
                  setEnglish(false);
                }}
              >
                <div>English</div>
                <img src={downarr} alt="" className=" w-4" />
              </p>
              {/* English content */}
              {english && (
                <div
                  className=" absolute bg-white text-black flex flex-col pag-2 px-6 shadow-sm shadow-black rounded-sm"
                  onMouseOver={() => {
                    setEnglish(true);
                  }}
                  onMouseLeave={() => {
                    setEnglish(false);
                  }}
                >
                  <p className=" cursor-pointer">English</p>
                  <p className=" cursor-pointer">French</p>
                  <p className=" cursor-pointer">German</p>
                </div>
              )}
            </div>
          </div>
          <div className=" flex gap-2 items-center">
            <div className=" cursor-pointer border-r-2 border-slate-400 px-2">
              <p className=" hidden md:block">My Account</p>
              <div>
                <img src={acc} alt="" className=" md:hidden w-5" />
              </div>
            </div>
            <div className=" hidden md:block cursor-pointer border-r-2 border-slate-400 pr-2">
              Wishlist
            </div>
            <div className=" cursor-pointer border-r-2 border-slate-400 pr-2">
              <p className=" hidden md:block"> My Cart</p>
              <img src={cartlogo} alt="" className="md:hidden w-5" />
            </div>
            <div className=" cursor-pointer border-r-2 border-slate-400 pr-2">
              {" "}
              <p className=" hidden md:block"> Checkout</p>
              <img src={checkout} alt="" className="md:hidden w-5" />
            </div>
            <div className=" cursor-pointer">
              <p className=" hidden md:block">Login</p>
              <img src={login} alt="" className=" md:hidden w-5" />
            </div>
          </div>
        </div>

        {/* search and navigation bar */}
        <div className=" flex flex-col gap-4 md:gap-0 md:flex-row xl:mx-12 py-8 items-center justify-center md:justify-around">
          <img src={logo} alt="" className=" w-fit" />
          <div className="w-fit flex items-center">
            <input
              type="search"
              name=""
              placeholder=" Search here..."
              className=" py-4 rounded-l-full px-12 md:px-6 md:w-[20rem] lg:w-[35rem] xl:w[40rem]"
            />
            <button className="py-4 px-3 w-16 rounded-r-full m-0 text-black cursor-pointer bg-yellow-300">
              <img src={search} alt="" className="w-6" />
            </button>
          </div>

          {/* cart section */}
          <div
            className=" flex gap-4 cursor-pointer w-fit"
            onClick={() => {
              !cart ? setCart(true) : setCart(false);
            }}
          >
            <img src={cartpic} alt="img not found" className=" w-12" />
            <div className="text-white">
              <p className=" text-lg">Shopping Cart</p>
              <p className=" text-xl font-bold">$4580</p>
              {cart && (
                <div className=" absolute bg-white text-black shadow-sm shadow-black rounded-md  p-4 md:ml-[-6rem] xl:ml-[-5rem]">
                  <div className="flex gap-3 mb-4">
                    <img
                      src={cartSamplePic}
                      alt="img not found"
                      className=" w-10"
                    />
                    <div>
                      <p
                        className="lg mt-3
                    "
                      >
                        Sample Product
                      </p>
                      <p className=" font-bold text-blue-500">$600.00</p>
                    </div>
                  </div>{" "}
                  <hr />
                  <div>
                    <p className=" float-right">
                      Sub total:{" "}
                      <span className=" font-bold text-blue-500">$600</span>
                    </p>
                    <button className=" bg-blue-500 rounded-md text-white w-full py-2 mt-3">
                      CHECKOUT
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className=" bg-slate-600 h-[1px]" />

      {/* navbar pages */}
      <div className="bg-blue-500  text-white py-2 md:py-0 flex flex-col md:flex-row justify-between lg:text-xl">
        {/* for tab and other larger screen */}
        <div className=" hidden md:flex gap-5 ml-14">
          <div className=" hover:cursor-pointer py-4 xl:px-2">Home</div>
          <div
            className=" hover:cursor-pointer py-4 xl:px-2 hover:bg-white hover:text-slate-700 hover:rounded-sm"
            onMouseOver={() => {
              setClothing(true);
            }}
            onMouseLeave={() => {
              setClothing(false);
            }}
          >
            Clothing
            {/* clothing content */}
            {clothing && (
              <div
                className=" flex md:gap-8 xl:gap-32 mt-4 md:ml-[-6rem] xl:ml-[-4.5rem] justify-evenly absolute shadow-sm shadow-black text-black bg-white rounded-sm px-10 py-4"
                onMouseOver={() => {
                  setClothing(true);
                }}
                onMouseLeave={() => {
                  setClothing(false);
                }}
              >
                <div className=" flex flex-col gap-3">
                  <div className=" text-lg hover:text-blue-400">Men</div>
                  <div className=" text-sm hover:cursor-pointer">Dresses</div>
                  <div className=" text-sm hover:cursor-pointer">Shoes</div>
                  <div className=" text-sm hover:cursor-pointer">Jackets</div>
                  <div className=" text-sm hover:cursor-pointer">
                    Sunglasses
                  </div>
                  <div className=" text-sm hover:cursor-pointer ">
                    SportWear
                  </div>
                  <div className=" text-sm hover:cursor-pointer">Blazers</div>
                  <div className=" text-sm hover:cursor-pointer">Shirts</div>
                </div>
                <div className=" flex flex-col gap-3">
                  <div className=" text-lg hover:text-blue-400">Women</div>
                  <div className=" text-sm hover:cursor-pointer">Handbags</div>
                  <div className=" text-sm hover:cursor-pointer">Jwellery</div>
                  <div className=" text-sm hover:cursor-pointer">Swimwear</div>
                  <div className=" text-sm hover:cursor-pointer">Tops</div>
                  <div className=" text-sm hover:cursor-pointer">Flats</div>
                  <div className=" text-sm hover:cursor-pointer">Shoes</div>
                  <div className=" text-sm hover:cursor-pointer">
                    WinterWear
                  </div>
                </div>
                <div className=" flex flex-col gap-3">
                  <div className=" text-lg hover:text-blue-400">Boys</div>
                  <div className=" text-sm hover:cursor-pointer">
                    Toys & Games
                  </div>
                  <div className=" text-sm hover:cursor-pointer">Jeans</div>
                  <div className=" text-sm hover:cursor-pointer">Shirts</div>
                  <div className=" text-sm hover:cursor-pointer">Shoes</div>
                  <div className=" text-sm hover:cursor-pointer">
                    SchoolBags
                  </div>
                  <div className=" text-sm hover:cursor-pointer">LunchBox</div>
                  <div className=" text-sm hover:cursor-pointer">Footwear</div>
                </div>

                <div className=" flex flex-col gap-3">
                  <div className=" text-lg hover:text-blue-400">Girls</div>
                  <div className=" text-sm hover:cursor-pointer">Sandals</div>
                  <div className=" text-sm hover:cursor-pointer">Shorts</div>
                  <div className=" text-sm hover:cursor-pointer">Dresses</div>
                  <div className=" text-sm hover:cursor-pointer">Jwellery</div>
                  <div className=" text-sm hover:cursor-pointer">Bags</div>
                  <div className=" text-sm hover:cursor-pointer">
                    NightDress
                  </div>
                  <div className=" text-sm hover:cursor-pointer">SwimWear</div>
                </div>
                <img
                  src={clothingpic}
                  alt="img  not found"
                  className=" md:w-[30%] self-center xl:w-fit"
                />
              </div>
            )}
          </div>
          <div
            className=" hover:cursor-pointer hover:bg-white hover:text-slate-700 hover:rounded-sm py-4 xl:px-2 "
            onMouseOver={() => {
              setElectronic(true);
            }}
            onMouseLeave={() => {
              setElectronic(false);
            }}
          >
            <div className="bg-red-400 text-white absolute px-3 py-1 ml-10 mt-[-1.7rem] text-xs rounded-sm">
              Hot
            </div>
            Electronics
            {/* electronic content */}
            {electronic && (
              <div
                onMouseOver={() => {
                  setElectronic(true);
                }}
                onMouseLeave={() => {
                  setElectronic(false);
                }}
                className="  flex md:gap-8 xl:gap-24 mt-4 ml-[-11rem] justify-evenly items-start absolute shadow-sm shadow-black text-black bg-white rounded-sm px-10 py-4"
              >
                <div className=" flex flex-col gap-3">
                  <div className=" text-lg hover:text-blue-400">Laptops</div>
                  <div className=" text-sm hover:cursor-pointer">Gaming</div>
                  <div className=" text-sm hover:cursor-pointer">
                    LaptopSkins
                  </div>
                  <div className=" text-sm hover:cursor-pointer">Apple</div>
                  <div className=" text-sm hover:cursor-pointer">Dell</div>
                  <div className=" text-sm hover:cursor-pointer ">Lenovo</div>
                  <div className=" text-sm hover:cursor-pointer">Adapters</div>
                  <div className=" text-sm hover:cursor-pointer">Batteries</div>
                  <div className=" text-sm hover:cursor-pointer">
                    CoolingPads
                  </div>
                </div>
                <div className=" flex flex-col gap-3">
                  <div className=" text-lg hover:text-blue-400">Desktops</div>
                  <div className=" text-sm hover:cursor-pointer">
                    Headphones
                  </div>
                  <div className=" text-sm hover:cursor-pointer">
                    Routers&Modems
                  </div>
                  <div className=" text-sm hover:cursor-pointer">
                    CPUs,Processors
                  </div>
                  <div className=" text-sm hover:cursor-pointer">
                    PCGamingStore
                  </div>
                  <div className=" text-sm hover:cursor-pointer">
                    GraphicsCards
                  </div>
                  <div className=" text-sm hover:cursor-pointer">
                    Components
                  </div>
                  <div className=" text-sm hover:cursor-pointer">Webcam</div>
                  <div className=" text-sm hover:cursor-pointer">Memory</div>
                </div>
                <div className=" flex flex-col gap-3">
                  <div className=" text-lg hover:text-blue-400">Cameras</div>
                  <div className=" text-sm hover:cursor-pointer">
                    Accessories
                  </div>
                  <div className=" text-sm hover:cursor-pointer">
                    Binoculars
                  </div>
                  <div className=" text-sm hover:cursor-pointer">
                    Telescopes
                  </div>
                  <div className=" text-sm hover:cursor-pointer">
                    Camcorders
                  </div>
                  <div className=" text-sm hover:cursor-pointer">Digital</div>
                  <div className=" text-sm hover:cursor-pointer">
                    FilmCameras
                  </div>
                  <div className=" text-sm hover:cursor-pointer">
                    Surveillance
                  </div>
                  <div className=" text-sm hover:cursor-pointer">Tripods</div>
                </div>

                <div className=" flex flex-col gap-3">
                  <div className=" text-lg hover:text-blue-400">
                    MobilePhones
                  </div>
                  <div className=" text-sm hover:cursor-pointer">Apple</div>
                  <div className=" text-sm hover:cursor-pointer">Samsung</div>
                  <div className=" text-sm hover:cursor-pointer">Lenovo</div>
                  <div className=" text-sm hover:cursor-pointer">Motorola</div>
                  <div className=" text-sm hover:cursor-pointer">LeEco</div>
                  <div className=" text-sm hover:cursor-pointer">Asus</div>
                  <div className=" text-sm hover:cursor-pointer">Acer</div>
                  <div className=" text-sm hover:cursor-pointer">
                    Headphones
                  </div>
                </div>
                <img
                  src={electronicpic}
                  alt="img  not found"
                  className=" md:w-[30%] xl:w-fit self-center"
                />
              </div>
            )}
          </div>
          <div className=" hover:cursor-pointer py-4">
            <div className="bg-yellow-400 text-white absolute px-3 py-1 ml-20 mt-[-1.7rem] text-xs rounded-sm">
              New
            </div>
            Health & Beauty
          </div>
          <div className=" hover:cursor-pointer py-4 xl:px-2">Watches</div>
          <div className=" hover:cursor-pointer py-4 xl:px-2">Jwellery</div>
          <div className=" hover:cursor-pointer py-4 xl:px-2">Shoes</div>
          <div className=" hover:cursor-pointer py-4 xl:px-2">Kids & Girls</div>
          <div
            className=" hover:cursor-pointer py-4 hover:bg-white hover:text-slate-700 hover:rounded-sm xl:px-2"
            onMouseOver={() => {
              setPages(true);
            }}
            onMouseLeave={() => {
              setPages(false);
            }}
          >
            Pages
            {/* pages content */}
            {pages && (
              <div
                className=" flex flex-col gap-2 mt-4 md:ml-[-5rem] xl:ml-0 absolute shadow-sm shadow-black py-2 px-5 bg-white text-black text-sm"
                onMouseOver={() => {
                  setPages(true);
                }}
                onMouseLeave={() => {
                  setPages(false);
                }}
              >
                <div>Home</div>
                <hr />
                <div>Category</div> <hr />
                <div>Detail</div> <hr />
                <div>Shopping Cart Summary</div> <hr />
                <div>Checkout</div> <hr />
                <div>Blog</div> <hr />
                <div>Blog Detail</div> <hr />
                <div>Contact</div> <hr />
                <div>Sign In</div> <hr />
                <div>Wishlist</div> <hr />
                <div>Terms and Condition</div> <hr />
                <div>Track Orders</div> <hr />
                <div>Product-Comparison</div> <hr />
                <div>FAQ</div> <hr />
                <div>404</div>
              </div>
            )}
          </div>
        </div>

        <div
          className="mr-8 text-yellow-300 cursor-pointer hidden xl:flex py-4
        "
        >
          Get 30% off on selected items
        </div>

        {/* for smaller screen */}
        <div className="md:hidden">
          <button
            className=" md:hidden text-2xl mx-8 px-4 py-1 bg-slate-700 rounded-md"
            onClick={() => {
              !menu ? setMenu(true) : setMenu(false);
            }}
          >
            {" "}
            &#9776;
          </button>

          {menu && (
            <div className=" flex flex-col gap-2 mx-8 mt-5 text-xl">
              <div>Home</div>
              <div
                className=" hover:cursor-pointer w-[90%] hover:bg-white hover:text-slate-700 hover:rounded-sm"
                onClick={() => {
                  setElectronic(false);
                  !clothing ? setClothing(true) : setClothing(false);
                }}
              >
                Clothing
                {/* clothing content */}
                {clothing && (
                  <div className=" flex flex-col text-black bg-white rounded-sm px-5 py-4 space-y-4">
                    <div className=" flex flex-col gap-3">
                      <div className=" text-lg font-bold">Men</div>
                      <div className=" text-sm hover:cursor-pointer">
                        Dresses
                      </div>
                      <div className=" text-sm hover:cursor-pointer">Shoes</div>
                      <div className=" text-sm hover:cursor-pointer">
                        Jackets
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Sunglasses
                      </div>
                      <div className=" text-sm hover:cursor-pointer ">
                        SportWear
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Blazers
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Shirts
                      </div>
                    </div>
                    <div className=" flex flex-col gap-3">
                      <div className=" text-lg font-bold">Women</div>
                      <div className=" text-sm hover:cursor-pointer">
                        Handbags
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Jwellery
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Swimwear
                      </div>
                      <div className=" text-sm hover:cursor-pointer">Tops</div>
                      <div className=" text-sm hover:cursor-pointer">Flats</div>
                      <div className=" text-sm hover:cursor-pointer">Shoes</div>
                      <div className=" text-sm hover:cursor-pointer">
                        WinterWear
                      </div>
                    </div>
                    <div className=" flex flex-col gap-3">
                      <div className=" text-lg font-bold">Boys</div>
                      <div className=" text-sm hover:cursor-pointer">
                        Toys & Games
                      </div>
                      <div className=" text-sm hover:cursor-pointer">Jeans</div>
                      <div className=" text-sm hover:cursor-pointer">
                        Shirts
                      </div>
                      <div className=" text-sm hover:cursor-pointer">Shoes</div>
                      <div className=" text-sm hover:cursor-pointer">
                        SchoolBags
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        LunchBox
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Footwear
                      </div>
                    </div>

                    <div className=" flex flex-col gap-3">
                      <div className=" text-lg font-bold">Girls</div>
                      <div className=" text-sm hover:cursor-pointer">
                        Sandals
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Shorts
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Dresses
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Jwellery
                      </div>
                      <div className=" text-sm hover:cursor-pointer">Bags</div>
                      <div className=" text-sm hover:cursor-pointer">
                        NightDress
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        SwimWear
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="  hover:bg-white hover:text-slate-700 hover:rounded-sm "
                onClick={() => {
                  setClothing(false);
                  !electronic ? setElectronic(true) : setElectronic(false);
                }}
              >
                Electronics
                {/* electronic content */}
                {electronic && (
                  <div className="  flex flex-col space-y-5 items-start text-black bg-white rounded-sm px-10  py-4">
                    <div className=" flex flex-col gap-3">
                      <div className=" text-lg font-bold">Laptops</div>
                      <div className=" text-sm hover:cursor-pointer">
                        Gaming
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        LaptopSkins
                      </div>
                      <div className=" text-sm hover:cursor-pointer">Apple</div>
                      <div className=" text-sm hover:cursor-pointer">Dell</div>
                      <div className=" text-sm hover:cursor-pointer ">
                        Lenovo
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Adapters
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Batteries
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        CoolingPads
                      </div>
                    </div>
                    <div className=" flex flex-col gap-3">
                      <div className=" text-lg font-bold">Desktops</div>
                      <div className=" text-sm hover:cursor-pointer">
                        Headphones
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Routers&Modems
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        CPUs,Processors
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        PCGamingStore
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        GraphicsCards
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Components
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Webcam
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Memory
                      </div>
                    </div>
                    <div className=" flex flex-col gap-3">
                      <div className=" text-lg font-bold">Cameras</div>
                      <div className=" text-sm hover:cursor-pointer">
                        Accessories
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Binoculars
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Telescopes
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Camcorders
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Digital
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        FilmCameras
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Surveillance
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Tripods
                      </div>
                    </div>

                    <div className=" flex flex-col gap-3">
                      <div className=" text-lg font-bold">MobilePhones</div>
                      <div className=" text-sm hover:cursor-pointer">Apple</div>
                      <div className=" text-sm hover:cursor-pointer">
                        Samsung
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Lenovo
                      </div>
                      <div className=" text-sm hover:cursor-pointer">
                        Motorola
                      </div>
                      <div className=" text-sm hover:cursor-pointer">LeEco</div>
                      <div className=" text-sm hover:cursor-pointer">Asus</div>
                      <div className=" text-sm hover:cursor-pointer">Acer</div>
                      <div className=" text-sm hover:cursor-pointer">
                        Headphones
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className=" hover:cursor-pointer">Health & Beauty</div>
              <div className=" hover:cursor-pointer xl:px-2">Watches</div>
              <div className=" hover:cursor-pointer xl:px-2">Jwellery</div>
              <div className=" hover:cursor-pointer xl:px-2">Shoes</div>
              <div className=" hover:cursor-pointer xl:px-2">Kids & Girls</div>
              <div
                className=" hover:cursor-pointer hover:bg-white hover:text-slate-700 hover:rounded-sm xl:px-2"
                onMouseOver={() => {
                  setPages(true);
                }}
                onMouseLeave={() => {
                  setPages(false);
                }}
              >
                Pages
                {/* pages content */}
                {pages && (
                  <div
                    className=" flex flex-col gap-2 mt-4 md:ml-[-5rem] xl:ml-0 absolute shadow-sm shadow-black py-2 px-5 bg-white text-black text-sm"
                    onMouseOver={() => {
                      setPages(true);
                    }}
                    onMouseLeave={() => {
                      setPages(false);
                    }}
                  >
                    <div>Home</div>
                    <hr />
                    <div>Category</div> <hr />
                    <div>Detail</div> <hr />
                    <div>Shopping Cart Summary</div> <hr />
                    <div>Checkout</div> <hr />
                    <div>Blog</div> <hr />
                    <div>Blog Detail</div> <hr />
                    <div>Contact</div> <hr />
                    <div>Sign In</div> <hr />
                    <div>Wishlist</div> <hr />
                    <div>Terms and Condition</div> <hr />
                    <div>Track Orders</div> <hr />
                    <div>Product-Comparison</div> <hr />
                    <div>FAQ</div> <hr />
                    <div>404</div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
