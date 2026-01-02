import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  useEffect(async () => {
    const data = await fetch(
      "https://fakerapi.it/api/v2/images?_quantity=1&_type=any&_height=300"
    );
    const imgData = await data.json();
    console.log({ imgData });

    // const jsonRes = data.json();
    // console.log(jsonRes);
    console.log("Count updated:", count);
  }, [count]);
  return (
    <div className="bg-gray-800 h-screen flex items-center justify-center text-white">
      <div className="bg-gray-500 h-50 w-300 flex items-center justify-around p-4 rounded">
        <button
          className=" text-gray-800 text-4xl font-bold hover:cursor-pointer"
          onClick={() => {
            setCount(count > 0 ? count - 1 : 0);
          }}
        >
          -
        </button>
        <div className="text-green-500 text-6xl">{count}</div>
        <button
          className=" text-gray-800 text-4xl font-bold hover:cursor-pointer"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
