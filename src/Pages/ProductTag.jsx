import React from "react";

const ProductTag = () => {
  return (
    <>
      <div className=" w-[95%] mx-auto md:mx-0 md:w-[30%] xl:w-[15%] shadow-sm shadow-slate-400 rounded-sm px-3 py-2 my-4">
        <p className=" text-xl font-bold text-slate-700"> Product Tag</p>
        <hr className=" my-2 border-slate-500" />
        <div className=" flex gap-3 flex-shrink flex-wrap">
          {" "}
          <div className=" bg-slate-300 px-2 py-1 text-lg rounded-md w-fit cursor-pointer hover:text-white hover:bg-blue-500">
            Phone
          </div>
          <div className=" px-2 py-1 text-lg rounded-md w-fit cursor-pointer text-white bg-blue-500 ">
            Vest
          </div>
          <div className=" bg-slate-300 px-2 py-1 text-lg rounded-md w-fit cursor-pointer hover:text-white hover:bg-blue-500">
            SmartPhones
          </div>
          <div className=" bg-slate-300 px-2 py-1 text-lg rounded-md w-fit cursor-pointer hover:text-white hover:bg-blue-500">
            Furniture
          </div>
          <div className=" bg-slate-300 px-2 py-1 text-lg rounded-md w-fit cursor-pointer hover:text-white hover:bg-blue-500">
            T-Shirts
          </div>
          <div className=" bg-slate-300 px-2 py-1 text-lg rounded-md w-fit cursor-pointer hover:text-white hover:bg-blue-500">
            SweatPants
          </div>
          <div className=" bg-slate-300 px-2 py-1 text-lg rounded-md w-fit cursor-pointer hover:text-white hover:bg-blue-500">
            Sneaker
          </div>
          <div className=" bg-slate-300 px-2 py-1 text-lg rounded-md w-fit cursor-pointer hover:text-white hover:bg-blue-500">
            Toys
          </div>
          <div className=" bg-slate-300 px-2 py-1 text-lg rounded-md w-fit cursor-pointer hover:text-white hover:bg-blue-500">
            Rose
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTag;
