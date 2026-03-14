import React from "react";

const ProductRange = () => {
  const productRange = [
    {
      id: 1,
      img: "/src/assets/productRange1.jpg",
      title: "Dining",
    },
    {
      id: 2,
      img: "/src/assets/productRange2.jpg",
      title: "Living",
    },
    {
      id: 3,
      img: "/src/assets/productRange3.jpg",
      title: "Bedroom",
    },
  ];
  return (
    <div className="  flex flex-col justify-center items-center lg:py-[100px] md:py-[60px] py-10 md:px-10 px-5">
      <div className="lg:container w-full mx-auto">
        <div className="lg:pb-[60px] md:pb-10 pb-[30px]">
          <h2 className="text-4xl font-bold text-center text-[#333333] pb-4">
            Browse The Range
          </h2>
          <p className="text-base text-center text-[#666666]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            perspiciatis?
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  md:gap-5 gap-7">
          {productRange.map((product) => (
            <div key={product.id} className=" group cursor-pointer space-y-5">
              <div className=" overflow-hidden rounded-xl">
                <img
                  src={product.img}
                  alt=""
                  className="object-cover rounded-xl w-full md:h-[480px] h-auto  transition-transform duration-500 ease-in-out group-hover:scale-110 "
                />
              </div>
              <h6 className="text-center font-bold transition-colors duration-300 group-hover:text-primary">
                {product.title}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductRange;
