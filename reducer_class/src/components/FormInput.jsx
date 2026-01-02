import React, { useRef, useContext } from "react";
import MyContext from "../myContext";// Ensure path is correct

const FormInput = () => {
  // 1. Consume the Context to get the add function
  const { addData } = useContext(MyContext);

  const titleRef = useRef();
  const descRef = useRef();
  const imgRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 2. Create the object
    const data = {
      title: titleRef.current.value,
      desc: descRef.current.value,
      img: imgRef.current.value,
    };

    // 3. Send data to Context
    addData(data);

    // 4. Manually clear the inputs (Required when using useRef)
    titleRef.current.value = "";
    descRef.current.value = "";
    imgRef.current.value = "";

    console.log("Form submitted successfully");
  };

  return (
    <div className="mt-10 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
      >
        <h2 className="text-xl font-bold mb-4 text-gray-700 text-center">
          Add New Item
        </h2>

        {/* Title Input */}
        <div className="my-3">
          <input
            ref={titleRef}
            className="w-80 px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            type="text"
            placeholder="Title (min 6 chars)"
            minLength={6}
            required
          />
        </div>

        {/* Description Input */}
        <div className="my-3">
          <textarea
            ref={descRef}
            className="w-80 px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            name="desc"
            id="desc"
            placeholder="Enter description..."
            rows={4}
            required
          ></textarea>
        </div>

        {/* Image Link Input */}
        <div className="my-3">
          <input
            ref={imgRef}
            className="w-80 px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            type="url"
            placeholder="Image URL (http://...)"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-md"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default FormInput;
