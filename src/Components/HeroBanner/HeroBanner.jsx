import React from "react";
import hero from "/images/hero_banner.jpg";

const HeroBanner = () => {
  return (
    <div
      className="hero relative h-screen w-full flex items-center md:justify-end lg:pr-10 md:pr-8 pr-0 -mt-[100px] pt-[100px]  "
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

      <div className=" hero-content flex justify-end w-full ">
        <div className="md:p-10 p-6 bg-[#F9F1E7] md:max-w-2xl w-full rounded-[10px]">
          <span className="font-semibold text-base pb-1 tracking-[3px] ">
            New Arrival
          </span>
          <h1 className="text-primary lg:text-[52px] md:text-5xl text-3xl line-clamp-2 font-bold lg:leading-[64px] md:leading-[54px] leading-[32px] pb-4">
            Discover Our <span className="block">New Collection</span>
          </h1>
          <p className="text-[18px] pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="lg:py-5 lg:px-[72px] py-4 px-12 bg-primary hover:bg-[#a37a26] transition-colors duration-300 text-white capitalize font-bold text-base ">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
