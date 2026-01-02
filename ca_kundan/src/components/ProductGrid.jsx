import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ data, handleDelete }) => {
  return (
    <div>
      <ProductCard data={data} handleDelete={handleDelete} />
    </div>
  );
};

export default ProductGrid;
