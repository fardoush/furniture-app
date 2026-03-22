import { LayoutGrid, LayoutList, ListTodo, SlidersHorizontal } from "lucide-react";
import React from "react";

const ShopToolbar = () => {
  return (
    <div className="bg-[#F9F1E7] py-4 ">
      <div className="lg:container w-full mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2">
            {" "}
            <SlidersHorizontal className="" size={16} /> Filter{" "}
          </button>

          <div className="flex gap-2">
            <button className=""><LayoutGrid size={16} /></button>
            <button className=""><LayoutList size={16}/></button>
            {/* <button className=""><ListTodo/></button> */}
          </div>

          <p className="border-l-2 border-black pl-4">
          Showing 1–16 of 32 results
        </p>
          </div>

          <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-black font-semibold">Show</span>
          <input type="number" defaultValue={16} className="w-16 h-10 p-2 text-center bg-white border border-gray-200 rounded-sm outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-300" />
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-black font-semibold">Short by</span>
          <select className="p-1  bg-white border border-gray-200 rounded-sm outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-300">
            <option>Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
        </div>

        
      </div>
    </div>
  );
};

export default ShopToolbar;

