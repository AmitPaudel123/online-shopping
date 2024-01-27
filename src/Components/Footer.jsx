import React from "react";

//importing pictures
import truck from "../Images/footerimg/icons8-truck-50.png";
import call from "../Images/footerimg/icons8-call-24.png";
import dollar from "../Images/footerimg/icons8-dollar-24.png";
import loc from "../Images/footerimg/icons8-location-24.png";
import suitcase from "../Images/footerimg/icons8-suitcase-64.png";
import phone from "../Images/footerimg/icons8-smartphone-24.png";
import msg from "../Images/footerimg/email-icon.png";
const Footer = () => {
  return (
    <>
      <div>
        <div className=" bg-yellow-100 py-5 px-3">
          <div className=" flex flex-wrap justify-around items-center">
            <div className="flex flex-col gap-4 items-center justify-center">
              <img src={truck} alt="" className=" w-10" />
              <div className=" text-xl">We Ship WorldWide</div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <img src={call} alt="" className="w-7" />
              <div className=" text-xl">Call 046-530-616</div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <img src={dollar} alt="" className="w-7" />
              <div className=" text-xl">Money Back Guarantee</div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <img src={suitcase} alt="" className="w-10" />
              <div className=" text-xl">30 days return</div>
            </div>
          </div>
        </div>

        <div className=" bg-slate-800 text-slate-300 px-7 py-10 md:px-0 grid grid-flow-row md:grid-flow-col md:grid-rows-2 md:justify-around lg:grid-rows-1 gap-4">
          <div className=" flex flex-col gap-2">
            <div className=" flex gap-2 items-center">
              <div className=" bg-yellow-400 p-2 w-fit rounded-full">
                <img src={loc} alt="" />
              </div>
              <div className=" text-lg">
                Shantinagar-32, New Baneshor <br />
                Kathmandu, Nepal
              </div>
            </div>
            <div className=" flex gap-2 items-center">
              <div className=" bg-yellow-400 p-2 w-fit rounded-full">
                <img src={phone} alt="" />
              </div>
              <div className=" text-lg">044-579-002 / 046-530-616</div>
            </div>
            <div className=" flex gap-2 items-center">
              <div className=" bg-yellow-400 p-2 w-fit rounded-full">
                <img src={msg} alt="" className=" w-6" />
              </div>
              <div className=" text-lg">marazzo@345gmail.com</div>
            </div>
          </div>
          <div>
            <p className=" text-2xl text-white">Customer Service</p>
            <li className=" cursor-pointer hover:text-slate-500">My Account</li>
            <li className=" cursor-pointer hover:text-slate-500">
              Order History
            </li>
            <li className=" cursor-pointer hover:text-slate-500">FAQ</li>
            <li className=" cursor-pointer hover:text-slate-500">Specials</li>
            <li className=" cursor-pointer hover:text-slate-500">
              Help Center
            </li>
          </div>
          <div>
            <p className=" text-2xl text-white">Corporation</p>
            <li className=" cursor-pointer hover:text-slate-500">About us</li>
            <li className=" cursor-pointer hover:text-slate-500">
              Customer Service{" "}
            </li>
            <li className=" cursor-pointer hover:text-slate-500">Company</li>
            <li className=" cursor-pointer hover:text-slate-500">
              Investor Relations
            </li>
            <li className=" cursor-pointer hover:text-slate-500">
              Advance Search{" "}
            </li>
          </div>
          <div>
            <p className=" text-2xl text-white">Why Choose Us</p>
            <li className=" cursor-pointer hover:text-slate-500">
              Shopping Guide
            </li>
            <li className=" cursor-pointer hover:text-slate-500">Blog </li>
            <li className=" cursor-pointer hover:text-slate-500">Company</li>
            <li className=" cursor-pointer hover:text-slate-500">
              Investor Relations
            </li>
            <li className=" cursor-pointer hover:text-slate-500">
              Contact Us{" "}
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
