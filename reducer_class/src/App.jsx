import React, { useReducer } from "react";
import MyContext from "./myContext";
import Form from "./components/Form";
import Api from "./components/Api"; // Assuming this is the list display component

// Reducer logic
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      // Add new item to the start of the array
      return [action.payload, ...state];
    case "DELETE":
      // Filter out the item based on index
      return state.filter((_, index) => {
        return index !== action.payload;
      });
    default:
      return state;
  }
};

const App = () => {
  const [data, dispatch] = useReducer(reducer, []);

  // FIXED: This function now accepts 'item' as an argument
  function addData(item) {
    if (!item) return; // Prevent adding empty strings
    dispatch({ type: "ADD", payload: item });
  }

  function handleDelete(index) {
    dispatch({ type: "DELETE", payload: index });
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Context + Reducer Todo App</h1>

      {/* Providing state and functions to the children */}
      <MyContext.Provider value={{ data, addData, handleDelete }}>
        <Form />
        <hr />
        <Api />
      </MyContext.Provider>
    </div>
  );
};

export default App;
