import React from "react";
import Form from "./components/Form";
import { useState } from "react";
import MyContext from "./MyContext";

const App = () => {
  let [data, setData] = useState([]);
  const addData = (e) => {
    setData([...data, e]);
    console.log(data);
  };
  return (
    <>
      <MyContext.Provider value={{ addData }}>
        <div className="text-red-500 text-5xl">
          <Form />
          {/* a={addData}  */}
        </div>
      </MyContext.Provider>
    </>
  );
};

export default App;
