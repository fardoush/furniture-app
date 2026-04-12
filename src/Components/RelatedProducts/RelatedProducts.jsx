import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router";

const RelatedProducts = ({ products }) => {
  return (
    <div className="lg:container w-full mx-auto">
      <div className="lg:pb-[60px] md:pb-10 pb-[30px]">
          <h2 className="text-4xl font-bold text-center text-[#333333] pb-4">
            Related Products
          </h2>
          {/* <p className="text-base text-center text-[#666666]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            perspiciatis?
          </p> */}
        </div>

<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 ">

    {
        products.slice(0,4).map((product) => <ProductCard product={product} key={product.id}></ProductCard> )
    }
</div>

<div className="flex items-center justify-center py-10">
        <Link
          to="/shop"
          className="btn py-3 px-12 border-2 border-[#B88E2F] bg-transparent text-[#B88E2F] transition-colors duration-500 hover:bg-[#B88E2F] hover:text-white tracking-wide  rounded-none"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default RelatedProducts;
