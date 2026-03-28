import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const Shops = ({ products }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 ">
      {products?.map((product) => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
    </div>
  );
};

export default Shops;
