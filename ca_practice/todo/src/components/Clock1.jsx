import React from "react";
import { useEffect, useState } from "react";

function Clock1() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  const formatTime = (date) => {
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Timer</h1>
        <div className="text-6xl font-bold font-mono px-6 py-4 border-2 rounded-2xl border-blue-700 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent shadow-[0_0_20px_rgba(168,85,247,0.7)]">
          {formatTime(time)}
        </div>
        <div className="grid grid-cols-3">
          <div className="h-100 w-100 border-2 border-white/20 mt-10 rounded-2xl hover:shadow-2xl hover:shadow-green-400/50 transition duration-300 hover:scale-120 hover:z-50 bg-white/30 backdrop-blur-lg">
            Hello
          </div>
          <div className="h-100 w-100 border-2 mt-10 rounded-2xl hover:shadow-2xl hover:shadow-green-400/50 transition duration-300 hover:scale-120 bg-pink-600 relative hover:z-50">
            Hello
          </div>
          <div className="h-100 w-100 border-2 mt-10 rounded-2xl hover:shadow-2xl hover:shadow-green-400/50 transition duration-300 hover:scale-125">
            Hello
          </div>
        </div>
      </div>
    </div>
  );
}
export default Clock1;
