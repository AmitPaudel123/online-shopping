import React from "react";
import fb from "../Images/facaebook.png";
import google from "../Images/google.png";
const SignIn = () => {
  return (
    <>
      <div className=" bg-white rounded-sm shadow-sm shadow-slate-400 mx-3 md:mx-10 my-5 p-5 flex flex-col md:flex-row gap-4">
        {/* sign In */}
        <div className=" w-[70%] md:w-[48%] px-3">
          <p className=" text-xl font-semibold">Sign in</p>
          <hr className=" my-3" />
          <p className=" text-green-600">Hello, Welcome to your account.</p>
          <div className=" flex flex-col lg:flex-row gap-4 my-5">
            <div>
              <button className=" flex gap-1 p-2 w-[14rem] rounded-sm items-center shadow-sm shadow-slate-400 bg-slate-200 hover:bg-slate-300 font-semibold">
                <img src={fb} alt="" className=" w-6" />{" "}
                <p>Sign In With Facebook</p>{" "}
              </button>
            </div>

            <div>
              <button className=" flex gap-1 p-2 w-[14rem] rounded-sm items-center shadow-sm shadow-slate-400 bg-slate-200 hover:bg-slate-300  font-semibold">
                <img src={google} alt="" className=" w-5" />{" "}
                <p>Sign In With Google</p>{" "}
              </button>
            </div>
          </div>
          <div className=" grid ">
            <label htmlFor="email">
              Email Address <span className=" text-red-700 text-lg">*</span>
            </label>
            <input
              type="email"
              name=""
              id="email"
              className=" border-[1px] border-slate-400 px-4 py-2 rounded-sm"
            />
          </div>
          <div className=" grid my-3">
            <label htmlFor="password">
              Password <span className=" text-red-700 text-lg">*</span>
            </label>
            <input
              type="password"
              name=""
              id="password"
              className=" border-[1px] border-slate-400 px-4 py-2 rounded-sm"
            />
          </div>
          <div className=" flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between">
            <div>
              {" "}
              <input type="radio" name="remember" id="" /> Remember me!
            </div>
            <div className=" cursor-pointer text-blue-600">
              Forgot Password?
            </div>
          </div>
          <input
            type="submit"
            value="LOGIN"
            className=" bg-blue-500 hover:bg-blue-600 py-2 cursor-pointer px-5 rounded-md text-white my-3"
          />
        </div>

        {/* sign Up */}
        <div className=" w-[70%] md:w-[48%] px-3">
          <p className=" text-xl font-semibold">Sign Up</p>
          <hr className=" my-3" />

          <p className=" text-green-600">Create your new account.</p>
          <div className=" grid my-3">
            <label htmlFor="name">
              Name <span className=" text-red-700 text-lg">*</span>
            </label>
            <input
              type="text"
              name=""
              id="name"
              className=" border-[1px] border-slate-400 px-4 py-2 rounded-sm"
            />
          </div>
          <div className=" grid my-3">
            <label htmlFor="email">
              Email Address <span className=" text-red-700 text-lg">*</span>
            </label>
            <input
              type="email"
              name=""
              id="email"
              className=" border-[1px] border-slate-400 px-4 py-2 rounded-sm"
            />
          </div>
          <div className=" grid my-3">
            <label htmlFor="phone">
              Phone Number <span className=" text-red-700 text-lg">*</span>
            </label>
            <input
              type="number"
              name=""
              id="name"
              maxLength={10}
              minLength={10}
              className=" border-[1px] border-slate-400 px-4 py-2 rounded-sm"
            />
          </div>
          <div className=" grid my-3">
            <label htmlFor="password1">
              Password <span className=" text-red-700 text-lg">*</span>
            </label>
            <input
              type="password"
              name=""
              id="password1"
              className=" border-[1px] border-slate-400 px-4 py-2 rounded-sm"
            />
          </div>
          <div className=" grid my-3">
            <label htmlFor="password2">
              Confirm Password <span className=" text-red-700 text-lg">*</span>
            </label>
            <input
              type="password"
              name=""
              id="password2"
              className=" border-[1px] border-slate-400 px-4 py-2 rounded-sm"
            />
          </div>
          <input
            type="submit"
            value="SIGN UP"
            className=" bg-blue-500 hover:bg-blue-600 cursor-pointer py-2 px-5 rounded-md text-white my-3"
          />
        </div>
      </div>
    </>
  );
};

export default SignIn;
