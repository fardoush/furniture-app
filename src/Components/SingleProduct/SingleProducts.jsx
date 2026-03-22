import React from "react";
import product1 from "../../assets/product11.jpg";
import product2 from "../../assets/product12.jpg";
import product3 from "../../assets/product13.jpg";
import { Minus, Plus } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const SingleProducts = ({product}) => {
  // const {image,title,price,rating, reviewCount,description,sizes,colors,sku,category,tags } = product;
  const {image,title,price,description,sku,category,tags } = product;
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
    <div className="lg:container w-full mx-auto">
      <div className="flex  gap-10 ">
        <div className="flex gap-5">
          <div className="flex flex-col gap-4">
            {productImg.map((proImg) => (
              <div className="w-[68px] h-[68px] rounded-xl bg-[#F9F1E7] flex justify-center items-center">
                <img
                  src={proImg?.img}
                  key={proImg.img}
                  className=" rounded-lg w-[56px] h-[60px] object-cover"
                />
              </div>
            ))}
          </div>

          <div className="bg-[#F9F1E7]">
            <img src={image} alt="" />
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-4xl text-black">{title}</h2>
          <h4 className="text-2xl text-[#9F9F9F] font-medium">Rs. {price}</h4>
          <div className="flex gap-4">
            <div className="rating">
              <div className="mask mask-star" aria-label="1 star"></div>
              <div className="mask mask-star" aria-label="2 star"></div>
              <div
                className="mask mask-star"
                aria-label="3 star"
                aria-current="true"
              ></div>
              <div className="mask mask-star" aria-label="4 star"></div>
              <div className="mask mask-star" aria-label="5 star"></div>
            </div>
            <span className="">5 Customer Review</span>
          </div>
          <p className="text-black">
           {description}
          </p>
          <span className="text-sm text-[#9F9F9F]">Size</span>
          <div className="flex gap-3">
            <button className="bg-primary text-white px-3 py-1 rounded-sm">
              XL
            </button>
            <button className="px-3 py-1 rounded-sm bg-[#F9F1E7] text-black  text-[16px] hover:bg-[#B88E2F] hover:text-white transition-all duration-300">
              XXL
            </button>
            <button className="px-3 py-1 rounded-sm bg-[#F9F1E7] text-black  text-[16px] hover:bg-[#B88E2F] hover:text-white transition-all duration-300">
              XL
            </button>
          </div>
          <span className="text-sm text-[#9F9F9F]">Color</span>
          <div className="flex gap-3">
            <div className="badge badge-primary badge-md rounded-full"></div>
            <div className="badge badge-secondary badge-md rounded-full"></div>
            <div className="badge badge-[#000000] badge-md rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            <div className="flex justify-center items-center gap-2 border ">
              <Minus />
              <span className="">1</span>
              <Plus />
            </div>
            <button className="btn btn-outline">Add To Cart</button>
            <button className="btn btn-outline">compare</button>
          </div>

          <div className="divider"></div>
          <div className="flex flex-col gap-3 text-[#9F9F9F] text-base">
            <div className="grid grid-cols-[80px_20px_1fr] items-center">
              <span>SKU</span>
              <span>:</span>
              <span className="text-[#9F9F9F]">{sku}</span>
            </div>

            <div className="grid grid-cols-[80px_20px_1fr] items-center">
              <span>Category</span>
              <span>:</span>
              <span className="text-[#9F9F9F]">{category}</span>
            </div>

            <div className="grid grid-cols-[80px_20px_1fr] items-center">
              <span>Tags</span>
              <span>:</span>
              <span className="text-[#9F9F9F]">{tags}</span>
            </div>

            <div className="grid grid-cols-[80px_20px_1fr] items-center">
              <span>Share</span>
              <span>:</span>
              <div className="flex gap-3 text-black text-xl">
                <FaFacebook className="cursor-pointer" />
                <FaLinkedin className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
