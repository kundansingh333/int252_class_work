import React, { useRef } from "react";

const FormInput = ({ handleAdd }) => {
  let titleRef = useRef();
  let descRef = useRef();
  let imgRef = useRef();
  let passRef = useRef();
  let emailRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      title: titleRef.current.value,
      desc: descRef.current.value,
      img: imgRef.current.value,
      pass: passRef.current.value,
      email: emailRef.current.value,
    };
    handleAdd(data);

    console.log("form submitted clicked");
  };
  return (
    <div className="ml-16 mt-16 flex items-center justify-center">
      <form action="" onSubmit={handleSubmit}>
        <div className="my-2 ">
          <input
            ref={titleRef}
            className="w-md px-4 py-2 border-2 rounded-md"
            type="text"
            placeholder="title...."
          />
          <input
            ref={emailRef}
            className="w-md px-4 py-2 border-2 rounded-md"
            type="email"
            placeholder="email@gmail.com"
          />
          <input
            ref={passRef}
            className="w-md px-4 py-2 border-2 rounded-md"
            type="password"
          />
        </div>
        <div className="my-2">
          <textarea
            ref={descRef}
            className="w-md px-4 py-2 border-2 rounded-md"
            name="desc"
            id="desc"
            placeholder="enter desc...."
            rows={5}
          ></textarea>
        </div>
        <div className="my-2 ">
          <input
            ref={imgRef}
            className="w-md px-4 py-2 border-2 rounded-md"
            type="text"
            placeholder="enter link"
          />
        </div>

        <button className="px-4 py-2 bg-blue-50 border-2 border-blue-600 rounded-md w-md hover:cursor-pointer mt-4">
          Add
        </button>
      </form>
    </div>
  );
};

export default FormInput;
