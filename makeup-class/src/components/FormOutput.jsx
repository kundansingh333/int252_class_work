import React, { useContext } from "react";
import MyContext from "./MyContext";

const FormOutput = () => {  //{ data, handleDelete }
  // console.log(handleDelete);
  let {data,handleDelete}= useContext(MyContext);
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
        Form Output
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.map((item, i) => (
          <div
            className="bg-white rounded-lg shadow p-4 flex items-center gap-4 border-l-4 border-blue-500"
            key={i}
          >
            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-lg">
              {i + 1}
            </div>
            <div className="flex-1">
              <p className="text-gray-800 text-base break-words">
                {item.name} - {item.regNo} - {item.cgpa}
              </p>
            </div>
            <div>
              <button
                onClick={() => handleDelete(i)}
                className="text-red-500 hover:text-red-700 font-semibold hover:cursor-pointer text-2xl"
              >
                ☠
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormOutput;
