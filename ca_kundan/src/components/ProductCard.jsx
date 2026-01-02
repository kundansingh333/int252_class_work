import React from "react";

const ProductCard = ({ data, handleDelete }) => {
  console.log("Data received:", data);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 p-5 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
          >
            <div className="w-full md:w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg bg-white p-2 border border-gray-100">
              <img
                src={item.url || item.image}
                alt="product"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-1 text-center md:text-left space-y-2">
              <h1 className="text-lg font-bold text-gray-800 capitalize">
                {item.name || item.title}
              </h1>

              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full capitalize">
                {item.category || "Uncategorized"}
              </span>

              <p className="text-xl font-bold text-gray-900">${item.price}</p>
            </div>

            <button
              onClick={() => handleDelete(index)}
              className="px-5 py-2.5 bg-red-50 text-red-600 font-medium rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-200 shadow-sm"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
