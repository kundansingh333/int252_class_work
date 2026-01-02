import React from "react";
import FormInput from "./FormInput";
import FormOutput from "./FormOutput";

const Form = () => {
  return (
    <div className="w-full">
      {/* Input Section */}
      <FormInput />
      
      {/* Divider */}
      <hr className="border-t-2 border-gray-200 my-8 w-3/4 mx-auto" />
      
      {/* Display Section */}
      <FormOutput />
    </div>
  );
};

export default Form;