import React, { useState } from "react";

const CheckoutCart = () => {
  const [chkMethod, setChkMethod] = useState(true);
  const [billInfo, setBillInfo] = useState(false);
  const [shipInfo, setShipInfo] = useState(false);
  const [shipMethod, setShipMethod] = useState(false);
  const [payment, setPayment] = useState(false);

  return (
    <>
      <div className=" my-5 flex flex-col md:flex-row justify-center gap-6 ">
        {/* checkout 1*/}
        <div className=" w-[95%] mx-auto md:mx-0 md:w-[65%] lg:w-[70%] flex flex-col gap-4">
          <div className=" p-5 rounded-md shadow-sm shadow-slate-400 ">
            <div
              className=" md:text-xl font-semibold bg-slate-200 py-2 cursor-pointer"
              onClick={() => {
                !chkMethod ? setChkMethod(true) : setChkMethod(false);
              }}
            >
              <span className=" px-5 py-3 bg-slate-500 text-white mr-1 md:mr-4 rounded-md">
                1
              </span>{" "}
              CHECKOUT METHOD
            </div>

            {/* checkout desp */}
            {chkMethod && (
              <div className=" p-5 flex flex-col lg:flex-row gap-20">
                <div className=" mx-7">
                  <p className=" text-xl font-semibold mb-2">
                    Guest or Register Login
                  </p>
                  <p>Register with us for future convenience:</p>
                  <input type="radio" name="register" id="" /> Checkout as Guest{" "}
                  <br />
                  <input type="radio" name="register" id="" /> Register <br />
                  <p className=" text-xl font-semibold mt-5 mb-2">
                    Register and save time
                  </p>
                  <p>Register with us for future convenience:</p>
                  <p>- Fast and easy check out</p>
                  <p>- Easy access to your order history and status</p>
                  <button className=" bg-blue-500 hover:bg-blue-600 text-white text-lg px-5 py-2 rounded-md my-2">
                    {" "}
                    Continue
                  </button>
                </div>
                <div className=" ">
                  <p className=" text-xl font-semibold mb-2">
                    Already registered?
                  </p>{" "}
                  <p>Please log in below:</p>
                  <div>
                    <label htmlFor="email">
                      Enter Email: <sup className=" text-red-600">*</sup>
                    </label>
                    <br />
                    <input
                      type="email"
                      className=" px-3 py-2 w-[14rem] md:w-[20rem] border-slate-600 border-[1px] mb-2"
                    />{" "}
                    <br />
                    <label htmlFor="password">
                      Enter Password: <sup className=" text-red-600">*</sup>
                    </label>
                    <br />
                    <input
                      type="password"
                      className=" px-3 py-2 w-[14rem] md:w-[20rem] border-slate-600 border-[1px] "
                    />{" "}
                    <p className=" underline hover:text-blue-600 cursor-pointer my-2">
                      forgot password?
                    </p>
                    <button className=" bg-blue-500 hover:bg-blue-600 text-white text-lg px-5 py-2 rounded-md my-2">
                      {" "}
                      Login
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className=" p-5 rounded-md shadow-sm shadow-slate-400 ">
            <div
              className=" md:text-xl font-semibold bg-slate-200 py-2 cursor-pointer"
              onClick={() => {
                !billInfo ? setBillInfo(true) : setBillInfo(false);
              }}
            >
              <span className=" px-5 py-3 bg-slate-500 text-white mr-4 rounded-md">
                2
              </span>{" "}
              BILLING INFORMATION
            </div>
            {billInfo && (
              <div className=" p-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum sed quasi sint consequatur adipisci provident saepe ad
                doloremque, accusamus ipsum minus reiciendis facere quam
                nesciunt impedit? Quisquam magnam quas ea? Laborum unde sequi
                vitae voluptates eveniet, commodi suscipit facilis aspernatur
                eaque, dignissimos animi quo in fuga quasi modi ea magnam
                reiciendis, voluptatum minima nemo sapiente numquam
                reprehenderit. Fugit, expedita a. Quas ab exercitationem numquam
                ipsum nobis voluptas, delectus voluptatem corporis unde
                voluptatum. Veritatis expedita itaque deleniti esse molestiae
                quod odit ducimus minus, maiores ex sequi cum, perspiciatis
                quia, sed repellat! Laborum obcaecati cumque incidunt. Libero
                quisquam odio optio repellendus hic eos quis molestias illum,
                repudiandae deleniti consectetur vitae magni tempore voluptate
                reiciendis veritatis est nulla nihil mollitia fuga accusamus ex
              </div>
            )}
          </div>
          <div className=" p-5 rounded-md shadow-sm shadow-slate-400 ">
            <div
              className=" md:text-xl font-semibold bg-slate-200 py-2 cursor-pointer"
              onClick={() => {
                !shipInfo ? setShipInfo(true) : setShipInfo(false);
              }}
            >
              <span className=" px-5 py-3 bg-slate-500 text-white mr-4 rounded-md">
                3
              </span>{" "}
              SHIPPING INFORMATION
            </div>
            {shipInfo && (
              <div className=" p-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum sed quasi sint consequatur adipisci provident saepe ad
                doloremque, accusamus ipsum minus reiciendis facere quam
                nesciunt impedit? Quisquam magnam quas ea? Laborum unde sequi
                vitae voluptates eveniet, commodi suscipit facilis aspernatur
                eaque, dignissimos animi quo in fuga quasi modi ea magnam
                reiciendis, voluptatum minima nemo sapiente numquam
                reprehenderit. Fugit, expedita a. Quas ab exercitationem numquam
                ipsum nobis voluptas, delectus voluptatem corporis unde
                voluptatum. Veritatis expedita itaque deleniti esse molestiae
                quod odit ducimus minus, maiores ex sequi cum, perspiciatis
                quia, sed repellat! Laborum obcaecati cumque incidunt. Libero
                quisquam odio optio repellendus hic eos quis molestias illum,
                repudiandae deleniti consectetur vitae magni tempore voluptate
                reiciendis veritatis est nulla nihil mollitia fuga accusamus ex
              </div>
            )}
          </div>
          <div className=" p-5 rounded-md shadow-sm shadow-slate-400 ">
            <div
              className=" md:text-xl font-semibold bg-slate-200 py-2 cursor-pointer"
              onClick={() => {
                !shipMethod ? setShipMethod(true) : setShipMethod(false);
              }}
            >
              <span className=" px-5 py-3 bg-slate-500 text-white mr-4 rounded-md">
                4
              </span>{" "}
              SHIPPING METHOD
            </div>
            {shipMethod && (
              <div className=" p-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum sed quasi sint consequatur adipisci provident saepe ad
                doloremque, accusamus ipsum minus reiciendis facere quam
                nesciunt impedit? Quisquam magnam quas ea? Laborum unde sequi
                vitae voluptates eveniet, commodi suscipit facilis aspernatur
                eaque, dignissimos animi quo in fuga quasi modi ea magnam
                reiciendis, voluptatum minima nemo sapiente numquam
                reprehenderit. Fugit, expedita a. Quas ab exercitationem numquam
                ipsum nobis voluptas, delectus voluptatem corporis unde
                voluptatum. Veritatis expedita itaque deleniti esse molestiae
                quod odit ducimus minus, maiores ex sequi cum, perspiciatis
                quia, sed repellat! Laborum obcaecati cumque incidunt. Libero
                quisquam odio optio repellendus hic eos quis molestias illum,
                repudiandae deleniti consectetur vitae magni tempore voluptate
                reiciendis veritatis est nulla nihil mollitia fuga accusamus ex
              </div>
            )}
          </div>
          <div className=" p-5 rounded-md shadow-sm shadow-slate-400 ">
            <div
              className=" md:text-xl font-semibold bg-slate-200 py-2 cursor-pointer"
              onClick={() => {
                !payment ? setPayment(true) : setPayment(false);
              }}
            >
              <span className=" px-5 py-3 bg-slate-500 text-white mr-4 rounded-md">
                5
              </span>{" "}
              PAYMENT INFORMATION
            </div>
            {payment && (
              <div className=" p-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum sed quasi sint consequatur adipisci provident saepe ad
                doloremque, accusamus ipsum minus reiciendis facere quam
                nesciunt impedit? Quisquam magnam quas ea? Laborum unde sequi
                vitae voluptates eveniet, commodi suscipit facilis aspernatur
                eaque, dignissimos animi quo in fuga quasi modi ea magnam
                reiciendis, voluptatum minima nemo sapiente numquam
                reprehenderit. Fugit, expedita a. Quas ab exercitationem numquam
                ipsum nobis voluptas, delectus voluptatem corporis unde
                voluptatum. Veritatis expedita itaque deleniti esse molestiae
                quod odit ducimus minus, maiores ex sequi cum, perspiciatis
                quia, sed repellat! Laborum obcaecati cumque incidunt. Libero
                quisquam odio optio repellendus hic eos quis molestias illum,
                repudiandae deleniti consectetur vitae magni tempore voluptate
                reiciendis veritatis est nulla nihil mollitia fuga accusamus ex
              </div>
            )}
          </div>
        </div>
        {/* checkout 2 */}
        <div className=" w-[95%] mx-auto md:mx-0  md:w-[25%] lg:w-[20%] shadow-sm shadow-slate-400 rounded-sm p-3 h-fit">
          {" "}
          <div className=" font-semibold text-xl">Your Checkout Progress</div>
          <hr className=" my-2" />
          <div className=" flex flex-col gap-3">
            <p className=" text-blue-600 cursor-pointer">Billing Address</p>
            <p className=" text-blue-600 cursor-pointer">Shipping Address</p>
            <p className=" text-blue-600 cursor-pointer">Shipping Method</p>
            <p className=" text-blue-600 cursor-pointer">Payment Method</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutCart;
