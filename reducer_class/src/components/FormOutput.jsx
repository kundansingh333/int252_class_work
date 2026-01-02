import React, { useContext } from "react";
import MyContext from "../myContext"; // Make sure this path is correct based on your folder structure

const FormOutput = () => {
  // 1. Consume the context to get data and the delete function
  const { data, handleDelete } = useContext(MyContext);

  // 2. Handle the "Empty State" (when there is no data)
  if (!data || data.length === 0) {
    return (
      <div className="text-center p-10 text-gray-500">
        No items found. Please add some data.
      </div>
    );
  }

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
                // Safety check: if no image is provided, use a placeholder or empty string
                src={item.img || "https://via.placeholder.com/150"}
                alt="display_img"
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
