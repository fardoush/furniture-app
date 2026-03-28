import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// const sliderData = [
//   {
//     id: 1,
//     title: "Inner Peace",
//     category: "Bed Room",
//     image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
//   },
//   {
//     id: 2,
//     title: "Modern Minimalist",
//     category: "Living Room",
//     image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000",
//   },
//   {
//     id: 3,
//     title: "Retro Vibe",
//     category: "Dining Room",
//     image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000",
//   },
// ];

const Slider = ({products}) => {
  return (
    <section className="bg-[#FCF8F3] py-16 px-4 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-10 overflow-hidden">

      <div className="lg:w-[35%] w-full">
        <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-[#3A3A3A] leading-[1.2]">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-[#616161] mt-4 mb-8 text-base lg:text-lg">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </p>
        <button className="bg-[#B88E2F] text-white px-10 py-3.5 font-semibold hover:bg-[#a17a26] transition-all duration-300">
          Explore More
        </button>
      </div>


      <div className="lg:w-[65%] w-full relative group">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-gray-300 !opacity-100',
            bulletActiveClass: '!bg-[#B88E2F] !w-6 !rounded-full transition-all duration-300' 
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
          }}
          breakpoints={{
            640: { slidesPerView: 1},
            1024: { slidesPerView: 2 },
            1760: { slidesPerView: 3 },
          }}
          className="mySwiper !pb-16"
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id} className="relative overflow-hidden">

              <div className="h-[450px] md:h-[580px] w-full transform transition-transform duration-500 hover:scale-105">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover shadow-lg"
                />
              </div>


              <div className="absolute bottom-6 left-6 flex items-end animate-fadeIn">
                <div className="bg-white/80 backdrop-blur-md p-6 lg:p-8 border border-white/20 shadow-xl">
                  <div className="flex items-center gap-2 text-[#616161] text-sm font-medium">
                    <span>0{index + 1}</span>
                    <div className="w-8 h-[1px] bg-[#616161]"></div>
                    <span>{product.category}</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#3A3A3A] mt-2">
                    {product.title}
                  </h3>
                </div>
                
  
                {/* <button className="bg-[#B88E2F] p-3 text-white transition hover:bg-[#a17a26] shadow-lg flex items-center justify-center h-[48px] w-[48px]">
                  <ArrowRight size={24} />
                </button> */}
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-[#B88E2F] p-3 rounded-full shadow-2xl cursor-pointer hover:bg-[#B88E2F] hover:text-white transition-all duration-300 invisible group-hover:visible">
             <ArrowRight size={24} />
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;