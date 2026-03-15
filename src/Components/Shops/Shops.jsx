import React from "react";
import ShopCard from "../ShopCard/ShopCard";

const Shops = ({ products }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 ">
      {products?.map((product) => (
        <ShopCard product={product} key={product.id}>
          {" "}
        </ShopCard>
      ))}
    </div>
  );
};

export default Shops;
