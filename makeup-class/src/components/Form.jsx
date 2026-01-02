import React from "react";
import FormInput from "./FormInput.jsx";
import FormOutput from "./FormOutput.jsx";

const Form = () => {
  //{handleAdd,data, handleDelete}
  return (
    <div>
      {/* <FormInput handleAdd={handleAdd} /> */}
      {/* <FormOutput data={data} handleDelete={handleDelete} />    */}

      {/* using useContext */}
      <FormInput />
      <FormOutput />
    </div>
  );
};

export default Form;
