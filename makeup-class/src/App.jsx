import React from "react";
import Form from "./components/Form";
import { useState } from "react";
import MyContext from "./components/MyContext";

const App = () => {
  let [data, setData] = useState([]);
  const handleAdd = (e) => {
    setData((old) => [...old, e]);
    // console.log(data);
  };
  const handleDelete = (index) => {
    let newData = data.filter((_, i) => i !== index);
    setData(newData);
  };
  return (
    <>
      <MyContext.Provider value={{handleDelete,handleAdd,data}}>
        {/* <Form handleAdd={handleAdd} data={data} handleDelete={handleDelete} /> */}
        <Form/>
      </MyContext.Provider>
    </>
  );
};

export default App;
