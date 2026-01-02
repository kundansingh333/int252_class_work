import React, { useState } from "react";
import Form from "./components/Form";
import Counter from "./components/Counter";
import Clock from "./components/Clock";
import Stopwatch from "./components/Stopwatch";
import Clock1 from "./components/Clock1";
import Stopwatch1 from "./components/Stopwatch1";

const App = () => {
  let [data, setData] = useState([]);
  const handleAdd = (task) => {
    setData(() => [...data, task]);
    console.log(data);
  };
  const handleDelete = (idx) => {
    let newData = data.filter((_, i) => idx !== i);
    setData(newData);
  };
  return (
    <div>
      {/* <Form handleAdd={handleAdd} data={data} handleDelete={handleDelete}/> */}
      {/* <Counter/> */}
      {/* <Clock/> */}
      {/* <Stopwatch /> */}
      <Clock1 />
      {/* <Stopwatch1 /> */}
    </div>
  );
};

export default App;

// import React from "react";
// import Navbar from "./components/Navbar.jsx";
// import CardContainer from "./components/CardContainer.jsx";
// import Cards from "./components/Navbar.jsx";
// const App = ({ props }) => {
//   const cardData = [
//     {
//       url: "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//       title: "LPU",
//       description: "Lovely Professional University",
//     },
//     {
//       url: "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg",
//       title: "LPU1",
//       description: "Lovely Professional University",
//     },
//     {
//       url: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
//       title: "LPU3",
//       description: "Lovely Professional University",
//     },
//   ];

//   return (
//     <div>
//       <Navbar />
//       <CardContainer cardData={cardData} />

//       <div>Hello World</div>
//     </div>
//   );
// };

// export default App;
