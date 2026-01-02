import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="col-span-2 flex justify-center">
        <div className="pt-62">
          <h1 className="text-6xl font-bold text-center text-[#502414]">
            Start your <br />
            BK
            <span className="text-[40px]">
              <sup>&reg;</sup>
            </span>{" "}
            Order.
          </h1>

          <div className="bg-[#D62201] px-16 py-4 rounded-full mt-4 text-white w-max">
            <button className="flex items-center gap-4">
              <span>Icons</span> <p>Order Pickup</p>
            </button>
          </div>

          <div className="bg-[#F8F1E7] border-1 border-gray-500 px-16 py-4 rounded-full mt-4 text-white w-max ">
            <button className="flex items-center gap-4 text-black">
              <span>Icons</span> <p>Order Delivery</p>
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-3  flex items-center justify-center pb-45">
        <img className="w-250" src="/images.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
