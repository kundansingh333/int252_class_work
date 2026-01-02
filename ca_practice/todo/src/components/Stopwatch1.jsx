import React, { useState, useEffect, useRef } from "react";

const Stopwatch1 = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let intervalRef = useRef(null);
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const handleStop = () => setIsRunning(false);
  const handleStart = () => setIsRunning(true);
  const handleRest = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const milliseconds = Math.floor((time / 10) % 100);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 60000) % 60);

    const pad = (num) => num.toString().padStart(2, "0");
    return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-white bg-gray-900">
      <h1 className="mb-8 text-4xl font-bold font-mono bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent">
        StopWatch
      </h1>
      <div className="px-8 py-4 font-bold font-mono text-6xl border-2 rounded-2xl mb-8  border-green-600 bg-gradient-to-l from-pink-500 to-green-500 bg-clip-text text-transparent">
        {formatTime(time)}
      </div>
      <div className="flex gap-4">
        <button
          className="px-8 py-4 border rounded-md bg-green-500 text-black hover:0_0_20px_rgba(224,45,32,0.76) font-mono"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="px-8 py-4 border rounded-md bg-red-500 text-black"
          onClick={handleStop}
        >
          Stop
        </button>
        <button
          className="px-8 py-4 border rounded-md bg-yellow-500 text-black"
          onClick={handleRest}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch1;
