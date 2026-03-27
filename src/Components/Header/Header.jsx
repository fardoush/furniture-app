import { Heart, Search, ShoppingCart, UserRound, Menu, X } from "lucide-react";
import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "Shop", "About", "Contact"];
  const link = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-[16px] font-medium transition-all duration-300 relative group py-2 
          ${isActive ? "text-[#B88E2F]" : "text-black hover:text-[#B88E2F]"}`
        }
      >
        Home
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B88E2F] transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          `text-[16px] font-medium transition-all duration-300 relative group py-2 
          ${isActive ? "text-[#B88E2F]" : "text-black hover:text-[#B88E2F]"}`
        }
      >
        Shop
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B88E2F] transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `text-[16px] font-medium transition-all duration-300 relative group py-2 
          ${isActive ? "text-[#B88E2F]" : "text-black hover:text-[#B88E2F]"}`
        }
      >
        About
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B88E2F] transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `text-[16px] font-medium transition-all duration-300 relative group py-2 
          ${isActive ? "text-[#B88E2F]" : "text-black hover:text-[#B88E2F]"}`
        }
      >
        Contact
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B88E2F] transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
    </>
  );
  return (
    <nav className="sticky top-0 z-[100] w-full bg-white border-b border-gray-100 shadow-sm">
      {/* --- Desktop & Tablet Container --- */}
      <div className="lg:container mx-auto px-6 h-[80px] md:h-[100px] flex items-center justify-between gap-2">
        {/* 1. Logo Section */}
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Furniro"
              className="w-[140px] md:w-[185px] h-auto object-contain"
            />
          </a>
        </div>

        {/* 2. Desktop Navigation*/}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-[60px]">{link}</ul>
        </div>

        <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
          <button
            title="Account"
            className="hover:text-[#B88E2F] transition-colors"
          >
            <UserRound
              strokeWidth={1.5}
              className="w-5 h-5 md:w-6 md:h-6 lg:w-[28px] lg:h-[28px]"
            />
          </button>
          <button
            title="Search"
            className="hover:text-[#B88E2F] transition-colors"
          >
            <Search
              strokeWidth={1.5}
              className="w-5 h-5 md:w-6 md:h-6 lg:w-[28px] lg:h-[28px]"
            />
          </button>
          <button
            title="Wishlist"
            className="hover:text-[#B88E2F] transition-colors"
          >
            <Heart
              strokeWidth={1.5}
              className="w-5 h-5 md:w-6 md:h-6 lg:w-[28px] lg:h-[28px]"
            />
          </button>
          <button
            title="Cart"
            className="relative hover:text-[#B88E2F] transition-colors"
          >
            <ShoppingCart
              strokeWidth={1.5}
              className="w-5 h-5 md:w-6 md:h-6 lg:w-[28px] lg:h-[28px]"
            />
            <span className="absolute -top-1 -right-2 bg-[#B88E2F] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              3
            </span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1 text-black active:scale-90 transition-transform"
          >
            {isOpen ? (
              <X size={28} strokeWidth={1.5} />
            ) : (
              <Menu size={28} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* --- MOBILE & TABLET FULL-HEIGHT MENU --- */}
      {/* Overlay Background */}
      <div
        className={`lg:hidden fixed inset-0 top-[80px] bg-black/10 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Menu Drawer */}
      <div
        className={`lg:hidden fixed top-[80px] right-0 w-full h-[calc(100vh-80px)] bg-white shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-8 py-10 justify-between">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  onClick={() => setIsOpen(false)}
                  className="block py-4 text-3xl font-bold text-black border-b border-gray-50 active:text-[#B88E2F] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Bottom Info */}
          <div className="pb-10 space-y-4">
            <button className="w-full h-[60px] bg-[#B88E2F] text-white font-bold rounded-lg shadow-lg active:scale-95 transition-transform">
              Login / Register
            </button>
            <p className="text-center text-gray-400 text-sm italic">
              Premium Furniture Store
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
