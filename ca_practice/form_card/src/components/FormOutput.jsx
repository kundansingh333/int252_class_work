import React from "react";

const FormOutput = ({ data, handleDelete }) => {
  return (
    // Main Container: Centered, with spacing between items
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      {data.map((item, idx) => {
        return (
          <div
            key={idx}
            // Card Styling: White bg, shadow, rounded corners, flex layout for row alignment
            className="flex flex-col md:flex-row items-center gap-6 p-5 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            {/* 1. Image Container - Fixed size, prevents stretching */}
            <div className="w-full md:w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
              <img
                src={item.img}
                alt="no_img"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 2. Text Content - Takes up remaining space */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-xl font-bold text-gray-800 mb-2 capitalize">
                {item.title}
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
              <p>Email: {item.email}</p>
              <p>Password: {item.pass}</p>
            </div>

            {/* 3. Action Button */}
            <button
              onClick={() => {
                handleDelete(idx);
              }}
              className="px-5 py-2.5 bg-red-50 text-red-600 font-medium rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FormOutput;
