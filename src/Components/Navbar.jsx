import React from "react";

const Navbar = () => {
  return (
    <>
      <div className=" bg-blue-500 ">
        <div className=" flex mx-16 py-3 text-white justify-between">
          <div className=" flex gap-4">
            <div>
              {" "}
              <p className=" cursor-pointer">USD &darr;</p>
              <div className=" opacity-0 absolute bg-white text-black flex flex-col pag-2 mt-4 px-6 shadow-sm shadow-black rounded-sm">
                <p>USD</p>
                <p>INR</p>
                <p>BPB</p>
              </div>
            </div>
            <div>
              <p className=" cursor-pointer">English &darr;</p>
              <div className=" opacity-0 absolute bg-white text-black flex flex-col pag-2 mt-4 px-6 shadow-sm shadow-black rounded-sm">
                <p>English</p>
                <p>French</p>
                <p>German</p>
              </div>
            </div>
          </div>
          <div className=" flex gap-2">
            <div className=" cursor-pointer border-r-2 border-slate-400 px-2">
              My Account
            </div>
            <div className=" cursor-pointer border-r-2 border-slate-400 pr-2">
              Wishlist
            </div>
            <div className=" cursor-pointer border-r-2 border-slate-400 pr-2">
              My Cart
            </div>
            <div className=" cursor-pointer border-r-2 border-slate-400 pr-2">
              {" "}
              Checkout
            </div>
            <div className=" cursor-pointer">Login</div>
          </div>
        </div>

        {/* search and navigation bar */}
        <div className=" flex mx-12 py-4 items-center justify-around">
          <div className=" text-white text-4xl font-bold">marazzo</div>

          <div className=" flex">
            <div className=" bg-white text-slate-500 px-6 py-4 rounded-l-full border-r-[1.4px]  border-slate-400">
              Catagories &darr;
            </div>
            <div>
              <input
                type="search"
                name=""
                placeholder=" Search here..."
                className=" py-4 w-80"
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
