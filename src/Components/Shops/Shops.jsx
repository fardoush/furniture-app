import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const Shops = ({ products , view}) => {
  
  return (
    <div className={view === "grid" ? "grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4" : "flex flex-col gap-4"}>
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} view={view}></ProductCard>
      ))}
    </div>
  );
};

export default Shops;
