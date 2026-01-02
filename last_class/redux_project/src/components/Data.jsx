import React from "react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser,deleteUser } from "../features/crudSlice";

function Data() {
  const data = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const nameRef = useRef("");
  const emailRef = useRef("");
  const addressRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const d = {
      id:Date.now(),
      name: nameRef.current.value,
      email: emailRef.current.value,
      address: addressRef.current.value,
    };
    dispatch(addUser(d));
    // setData([...data, d]);
    // console.log(d);
    nameRef.current.value = "";
    emailRef.current.value = "";
    addressRef.current.value = "";
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          ref={nameRef}
          placeholder="enter your name"
          id="name"
        />
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          ref={emailRef}
          placeholder="enter your email"
          id="email"
        />
        <label htmlFor="address">Address : </label>
        <input
          type="text"
          ref={addressRef}
          placeholder="enter your address"
          id="address"
        />
        <input type="submit" value="Add Data" />
      </form>
      <hr className="border-2 my-8" />
      <div>
        {data.map((item, index) => (
          <div
            key={index}
            className="border-2 px-4 py-2 mb-2 mx-2 rounded-sm flex justify-between "
          >
            <div>
              <h3>{item.name.toUpperCase()}</h3>
              <p>{item.email}</p>
              <p>{item.address}</p>
            </div>

            <div className="flex items-center">
              <button className="border-red-700 bg-red-200 px-4 py-2 rounded-sm" onClick={()=>dispatch(deleteUser(index))}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Data;
