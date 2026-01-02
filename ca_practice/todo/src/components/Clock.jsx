// import React, { useState, useEffect } from "react";

// const Clock = () => {
//   // 1. Create State to store the current time
//   const [time, setTime] = useState(new Date());

//   // 2. Use Effect to set up the timer
//   useEffect(() => {
//     // The function that updates state
//     const timerId = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     // 3. Cleanup function: Runs when component is removed (unmounted)
//     // This is CRITICAL to prevent memory leaks!
//     return () => {
//       clearInterval(timerId);
//     };
//   }, []); // Empty dependency array = run only once on mount

//   // 4. Helper to format time nicely (HH:MM:SS)
//   const formatTime = (date) => {
//     return date.toLocaleTimeString();
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
//       <h2 className="text-2xl mb-4 font-light text-blue-300">Current Time</h2>

//       <div className="text-6xl font-bold font-mono border-4 border-blue-500 p-8 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.5)]">
//         {formatTime(time)}
//       </div>
//     </div>
//   );
// };

// export default Clock;

import React, { useEffect, useState } from "react";

const Clock = () => {
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
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white h-screen">
      <h1 className="text-2xl mb-5 text-blue-300 font-light">Current Time</h1>
      <div className="text-6xl p-8 border-4 border-blue-500 rounded-md font-bold font-mono shadow-[0_0_20px_rgba(59,130,246,0.5)]">
        {formatTime(time)}
      </div>
    </div>
  );
};

export default Clock;
