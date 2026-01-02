import React from "react";
import { useRef } from "react";
import toast from "react-hot-toast";

const InputData = ({ handleAdd }) => {
  let nameRef = useRef();
  let emailRef = useRef();
  let numberRef = useRef();
  let passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("form submitted");
    let d = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      number: numberRef.current.value,
      password: passwordRef.current.value,
    };
    handleAdd(d);
    toast.success("Data added successfully");
    nameRef.current.value = "";
    emailRef.current.value = "";
    numberRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <div className="mt-12 mb-12 flex justify-center">
      <form action="" onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" placeholder="enter name" />
        <input ref={emailRef} type="email" placeholder="enter email" />
        <input ref={numberRef} type="text" placeholder="enter number" />
        <input ref={passwordRef} type="password" placeholder="enter password" />
        <input type="submit" value="Add Data" />
      </form>
    </div>
  );
};

export default InputData;
