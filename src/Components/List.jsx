import React, { useState } from "react";

//importing pictures
import pic1 from "../Images/list/p1.jpg";
import pic2 from "../Images/list/p2.jpg";
import pic3 from "../Images/list/p3.jpg";
import pic4 from "../Images/list/p4.jpg";
import pic5 from "../Images/list/p5.jpg";
import pic6 from "../Images/list/p6.jpg";
import pic7 from "../Images/list/p7.jpg";
import pic8 from "../Images/list/p8.jpg";
import pic9 from "../Images/list/p9.jpg";
import pic10 from "../Images/list/p10.jpg";
import pic11 from "../Images/list/p11.jpg";
import pic12 from "../Images/list/p12.jpg";

//importing iconns
import list from "../Images/list/icons8-list-32.png";
import grid from "../Images/list/icons8-grid-30.png";
import bluegrid from "../Images/list/grid-blue.png";
import bluelist from "../Images/list/list-blue.png";
import cart from "../Images/cart.png";

const List = () => {
  const [gridBool, setGridBool] = useState(false);
  const [gridpic, setGridpic] = useState(bluegrid);
  const [listBool, setListBool] = useState(false);
  const [listpic, setlistpic] = useState(list);

  //styling for showing data in grid view
  const [gridStyle, setGridStyle] = useState("  md:w-[30%] lg:w-[20%] ");
  const [gridDesStyle, setGridDesStyle] = useState("hidden");

  //styling for showing data in grid view
  // const [listStyle, setListStyle] = useState(" w-full flex gap-3 items-center");
  const [imgstyle, setImgstyle] = useState(" w-fit");

  const handleGrid = () => {
    setGridDesStyle("hidden");
    setListBool(false);
    setGridpic(bluegrid);
    setlistpic(list);
    setGridStyle(" w-full md:w-[20%]");
    setImgstyle("w-fit");
    setGridBool(true);
  };

  const handleList = () => {
    setGridDesStyle("block");
    setGridBool(false);

    setlistpic(bluelist);
    setGridpic(grid);
    setGridStyle("w-full flex flex-col md:flex-row gap-3 items-center");
    setImgstyle(" md:w-[20%] w-fit");

    setListBool(true);
  };
  //creating array of objects for list
  const listsData = [
    {
      url: pic1,
      detail: "",
    },
    {
      url: pic2,
    },
    {
      url: pic3,
    },
    {
      url: pic4,
    },
    {
      url: pic5,
    },
    {
      url: pic6,
    },
    {
      url: pic7,
    },
    {
      url: pic8,
    },
    {
      url: pic9,
    },
    {
      url: pic10,
    },
    {
      url: pic11,
    },
    {
      url: pic12,
    },
  ];
  return (
    <div className=" w-[90%] mx-auto md:mx-0 md:w-[70%] lg:w-[75%] h-fit shadow-sm shadow-slate-400">
      <div className=" flex items-center">
        <div className=" flex p-4 gap-5">
          <div
            className=" flex gap-1 items-center cursor-pointer"
            onClick={handleGrid}
          >
            <img src={gridpic} alt="" />
            <div>Grid</div>
          </div>

          <div
            className=" flex gap-1 items-center cursor-pointer"
            onClick={handleList}
          >
            <img src={listpic} alt="" />
            <div>List</div>
          </div>
        </div>
        <div className=" hidden md:mx-5 lg:mx-10 md:flex gap-6">
          <div className=" flex gap-2 items-center">
            <div>Sort by</div>
            <div>
              {" "}
              <select name="" id="" className=" border-2 border-slate-500">
                <option value="">Position</option>
                <option value="">Price: Lowest first</option>
                <option value="">Price: Heighest first</option>
                <option value="">Product name: A - Z</option>
              </select>
            </div>
          </div>
          <div className=" flex gap-2 items-center">
            <div>View</div>
            <div>
              {" "}
              <select name="" id="" className=" border-2 border-slate-500">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <hr className=" my-4" />
      <div className=" flex flex-col md:flex-row flex-wrap justify-center items-center gap-4">
        {listsData.map((value, index) => {
          return (
            <div key={index} className={gridStyle}>
              <img src={value.url} className={imgstyle} />
              <div>
                <div className={gridDesStyle}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                  eum laudantium, commodi repellat ipsum consequatur hic
                  distinctio sapiente voluptatem dolore sint dolor autem
                  quisquam atque voluptates blanditiis reprehenderit deleniti
                  qui! Ex facilis veritatis officia explicabo consectetur non
                  dolore excepturi nostrum, in accusantium eos ut? Non minima
                  deserunt asperiores, dolorem quod corrupti cum, aut culpa
                  deleniti porro nesciunt.
                </div>
                <div className=" my-3 ml-3">
                  <p>Floral Print Buttoned</p>
                  <p className=" text-blue-500">
                    $600.00 <del className=" text-slate-600">$800</del>
                  </p>
                  <div className=" flex bg-blue-600 rounded-md justify-between items-center w-fit cursor-pointer hover:bg-blue-700 my-3">
                    <div className=" bg-yellow-400 px-3 py-2 rounded-l-md hidden lg:block">
                      <img src={cart} alt="" className=" w-5" />
                    </div>
                    <div className=" text-lg mx-auto text-white px-3">
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
