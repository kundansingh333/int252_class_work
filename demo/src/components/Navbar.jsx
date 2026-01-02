import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full p-4 shadow-md px-8 mb-12">
      <div className="">
        <h1 className="text-4xl">Logo</h1>
      </div>

      <ul className="space-x-4 flex items-center text-xl">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Community</a>
      </ul>
    </div>
  );
};

export default Navbar;
