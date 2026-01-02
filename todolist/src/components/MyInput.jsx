import React from "react";
import { useRef, useEffect } from "react";

const MyInput = () => {
  const data = useRef("");

  useEffect(() => {
    console.log(data.current);
  }, []);

  return (
    <div className="flex rounded-sm w-60">
      <input
        type="text"
        className="border-2 rounded-sm w-80 w-full p-2"
        ref={data}
      />
      {/* <button className="bg-blue-500 text-white p-2 rounded px-4 py-2 w-40">
        Add
      </button> */}
    </div>
  );
};

export default MyInput;
