import React, { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  // 1. State to keep track of time in milliseconds
  const [time, setTime] = useState(0);

  // 2. State to check if stopwatch is running
  const [isRunning, setIsRunning] = useState(false);

  // 3. useRef to store the Interval ID (so we can stop it later)
  const intervalRef = useRef(null);

  useEffect(() => {
    // If running, start the timer
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Add 10ms every tick
      }, 10);
    } else {
      // If not running, clear the timer
      clearInterval(intervalRef.current);
    }

    // Cleanup on unmount
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Helper functions for buttons
  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  // Format time into MM:SS:MS
  const formatTime = (time) => {
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time / 10) % 100);

    // Helper to add leading zero (e.g., "5" -> "05")
    const pad = (num) => num.toString().padStart(2, "0");

    return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">Stopwatch</h1>

      {/* Time Display */}
      <div className="text-6xl font-mono mb-8 bg-gray-800 px-8 py-4 rounded-lg shadow-lg border-2 border-blue-500">
        {formatTime(time)}
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleStart}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isRunning} // Disable start if already running
        >
          Start
        </button>

        <button
          onClick={handleStop}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold transition-colors"
        >
          Stop
        </button>

        <button
          onClick={handleReset}
          className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-bold transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
