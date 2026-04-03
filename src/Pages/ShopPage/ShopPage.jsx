import React, { Suspense, useState } from "react";
import DefaultBanner from "../../Components/DefaultBanner/DefaultBanner";
import { useLoaderData } from "react-router";
import Shops from "../../Components/Shops/Shops";
import ShopToolbar from "../../Components/ShopToolbar/ShopToolbar";

const ShopPage = () => {
  // dala load
  const products = useLoaderData();

  // sort price product 
const [sort, setSort] = useState("");

const sortedProducts = [...products].sort((a,b) => {
  if(sort === "low"){
    return a.price - b.price;
  }
  if(sort === "high"){
    return b.price - a.price;
  }
  return 0;
})
// show items per page 
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentProducts = sortedProducts.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const pages = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <div>
      <DefaultBanner />
      <ShopToolbar setSort={setSort}/>

      <asset>
        <div className="lg:container w-full mx-auto lg:py-[60px] md:py-10 py-[30px] md:px-10 px-5">
        <Suspense
          fallback={<span className="loading loading-bars loading-xl"></span>}
        >
          <Shops products={currentProducts} />
        </Suspense>

        {/* pagination  */}
        <div className="flex items-center justify-center  gap-3 pt-10">
          <button disabled = {currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}  className="px-6 h-12 rounded-lg bg-[#F9F1E7] text-black  text-[16px] hover:bg-[#B88E2F] hover:text-white transition-all duration-300">
            Prev
          </button>
          {pages.map((page) => (
            <button
            disabled = {currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              key={page}
              className={`w-12 h-12 rounded-lg  transition-all duration-300
                ${
                  currentPage === page
                    ? "bg-primary text-white font-semibold"
                    : " text-black bg-[#F9F1E7] hover:bg-primary hover:text-white font-normal"
                }
                `}
            >
              {page} 
          
            </button>
          ))}
          <button disabled = {currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}  className="px-6 h-12 rounded-lg bg-[#F9F1E7] text-black  text-[16px] hover:bg-[#B88E2F] hover:text-white transition-all duration-300">
            Next
          </button>
        </div>
      </div>
      </asset>
    </div>
  );
};

export default ShopPage;
