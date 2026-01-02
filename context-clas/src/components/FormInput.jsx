import React, { useContext } from "react";
import { useRef } from "react";
import MyContext from "../MyContext";

const FormInput = (props) => {
  let { addData } = useContext(MyContext);
  const inputData = useRef();
  const handleAdd = (e) => {
    // props.a(inputData.current.value);
    addData(inputData.current.value);
    console.log(inputData.current.value);
    inputData.current.value = "";
  };
  return (
    <div>
      <input type="text" ref={inputData} />
      <button onClick={handleAdd}>Click to Add</button>
    </div>
  );
};

export default FormInput;
