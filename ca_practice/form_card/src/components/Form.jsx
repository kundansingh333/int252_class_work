import React, { useState } from "react";
import FormInput from "./FormInput";
import FormOutput from "./FormOutput";

const Form = ({handleAdd,data,handleDelete}) => {
  
  return (
    <div>
      <FormInput handleAdd={handleAdd} />
      <hr className="border-2 border-gray-800 mt-8" />
      <FormOutput data={data} handleDelete={handleDelete}/>
    </div>
  );
};

export default Form;
