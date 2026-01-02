import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <div className="h-screen">
      <h1 className="text-center text-5xl font-bold text-blue-600 mt-16">
        Counter
      </h1>
      <div className="flex items-center justify-center gap-8 mt-16">
        <button
          onClick={() => {
            count <= 0 ? setCount(0) : setCount(count - 1);
          }}
          className="px-4 py-2 w-20 bg-red-50 border border-red-600 rounded-md"
        >
          -
        </button>
        <div className="text-2xl text-blue-600 font-bold">{count}</div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="px-4 py-2 w-20 bg-green-50 border border-green-600 rounded-md"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
