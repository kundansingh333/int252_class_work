import React from "react";

const FormOutput = ({ data, handleDelete }) => {
  return (
    <div>
      {data.map((item, idx) => {
        return (
          <div
            className="flex items-center justify-center gap-4 mt-12 w-full"
            key={idx}
          >
            <div className="flex items-center justify-between w-full px-16 bg-gray-200">
              <div>
                <h1>
                  <span className="px-8">{idx + 1}</span>
                  {item}
                </h1>
              </div>

              <div>
                <button
                  onClick={() => {
                    handleDelete(idx);
                  }}
                  className="px-4 py-2 w-40 bg-red-500 rounded-md hover:cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FormOutput;
