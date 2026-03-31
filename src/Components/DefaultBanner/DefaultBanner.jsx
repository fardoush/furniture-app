import React from "react";
import defaultbanner from "../../assets/hero_banner.jpg";
import { Link, useLocation } from "react-router";
import { ChevronRight } from "lucide-react";

const DefaultBanner = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/").filter((x) => x)[0] || "Home";
  const displayTitle = pathName.charAt(0).toUpperCase() + pathName.slice(1);
  return (
    <div
      className="relative min-h-[250px] md:min-h-[316px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{ backgroundImage: `url(${defaultbanner})` }}
    >
      <div className=" absolute top-0 inset-0 bg-gradient-to-r from-black/40 to-transparent "></div>

      <div className="relative z-10 flex flex-col items-center space-y-2 md:space-y-4 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-black tracking-wide">{displayTitle}</h1>

        <div className="flex items-center gap-1 md:gap-2 text-sm md:text-base">
          {" "}
          <Link to="/" className="font-bold text-black hover:text-[#B88E2F] transition-colors duration-300">
            Home
          </Link>{" "}
          <ChevronRight size={18} className="text-black font-bold" /> <Link to="/shop" className="text-black font-light">{displayTitle}</Link>
        </div>
      </div>
    </div>
  );
};

export default DefaultBanner;
