import React, { Suspense } from "react";
import { Circles } from "react-loader-spinner";
import Products from "../Products/Products";
import { Link } from "react-router";

const ProductSection = ({ products }) => {
  return (
    <div className="lg:container w-full mx-auto lg:py-[100px] md:py-[60px] py-10   px-5 md:px-10 lg:px-10 ">
      <div className="lg:pb-[60px] md:pb-10 pb-[30px]">
        <h2 className="text-4xl font-bold text-center text-[#333333] pb-4">
          Our Products
        </h2>
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-64">
            <Circles
              height="80"
              width="80"
              color="#B88E2F"
              ariaLabel="circles-loading"
              visible={true}
            />
          </div>
        }
      >
        <Products products={products} />
      </Suspense>

      <div className="flex items-center justify-center py-10">
        <Link
          to="/shop"
          className="btn py-3 px-12 border-2 border-primary bg-transparent text-primary transition-colors duration-500 hover:bg-primary hover:text-white tracking-wide  rounded-none"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default ProductSection;
