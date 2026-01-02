import React from "react";
import Footer from "./components/Footer";
import ProductForm from "./components/ProductForm";
import ProductGrid from "./components/ProductGrid";
import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [data, setData] = useState([]);
  const handleAdd = (product) => {
    setData((prev) => [...prev, product]);
    console.log(data);
  };
  const handleDelete = (id) => {
    const updatedData = data.filter((item, index) => index !== id);
    setData(updatedData);
  };
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <ProductForm handleAdd={handleAdd} />
        <ProductGrid data={data} handleDelete={handleDelete} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
