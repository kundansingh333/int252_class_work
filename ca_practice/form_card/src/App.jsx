// import React from "react";
// import Form from "./components/Form";
// import { useState } from "react";
// import CardContainer from "./components/CardContainer";
// import Api from "./components/Api";

// const App = () => {
//   let [data, setData] = useState([]);
//   const handleAdd = (d) => {
//     setData((prevData) => [...prevData, d]);
//     console.log(data);
//   };
//   const handleDelete = (idx) => {
//     let newData = data.filter((_, i) => i != idx);
//     setData(newData);
//     alert(`${idx + 1} data deleted successfully`);
//   };
//   return (
//     <>
//       <Form data={data} handleAdd={handleAdd} handleDelete={handleDelete} />
//       {/* <CardContainer/> */}
//       {/* <Api /> */}
//     </>
//   );
// };

// export default App;
// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { color: "red" };
//   }

//   render() {
//     return (
//       <h1>
//         Hello I am class component {this.state.color} {this.props.fruit}
//       </h1>
//     );
//   }
// }
// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [data, setData] = useState({
//     userName: "",
//     email: "",
//     phoneNumber: "",
//     address: "",
//     password: "",
//   });
//   const [formData, setFormData] = useState([]);
//   return (
//     <div>
//       <form
//         action=""
//         onSubmit={(e) => {
//           e.preventDefault();
//           setFormData([...formData, data]);
//           setData({
//             userName: "",
//             email: "",
//             phoneNumber: "",
//             address: "",
//             password: "",
//           });
//         }}
//       >
//         <input
//           required
//           onChange={(e) => {
//             setData({ ...data, userName: e.target.value });
//           }}
//           type="text"
//           placeholder="username"
//           name="userName"
//           value={data.userName}
//         />
//         <input
//           required
//           onChange={(e) => {
//             setData({ ...data, email: e.target.value });
//           }}
//           type="email"
//           placeholder="email@gmail.com"
//           name="email"
//           value={data.email}
//         />
//         <input
//           required
//           onChange={(e) => {
//             setData({ ...data, phoneNumber: e.target.value });
//           }}
//           type="text"
//           placeholder="phone number"
//           name="phoneNumber"
//           value={data.phoneNumber}
//         />
//         <input
//           required
//           onChange={(e) => {
//             setData({ ...data, address: e.target.value });
//           }}
//           type="text"
//           placeholder="address"
//           name="address"
//           value={data.address}
//         />
//         <input
//           required
//           onChange={(e) => {
//             setData({ ...data, password: e.target.value });
//           }}
//           type="password"
//           placeholder="password"
//           name="password"
//           value={data.password}
//         />
//         <input type="submit" value="Submit" />
//       </form>

//       <div>
//         {formData.map((item, index) => (
//           <div key={index} className="card">
//             <h2>{item.userName}</h2>
//             <p>{item.email}</p>
//             <p>{item.phoneNumber}</p>
//             <p>{item.address}</p>
//             <p>{item.password}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import axios from "axios";
import InputData from "./components/InputData";

const App = () => {
  const [data, setData] = useState([]);
  // const [addData, setAddData] = useState([]);

  useState(() => {
    axios
      .get("https://692d25a1e5f67cd80a4a4450.mockapi.io/todo")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [data]);
  const handleAdd = (d) => {
    axios
      .post("https://692d25a1e5f67cd80a4a4450.mockapi.io/todo", d)
      .then((res) => setData([...data, res.data]))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto">
      <InputData handleAdd={handleAdd} />
      <h1 className="text-center text-3xl font-bold mt-3 mb-8">
        This is my DataSet{" "}
      </h1>
      {data.map((item, idx) => {
        return (
          <div
            key={idx}
            className="border-2 mb-8 px-8 py-4 mx-4 rounded-2xl bg-linear-to-r from-purple-400 via-green-500 to-red-500 text-white hover:scale-115 transform transition duration-300"
          >
            <h2 className="font-bold text-2xl">{item.name}</h2>
            <p>{item.email}</p>
            <p>{item.number}</p>
            <p>{item.password}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
