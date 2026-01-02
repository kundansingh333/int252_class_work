import React from "react";
import Counter from "./components/Counter";
import Crud from "./components/Crud";

const App = () => {
  return (
    <div className="flex items-center justify-center">
      <Counter />
      <Crud />
    </div>
  );
};

export default App;
