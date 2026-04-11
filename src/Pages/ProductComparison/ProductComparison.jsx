import React, { useState } from "react";

const productList = [
  {
    id: 1,
    name: "Asgaard Sofa",
    price: "250,080.00",
    rating: 4.7,
    image: "https://i.imgur.com/4R2tQ2v.png",
    specs: {
      "Sales Package": "1 sectional sofa",
      "Model Number": "TFCBUGRBL6SRHS",
      "Secondary Material": "Solid Wood",
      Configuration: "L-shaped",
      "Upholstery Material": "Fabric + Cotton",
      "Upholstery Color": "Bright Grey & Lion",
      "Filling Material": "Foam",
      "Finish Type": "Bright Grey & Lion",
      "Maximum Load Capacity": "280 KG",
      "Origin of Manufacture": "India",
      Width: "265.32 cm",
      Height: "76 cm",
      "Warranty Summary": "1 Year Manufacturing Warranty",
      "Domestic Warranty": "1 Year",
    },
  },
  {
    id: 2,
    name: "Outdoor Sofa Set",
    price: "224,000.00",
    rating: 4.2,
    image: "https://i.imgur.com/2nCt3Sbl.png",
    specs: {
      "Sales Package": "1 Three Seater, 2 Single Seater",
      "Model Number": "DTUBUGRBL568",
      "Secondary Material": "Solid Wood",
      Configuration: "L-shaped",
      "Upholstery Material": "Fabric + Cotton",
      "Upholstery Color": "Bright Grey & Lion",
      "Filling Material": "Matte",
      "Finish Type": "Bright Grey & Lion",
      "Maximum Load Capacity": "300 KG",
      "Origin of Manufacture": "India",
      Width: "265.32 cm",
      Height: "76 cm",
      "Warranty Summary": "1.2 Year Manufacturing Warranty",
      "Domestic Warranty": "3 Months",
    },
  },
  {
    id: 3,
    name: "Luxury Velvet Sofa",
    price: "310,000.00",
    rating: 4.9,
    image: "https://i.imgur.com/9YjYQ8K.png",
    specs: {
      "Sales Package": "1 Sofa, 2 Pillows",
      "Model Number": "LUX-V772",
      "Secondary Material": "Teak Wood",
      Configuration: "U-shaped",
      "Upholstery Material": "Velvet",
      "Upholstery Color": "Deep Blue",
      "Filling Material": "High Density Foam",
      "Finish Type": "Glossy",
      "Maximum Load Capacity": "350 KG",
      "Origin of Manufacture": "Italy",
      Width: "280.00 cm",
      Height: "80 cm",
      "Warranty Summary": "2 Year Premium Warranty",
      "Domestic Warranty": "1 Year",
    },
  },
];

const ProductComparison = () => {
  const [selected, setSelected] = useState([productList[0], productList[1]]);

  const handleAdd = (e) => {
    const id = Number(e.target.value);
    if (!id || selected.length >= 3) return;
    const product = productList.find((p) => p.id === id);
    if (product && !selected.find((p) => p.id === id)) {
      setSelected([...selected, product]);
    }
  };

  const handleRemove = (id) => {
    setSelected(selected.filter((p) => p.id !== id));
  };

  const features = [
    "Sales Package",
    "Model Number",
    "Secondary Material",
    "Configuration",
    "Upholstery Material",
    "Upholstery Color",
    "Warranty Summary",
    "Domestic Warranty",
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 border-b pb-12">
          <div className="lg:col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              Go to Product page for more Products
            </h2>
            <button className="mt-4 text-gray-500 underline underline-offset-8 font-medium hover:text-black transition">
              View More
            </button>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {selected.map((p) => (
              <div key={p.id} className="relative group">
                <button
                  onClick={() => handleRemove(p.id)}
                  className="absolute top-2 right-2 bg-red-500 text-white w-7 h-7 rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-red-600 transition"
                >
                  ✕
                </button>
                <div className="bg-[#F9F1E7] rounded-2xl p-6 flex items-center justify-center aspect-[4/3]">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="max-h-full w-auto object-contain transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <p className="text-lg font-semibold text-gray-800">
                    Rs. {p.price}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm font-bold bg-[#B88E2F] text-white px-2 py-0.5 rounded">
                      {p.rating}
                    </span>
                    <div className="flex text-[#FFC700] text-xs">★★★★★</div>
                    <span className="text-gray-400 text-xs border-l pl-2">
                      Reviews
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {selected.length < 3 && (
              <div className="flex flex-col justify-center border-2 border-dashed border-gray-200 rounded-2xl p-6 min-h-[200px]">
                <h3 className="text-lg font-bold mb-4">Add A Product</h3>
                <select
                  onChange={handleAdd}
                  value=""
                  className="w-full bg-[#B88E2F] text-white py-3 px-4 rounded-lg font-medium shadow-md outline-none cursor-pointer hover:bg-[#a17a26] transition"
                >
                  <option value="" disabled>
                    Choose Product
                  </option>
                  {productList
                    .filter((p) => !selected.find((s) => s.id === p.id))
                    .map((p) => (
                      <option key={p.id} value={p.id} className="text-black">
                        {p.name}
                      </option>
                    ))}
                </select>
              </div>
            )}
          </div>
        </div>

{/* --- COMPARISON SECTION --- */}
<div className="mt-12">
  
  {/*  Desktop & Tablet View (Hidden below 768px) */}
  <div className="hidden md:block overflow-hidden border border-gray-100 rounded-2xl shadow-sm bg-white">
    <div className="w-full overflow-x-auto custom-scrollbar">
      <table className="w-full text-left border-collapse min-w-[900px] lg:min-w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="p-6 text-xl font-bold text-gray-900 border-r border-r-gray-200 w-1/4 sticky left-0 bg-gray-50 z-20 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
              Features
            </th>
            {selected.map((p) => (
              <th key={p.id} className="p-6 text-xl font-bold text-gray-900 border-r border-r-gray-200">{p.name}</th>
            ))}
            {Array.from({ length: 3 - selected.length }).map((_, i) => (
              <th key={i} className="p-6 border-r border-r-gray-200 "></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature} className="border-t border-gray-100 hover:bg-gray-50 transition group">
              <td className="p-6 font-semibold text-gray-700 border-r border-r-gray-200 sticky left-0 bg-white group-hover:bg-gray-50 z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">
                {feature}
              </td>
              {selected.map((p) => (
                <td key={p.id} className="p-6 text-gray-600 border-r border-r-gray-200 text-sm">
                  {p.specs[feature] || "—"}
                </td>
              ))}
              {Array.from({ length: 3 - selected.length }).map((_, i) => (
                <td key={i} className="p-6 border-r border-r-gray-200"></td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="p-6 border-r border-r-gray-200 sticky left-0 bg-white z-10"></td>
            {selected.map((p) => (
              <td key={p.id} className="p-6 border-r border-r-gray-200">
                <button className="w-full bg-[#B88E2F] text-white py-4 rounded font-bold hover:bg-[#a17a26] transition shadow-md">
                  Add To Cart
                </button>
              </td>
            ))}
            {Array.from({ length: 3 - selected.length }).map((_, i) => (
              <td key={i} className="p-6 border-r border-r-gray-200"></td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div className="md:hidden space-y-6">
    {selected.length === 0 ? (
      <p className="text-center text-gray-500 py-10">No products selected for comparison.</p>
    ) : (
      selected.map((p) => (
        <div key={p.id} className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          {/* Product Header in Card */}
          <div className="bg-[#F9F1E7] p-4 flex items-center gap-4">
            <img src={p.image} alt={p.name} className="w-16 h-16 object-contain bg-white rounded-lg p-1" />
            <div>
              <h3 className="font-bold text-gray-900">{p.name}</h3>
              <p className="text-[#B88E2F] font-bold text-sm">Rs. {p.price}</p>
            </div>
          </div>
          
          {/* Specs List */}
          <div className="p-4 space-y-3">
            {features.map((f) => (
              <div key={f} className="flex justify-between gap-4 border-b border-gray-50 pb-2">
                <span className="text-xs font-bold text-gray-400 uppercase w-1/3">{f}</span>
                <span className="text-xs text-gray-700 w-2/3 text-right">{p.specs[f] || "—"}</span>
              </div>
            ))}
            <button className="w-full bg-[#B88E2F] text-white py-3 rounded-xl font-bold mt-4 shadow-lg active:scale-95 transition">
              Add To Cart
            </button>
          </div>
        </div>
      ))
    )}
  </div>
</div>

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden text-center mt-4 text-gray-400 text-xs animate-pulse">
          ← Swipe left/right to see all features →
        </div>
      </div>
    </div>
  );
};

export default ProductComparison;
