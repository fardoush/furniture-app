import { Headset, ShieldCheck, Trophy, Truck } from "lucide-react";
import React from "react";
import { useLocation } from "react-router";

const FeatureSection = () => {
  const location = useLocation();
  const isExcludedPage =
    location.pathname === "/" ||
    location.pathname === "/shop" ||
    location.pathname === "/login" ||
    location.pathname === "/register";
  if (isExcludedPage) {
    return null;
  }
  const features = [
    {
      icon: <Trophy size={40} strokeWidth={1.5} />,
      title: "High Quality",
      desc: "crafted from top materials",
    },
    {
      icon: <ShieldCheck size={40} strokeWidth={1.5} />,
      title: "Warranty Protection",
      desc: "Over 2 years",
    },
    {
      icon: <Truck size={40} strokeWidth={1.5} />,
      title: "Free Shipping",
      desc: "Order over 150 $",
    },
    {
      icon: <Headset size={40} strokeWidth={1.5} />,
      title: "24 / 7 Support",
      desc: "Dedicated support",
    },
  ];
  return (
    <div className="bg-[#FAF3EA]">
      <div className="lg:container w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:py-20 md:py-15 py-10 md:px-10 px-5">
          {features.map((feature) => (
            <div className="flex items-center gap-3">
              <div className="text-black">{feature.icon}</div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#242424]">
                  {feature.title}
                </h3>
                <p className="text-gray-500 font-medium">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
