import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "../features/counter/couterSlice.js";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter Component</h1>
      <div>
        <button
          className="px-4 py-2 border-2 rounded-xl"
          onClick={() => dispatch(decrement())}
        >
          Decrement Value
        </button>
        <span className="px-16 py-2 bg-gray-200 rounded-xl">{count}</span>
        <button
          className="px-4 py-2 border-2 rounded-xl"
          onClick={() => dispatch(increment())}
        >
          Incement Value
        </button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
