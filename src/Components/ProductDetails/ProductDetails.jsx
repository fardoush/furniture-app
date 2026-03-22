import React, { useState } from "react";
import product1 from "../../assets/product11.jpg";
import product2 from "../../assets/product12.jpg";
import product3 from "../../assets/product13.jpg";
import { Minus, Plus } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const products = useLoaderData();
  console.log("Products : ", products);
  const singleProduct = products.find((product) => product.id === productId);
  console.log("Single product : ", singleProduct);
  console.log("Id : ", typeof productId);

  const {
    image,
    title,
    price,
    reviewCount,
    description,
    sizes,
    colors,
    sku,
    category,
    tags,
  } = singleProduct;

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const productImg = [
    {
      id: 1,
      img: product1,
    },

    {
      id: 2,
      img: product2,
    },

    {
      id: 3,
      img: product3,
    },
  ];
  return (
    <div className="w-full bg-white">
      <div className="lg:container w-full mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* LEFT SIDE: Image Gallery */}
          <div className="w-full lg:w-1/2 flex gap-4 md:gap-8">
            <div className="flex flex-col gap-4">
              {productImg.map((proImg) => (
                <div
                  key={proImg.id}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-[#F9F1E7] flex justify-center items-center cursor-pointer overflow-hidden transition-transform hover:scale-105"
                >
                  <img
                    src={proImg.img}
                    alt="thumbnail"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="bg-[#F9F1E7] rounded-xl flex-1 flex items-center justify-center p-4 md:p-8 max-h-[400px]">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-contain max-h-[300px]"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 className="text-3xl md:text-4xl font-normal text-black mb-2">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-[#9F9F9F] font-medium mb-4">
              Rs. {price.toLocaleString()}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-5">
              <div className="rating rating-sm md:rating-md gap-1">
                {[1, 2, 3, 4].map((n) => (
                  <input
                    key={n}
                    type="radio"
                    className="mask mask-star-2 bg-[#FFC700]"
                    disabled
                    checked
                  />
                ))}
                <input
                  type="radio"
                  className="mask mask-star-2 bg-[#FFC700] opacity-50"
                  disabled
                />
              </div>
              <div className="divider divider-horizontal h-8 my-auto"></div>
              <span className="text-[#9F9F9F] text-sm">
                {reviewCount} Customer Reviews
              </span>
            </div>

            <p className="text-sm md:text-[13px] leading-relaxed text-black max-w-md mb-8">
              {description}
            </p>

            {/* Size Selection */}
            <div className="mb-6">
              <span className="text-sm text-[#9F9F9F] block mb-3">Size</span>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className="w-8 h-8 rounded-md flex items-center justify-center text-[13px] transition-colors bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <span className="text-sm text-[#9F9F9F] block mb-3">Color</span>
              <div className="flex gap-4">
                {/* {
colors.map((color, index) => <button key={index} onClick={() => setSelectedColor(color)} className={`w-8 h-8 rounded-ful transition-all duration-300 ${selectedColor === color ? ' ring-2 ring-offset-2 ring-gray-400' : 'hover:scale-110'}`}> <span className="sr-only">Select color {color}</span> </button> )
                } */}
                <button className="w-8 h-8 rounded-full bg-[#816DFA] ring-offset-2 hover:ring-2 ring-[#816DFA]"></button>
                <button className="w-8 h-8 rounded-full bg-black ring-offset-2 hover:ring-2 ring-black"></button>
                <button className="w-8 h-8 rounded-full bg-[#B88E2F] ring-offset-2 hover:ring-2 ring-[#B88E2F]"></button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 md:gap-4 pb-12 border-b border-[#D9D9D9] mb-10">
              <div className="flex items-center justify-between w-32 border border-[#9F9F9F] rounded-xl py-3 px-4 hover:border-black transition-colors group">
                <button className="hover:text-black text-[#9F9F9F] transition-colors">
                  <Minus
                    size={16}
                    strokeWidth={2.5}
                    className="cursor-pointer"
                  />
                </button>
                <span className="font-semibold text-black text-lg select-none">
                  1
                </span>
                <button className="hover:text-black text-[#9F9F9F] transition-colors">
                  <Plus
                    size={16}
                    strokeWidth={2.5}
                    className="cursor-pointer"
                  />
                </button>
              </div>

             
              <button className="flex-1 md:flex-none px-12 py-3 border border-black rounded-xl text-black text-[18px] font-medium hover:bg-black hover:text-white hover:shadow-lg active:scale-95 transition-all duration-300">
                Add To Cart
              </button>
              <button className="flex-1 md:flex-none px-12 py-3 border border-black rounded-xl text-black text-[18px] font-medium flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:shadow-lg active:scale-95 transition-all duration-300">
                <Plus size={18} strokeWidth={2.5} /> Compare
              </button>
            </div>

            {/* Metadata Section */}
            <div className="flex flex-col gap-3 text-[#9F9F9F] text-base">
              <div className="grid grid-cols-[100px_20px_1fr] items-center">
                <span>SKU</span>
                <span>:</span>
                <span>{sku || "SS001"}</span>
              </div>
              <div className="grid grid-cols-[100px_20px_1fr] items-center">
                <span>Category</span>
                <span>:</span>
                <span>{category || "Sofas"}</span>
              </div>
              <div className="grid grid-cols-[100px_20px_1fr] items-center">
                <span>Tags</span>
                <span>:</span>
                <span>{tags.join(", ")}</span>
                {/* <span className="">{tags.join.map(tag => <span>{
                  tag} </span> )}</span> */}
              </div>
              <div className="grid grid-cols-[100px_20px_1fr] items-center">
                <span>Share</span>
                <span>:</span>
                <div className="flex gap-4 text-black text-xl">
                  <FaFacebook className="cursor-pointer hover:text-[#B88E2F]" />
                  <FaLinkedin className="cursor-pointer hover:text-[#B88E2F]" />
                  <FaTwitter className="cursor-pointer hover:text-[#B88E2F]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
