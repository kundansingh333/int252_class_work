import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  let clickedButton = () => {
    alert("hell I am who you don't know!!!");
  };
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  return (
    <>
      <div className="h-screen bg-gradient-to-b from-blue-500 to-purple-600">
        <Navbar />
        <div className="flex items-center justify-center ">
          <div className="text-center space-y-6">
            <button
              className="bg-blue-500 text-white font-bold py-4 px-8 rounded-xl border border-blue-200  hover:bg-blue-500 hover:text-black transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
              onClick={clickedButton}
            >
              LPU
            </button>
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from bg-red-500 to-blue-600 text-shadow-2xs">
              Hello
            </h1>
            <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from bg-red-500 to-blue-600 text-shadow-2xs">
              {count}
            </h1>
            <button
              onClick={increaseCount}
              className="bg-blue-500 text-white font-bold py-4 px-8 rounded-xl border border-blue-200  hover:bg-blue-500 hover:text-black transition duration-300 ease-in-out shadow-lg hover:shadow-xl mr-4"
            >
              +
            </button>

            <button
              onClick={decreaseCount}
              className="bg-blue-500 text-white font-bold py-4 px-8 rounded-xl border border-blue-200  hover:bg-blue-500 hover:text-black transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
