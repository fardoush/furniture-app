import { LayoutGrid, LayoutList, SlidersHorizontal } from "lucide-react";
import React from "react";

const ShopToolbar = ({ setSort, setShowLimited,view, setView }) => {
  return (
    <section className="bg-[#F9F1E7] px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
        {/* Left Section: Filter, View Toggle & Counter */}
        <div className="flex items-center justify-between md:justify-start w-full md:w-auto gap-2 md:gap-4 lg:gap-8">
          <div className="flex items-center  gap-2 lg:gap-4">
            <button className="flex items-center gap-2 text-[16px] md:text-lg font-normal hover:text-[#B88E2F] transition-colors">
              <SlidersHorizontal size={20} />
              <span>Filter</span>
            </button>

            <div className="flex  gap-2 lg:gap-3 border-l-2 border-[#9F9F9F] pl-2 md:pl-4  lg:pl-8">
              <button onClick={() => setView("grid")}
                className={`hover:text-[#B88E2F] ${view === "grid" && "text-[#b88E2F]"}`}
                title="Grid View"
              >
                <LayoutGrid size={22} strokeWidth={1.5} />
              </button>
              <button onClick={() => setView("list")}
                className={`hover:text-[#B88E2F] ${view === "list" && "text-[#b88E2F]"}`}
                title="List View"
              >
                <LayoutList size={22} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="border-l-0 md:border-l-2 border-[#9F9F9F]  pl-2 md:pl-4 lg:pl-8 text-[14px] lg:text-[16px] md:text-[13px] text-black">
            Showing 1–16 of 32 results
          </div>
        </div>

        {/* Right Section: Show & Sort */}
        <div className="flex items-center justify-between md:justify-end w-full md:w-auto  gap-2 md:gap-4 lg:gap-7 border-t border-[#d6cfc7] pt-4 md:border-t-0 md:pt-0">
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-[14px] lg:text-[16px] md:text-[13px]">
              Show
            </span>
            {/* <input onChange={(e)=> setShowLimited(Number(e.target.value))}
              type="number"
              placeholder="16"
              className="w-8 h-8 md:w-12 text-center bg-white border-none rounded-[2px] outline-none focus:ring-1 focus:ring-[#B88E2F] text-gray-500 text-sm"
            /> */}
            <select
              onChange={(e) => setShowLimited(Number(e.target.value))}
              className="px-2 py-2 bg-white ..."
            >
              <option value={8}>8</option>
              <option value={16}>16</option>
              <option value={32}>32</option>
            </select>
          </div>

          <div className="flex items-center gap-1 lg:gap-4">
            <span className="text-[14px] lg:text-[16px] md:text-[13px] whitespace-nowrap">
              Sort by
            </span>
            <select
              onChange={(e) => setSort(e.target.value)}
              className="px-2 md:px-5 py-2.5 bg-white border-none rounded-[2px] outline-none focus:ring-1 focus:ring-[#B88E2F] text-gray-400 text-sm cursor-pointer transition-all"
            >
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopToolbar;
