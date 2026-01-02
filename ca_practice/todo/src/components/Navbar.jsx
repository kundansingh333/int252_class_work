import React from "react";
const Navbar = () => {
  return (
    <div className=" flex justify-between items-center p-4 bg-slate-600">
      <div className="w-16">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQWraBfrgPdhRFRi7a4nnJYWsRXfWTTsSEw&s"
          alt=""
        />
      </div>
      <div className="space-x-6">
        <button className="bg-blue-700 p-4 rounded">Home</button>
        <button className="bg-red-700 p-4 rounded">About us</button>
        <button className="bg-green-700 p-4 rounded">Contact us</button>
      </div>
      <div>
        <button className="bg-gray-700 p-4 rounded">Download App</button>
      </div>
    </div>
  );
};
export default Navbar;
