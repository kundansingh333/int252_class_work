import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import {  addItem,
//   deleteItem,
//   updateItem,
// } from "../features/crud/crudSlice.js";
import { useRef } from "react";

// CRUD component to be implemented
const Crud = () => {
  const items = useSelector((state) => state.crud.items);
  const dispatch = useDispatch();

  const nameRef = useRef("");
  const emailRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: nameRef.current.value,
    };
  };

  return (
    <div>
      <h1>CRUD Component</h1>
      {/* FORM TO ADD DATA */}

      <form action="" onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" placeholder="Enter your name" />
        <input ref={emailRef} type="email" placeholder="Enter your email" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Crud;
