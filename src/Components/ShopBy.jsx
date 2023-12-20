import React, { useState } from "react";

const ShopBy = () => {
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

  return (
    <>
      <div className=" shadow-slate-400 shadow-sm rounded-sm w-[90%] h-fit mx-auto md:mx-0 md:w-[25%] lg:w-[15%] py-2 px-5 ">
        <p className=" text-xl text-slate-700">Shop By</p>{" "}
        <hr className=" my-2" />
        <div className=" flex flex-col gap-2">
          <div className=" text-lg font-bold">Category</div>
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
        {/* manufactures and colors */}
        <div className=" my-3">
          <p className="text-lg font-bold">Manufactures</p>
          <p className=" hover:text-blue-600 cursor-pointer">Forever 18</p>
          <p className=" hover:text-blue-600 cursor-pointer">Nike</p>
          <p className=" hover:text-blue-600 cursor-pointer">Dolce & Gabbana</p>
          <p className=" hover:text-blue-600 cursor-pointer">Alluare</p>
          <p className=" hover:text-blue-600 cursor-pointer">Chanel</p>
          <p className=" hover:text-blue-600 cursor-pointer">Other Brads</p>
        </div>
        <div>
          <p className="text-lg font-bold">Colors</p>
          <p className=" hover:text-blue-600 cursor-pointer">Red</p>
          <p className=" hover:text-blue-600 cursor-pointer">Blue</p>
          <p className=" hover:text-blue-600 cursor-pointer">Yellow</p>
          <p className=" hover:text-blue-600 cursor-pointer">Pink</p>
          <p className=" hover:text-blue-600 cursor-pointer">Brown</p>
          <p className=" hover:text-blue-600 cursor-pointer">Teal</p>
        </div>
      </div>
    </>
  );
};

export default ShopBy;
