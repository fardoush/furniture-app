import React from 'react';
import hero  from "../../assets/hero_banner.jpg"

const HeroBanner = () => {
    return (
        <div className='hero relative min-h-screen' style={{backgroundImage: `url(${hero})`}}>
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

            <div className=" hero-content flex justify-end w-full ">
<div className="p-10 bg-[#F9F1E7] max-w-2xl rounded-[10px]">
    <span className="font-semibold text-base pb-1 ">New Arrival</span>
<h1 className="text-primary text-[52px] line-clamp-2 font-bold leading-[64px] pb-4">Discover Our <span className='block'>New Collection</span></h1>
<p className="text-[18px] pb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
<button className="py-[25px] px-[72px] bg-primary hover:bg-[#a37a26] transition-colors duration-300 text-white capitalize font-bold text-base ">BUY NOW</button>
</div>
            </div>
            
        </div>
    );
};

export default HeroBanner;