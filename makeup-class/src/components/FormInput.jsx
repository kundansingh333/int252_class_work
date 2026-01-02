import React, { useContext } from "react";
import { useRef } from "react";
import MyContext from "./MyContext";

const FormInput = () => {    //{ handleAdd }
  let {handleAdd}=useContext(MyContext);
  let nameRef = useRef();
  let cgpaRef = useRef();
  let regNoRef = useRef();
  // const handleKeyDown = (event) => {
  //   // console.log(event);
  // };
  const AddTask = (event) => {
    let studentData={
      name: nameRef.current.value,
      regNo: regNoRef.current.value,
      cgpa: cgpaRef.current.value
    }
    handleAdd(studentData);
    // console.log(task.current.value);
    nameRef.current.value = "";
    regNoRef.current.value = "";
    cgpaRef.current.value = "";
    console.log(event);
  };

  return (
    <div className="flex items-center justify-center mt-10 gap-4 ">
      <input
        className="border px-4 py-2 rounded-md border-blue-500 "
        ref={nameRef}
        type="text"
        placeholder="Enter your name"
      />
      <input
        className="border px-4 py-2 rounded-md border-blue-500 "
        type="text"
        placeholder="Enter your Reg. no"
        ref={regNoRef}
      />
      <input
        className="border px-4 py-2 rounded-md border-blue-500 "
        type="number"
        placeholder="Enter your CGPA"
        ref={cgpaRef}
      />

      <button
        className="border-2 bg-blue-200 text-blue-500 px-4 py-2 rounded-md"
        onClick={AddTask}
        // onKeyDown={handleKeyDown}
      >
        Click to Add
      </button>
    </div>
  );
};

export default FormInput;
