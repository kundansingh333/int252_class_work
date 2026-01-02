import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isActive = window.location.pathname;

  return (
    <div>
      <nav className="bg-gray-700 p-4 text-white flex justify-between px-8">
        <div className="flex justify-center items-center gap-4">
          <span>
            <img
              className="w-20 rounded-full mix-blend-color"
              src="https://e7.pngegg.com/pngimages/680/534/png-clipart-logo-design-emblem-logo.png"
              alt=""
            />
          </span>
          <span className="font-bold">Sparrow</span>
        </div>
        <div>
          <Link
            to="/"
            className={`mr-4 ${isActive === "/" ? "text-yellow-300" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`mr-4 ${isActive === "/about" ? "text-yellow-300" : ""}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`mr-4 ${
              isActive === "/contact" ? "text-yellow-300" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            to="/practice"
            className={`mr-4 ${
              isActive === "/practice" ? "text-yellow-300" : ""
            }`}
          >
            Practice
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
