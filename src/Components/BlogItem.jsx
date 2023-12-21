import React from "react";
import { useState } from "react";

//importing pictures
import banner from "../Images/Blog/LHS-banner.jpg";
import blogpic1 from "../Images/Blog/blog_big_01.jpg";
import blogpic2 from "../Images/Blog/blog_big_02.jpg";
import blogpic3 from "../Images/Blog/blog_big_03.jpg";

const BlogItem = () => {
  const [camera, setCamera] = useState(false);
  const [desktop, setDesktop] = useState(false);
  const [pants, setPants] = useState(false);
  const [hats, setHats] = useState(false);
  const [bags, setBags] = useState(false);
  const [accessories, setAccessories] = useState(false);
  const [cameraBtn, setCameraBtn] = useState(<>+</>);
  const [desktopBtn, setDesktopBtn] = useState(<>+</>);
  const [pantsBtn, setPantsBtn] = useState(<>+</>);
  const [hatsBtn, setHatsBtn] = useState(<>+</>);
  const [bagsBtn, setBagsBtn] = useState(<>+</>);
  const [accessoriesBtn, setAccessoriesBtn] = useState(<>+</>);

  const handleCamera = () => {
    if (camera === false) {
      setCameraBtn(<>-</>);
      setCamera(true);
    } else {
      setCameraBtn(<>+</>);
      setCamera(false);
    }
  };
  const handleDesktop = () => {
    if (desktop === false) {
      setDesktopBtn(<>-</>);
      setDesktop(true);
    } else {
      setDesktopBtn(<>+</>);
      setDesktop(false);
    }
  };
  const handleBags = () => {
    if (bags === false) {
      setBagsBtn(<>-</>);
      setBags(true);
    } else {
      setBagsBtn(<>+</>);
      setBags(false);
    }
  };
  const handlePants = () => {
    if (pants === false) {
      setPantsBtn(<>-</>);
      setPants(true);
    } else {
      setPantsBtn(<>+</>);
      setPants(false);
    }
  };
  const handleHats = () => {
    if (hats === false) {
      setHatsBtn(<>-</>);
      setHats(true);
    } else {
      setHatsBtn(<>+</>);
      setHats(false);
    }
  };
  const handleAccessories = () => {
    if (accessories === false) {
      setAccessoriesBtn(<>-</>);
      setAccessories(true);
    } else {
      setAccessoriesBtn(<>+</>);
      setAccessories(false);
    }
  };

  //tab picture changing functionality
  const [tab1, setTab1] = useState(blogpic1);
  const [tab2, setTab2] = useState(blogpic2);
  const [tab1Color, setTab1Color] = useState(" cursor-pointer text-blue-600");
  const [tab2Color, setTab2Color] = useState("cursor-pointer");

  const handlePopularPOst = () => {
    setTab1(blogpic2);
    setTab2(blogpic1);
    setTab1Color("cursor-pointer text-blue-600");
    setTab2Color("cursor-pointer");
  };
  const handleRecentPost = () => {
    setTab1(blogpic1);
    setTab2(blogpic2);
    setTab2Color("cursor-pointer text-blue-600");
    setTab1Color("cursor-pointer");
  };

  const blogDetail = [
    {
      id: Math.random().toString(),
      imgUrl: blogpic1,
      title: "Lorem ipsum dolor sit amet.",
      author: "Elyse Perry",
    },
    {
      id: Math.random().toString(),
      imgUrl: blogpic2,
      title: "Dolore explicabo alias distinctio",
      author: "Steave Smith",
    },
    {
      id: Math.random().toString(),
      imgUrl: blogpic3,
      title: "Dignissimos impedit quam enim.",
      author: "Mitchel Starc",
    },
  ];
  return (
    <>
      <div className=" flex flex-col md:flex-row justify-center gap-6 md:gap-3 lg:gap-6 my-6">
        <div className=" w-[90%] mx-auto md:mx-0 md:w-[70%] ">
          {blogDetail.map((data, index) => {
            return (
              <div
                className=" mb-5 shadow-sm shadow-slate-400  rounded-md p-5 "
                key={index}
              >
                <img src={data.imgUrl} alt="" />
                <div className=" flex flex-col gap-3 text-slate-600">
                  {" "}
                  <div className=" text-3xl font-semibold"> {data.title}</div>
                  <div className=" flex md:flex-row flex-wrap gap-4">
                    <p>{data.author}</p>
                    <p> 6 Comments</p>
                    <p>21/12/2023 1:15 PM</p>
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum...
                  </div>
                  <button className=" bg-blue-500 hover:bg-blue-600 text-white rounded-md px-5 py-2 w-fit">
                    READ MORE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" w-[90%] mx-auto md:mx-0 md:w-[30%] lg:md-[20%] ">
          <div className=" flex w-full">
            <input
              type="search"
              placeholder=" Type here to search"
              className=" border-[1px] border-slate-400 p-2 rounded-l-sm w-full"
            />
            <input
              type="submit"
              value="Search"
              className=" bg-blue-500 text-white p-2 rounded-r-sm"
            />
          </div>
          <img src={banner} alt="" className=" rounded-md my-4 w-full" />

          {/* Category */}
          <div className=" flex flex-col gap-2 shadow-sm shadow-slate-400 rounded-sm p-5">
            <div className=" text-lg font-bold">Category</div>
            <hr className=" my-3" />
            <div>
              <div
                className=" flex justify-between items-center cursor-pointer"
                onClick={handleCamera}
              >
                <div className=" text-lg">Camera</div>
                <div className=" text-2xl font-extrabold">{cameraBtn}</div>
              </div>
              {camera && (
                <div className=" ml-4">
                  <div> {` > Gaming`} </div>
                  <div>{` > Office`}</div>
                  <div>{` > Kids`}</div>
                  <div>{` > For Women`}</div>
                </div>
              )}
            </div>
            <div>
              <div
                className=" flex justify-between items-center cursor-pointer"
                onClick={handleDesktop}
              >
                <div className=" text-lg">Desktop</div>
                <div className=" text-2xl font-extrabold">{desktopBtn}</div>
              </div>
              {desktop && (
                <div className=" ml-4">
                  <div> {` > Gaming`} </div>
                  <div>{` > Office`}</div>
                  <div>{` > Kids`}</div>
                  <div>{` > For Women`}</div>
                </div>
              )}
            </div>
            <div>
              <div
                className=" flex justify-between items-center cursor-pointer"
                onClick={handlePants}
              >
                <div className=" text-lg">Pants</div>
                <div className=" text-2xl font-extrabold">{pantsBtn}</div>
              </div>
              {pants && (
                <div className=" ml-4">
                  <div> {` > Gaming`} </div>
                  <div>{` > Office`}</div>
                  <div>{` > Kids`}</div>
                  <div>{` > For Women`}</div>
                </div>
              )}
            </div>
            <div>
              <div
                className=" flex justify-between items-center cursor-pointer"
                onClick={handleBags}
              >
                <div className=" text-lg">Bags</div>
                <div className=" text-2xl font-extrabold">{bagsBtn}</div>
              </div>
              {bags && (
                <div className=" ml-4">
                  <div> {` > Gaming`} </div>
                  <div>{` > Office`}</div>
                  <div>{` > Kids`}</div>
                  <div>{` > For Women`}</div>
                </div>
              )}
            </div>
            <div>
              <div
                className=" flex justify-between items-center cursor-pointer"
                onClick={handleHats}
              >
                <div className=" text-lg">Hats</div>
                <div className=" text-2xl font-extrabold">{hatsBtn}</div>
              </div>
              {hats && (
                <div className=" ml-4">
                  <div> {` > Gaming`} </div>
                  <div>{` > Office`}</div>
                  <div>{` > Kids`}</div>
                  <div>{` > For Women`}</div>
                </div>
              )}
            </div>
            <div>
              <div
                className=" flex justify-between items-center cursor-pointer"
                onClick={handleAccessories}
              >
                <div className=" text-lg">Accessories</div>
                <div className=" text-2xl font-extrabold">{accessoriesBtn}</div>
              </div>
              {accessories && (
                <div className=" ml-4">
                  <div> {` > Gaming`} </div>
                  <div>{` > Office`}</div>
                  <div>{` > Kids`}</div>
                  <div>{` > For Women`}</div>
                </div>
              )}
            </div>
          </div>

          {/* tab widget */}
          <div className=" shadow-sm shadow-slate-400 rounded-sm p-5 my-5">
            <p className=" text-xl font-semibold text-slate-600">Tab Widget</p>
            <hr className=" my-3" />
            <div className="text-sm flex flex-wrap gap-4 justify-center items-center ">
              <div className={tab1Color} onClick={handlePopularPOst}>
                POPULAR POST{" "}
              </div>
              <div>|</div>
              <div className={tab2Color} onClick={handleRecentPost}>
                RECENT POST
              </div>
            </div>
            <div className=" my-5 text-slate-600">
              <img src={tab1} alt="" />
              <div className=" flex flex-col gap-3 my-2">
                <div className=" cursor-pointer font-semibold ">
                  Simple Blog Post
                </div>
                <div className=" flex flex-wrap gap-4 text-sm">
                  <div>6 Comments</div>
                  <div>21/12/2023 9:02PM</div>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </div>
            </div>
            <div className=" my-5 text-slate-600">
              <img src={tab2} alt="" />
              <div className=" flex flex-col gap-3 my-2">
                <div className=" cursor-pointer font-semibold ">
                  Simple Blog Post
                </div>
                <div className=" flex flex-wrap gap-4 text-sm">
                  <div>6 Comments</div>
                  <div>21/12/2023 9:02PM</div>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
