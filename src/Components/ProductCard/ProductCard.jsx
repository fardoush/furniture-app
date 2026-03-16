import { ArrowRightLeft, Heart, Share2 } from "lucide-react";
import React from "react";

const ProductCard = ({ product }) => {
  const { image, tag, discount, title,subtitle,price ,discountPrice} = product;
  return (
    <div className="group relative bg-[#F4F5F7] transition-all duration-300">
      <div className="relative overflow-hidden">
        <img src={image} alt="" className="w-full h-[301px] object-cover" />
        {tag && (
          <div
            className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-white font-medium ${tag === "new" ? "bg-[#2EC1AC]" : "bg-[#E97171]"}`}
          >
            {tag === "new" ? "New" : `-${discount}`}
          </div>
        )}
        <div className="absolute inset-0 bg-[#3a3a3a]/50 opacity-0 group-hover:opacity-100 duration-300 flex flex-col items-center justify-center gap-4">
        <button className="bg-white font-semibold py-3 px-12 hover:bg-[#B88E2F] hover:text-white transition-all duration-1000">
          Add to cart
        </button>
        <div className="flex items-center gap-4 text-white font-semibold">
          <span className="flex items-center gap-1 cursor-pointer hover:text-[#B88E2F] duration-500">
            <Share2 />
            Share
          </span>
          <span className="flex items-center gap-1 cursor-pointer hover:text-[#B88E2F] duration-500">
            <ArrowRightLeft />
            Compare
          </span>
          <span className="flex items-center gap-1 cursor-pointer hover:text-[#B88E2F] duration-500">
            <Heart />
            Like
          </span>
        </div>
      </div>
      </div>
      

      <div className="p-4 md:p-6">
        <h3 className="text-[#3A3A3A] font-bold text-[24px] mb-1 group-hover:text-primary transition-colors duration-500">{title}</h3>
        <p className="text-[#898989] font-medium text-[16px] mb-2">{subtitle}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-[#3A3A3A] font-bold text-[20px]">
            Rp {price.toLocaleString()}
          </span>
          {discountPrice && (
            <span className="text-[#B0B0B0] line-through text-[16px]">
              Rp {discountPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
