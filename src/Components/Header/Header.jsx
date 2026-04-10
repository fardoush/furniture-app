import { Heart, Search, ShoppingCart, UserRound, Menu, X } from "lucide-react";
import React, { useContext, useState } from "react";
import logo from "../../assets/logo.svg";
import { NavLink, useNavigate } from "react-router";
import { CartContext } from "../../Provider/CartProvider";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItem, wishlist, search, setSearch } = useContext(CartContext);
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/shop");
  };
  const link = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-[16px] font-medium transition-all duration-300 relative group py-2 
          ${isActive ? "text-primary" : "text-black hover:text-primary"}`
        }
      >
        Home
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          `text-[16px] font-medium transition-all duration-300 relative group py-2 
          ${isActive ? "text-primary" : "text-black hover:text-primary"}`
        }
      >
        Shop
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      {/* <NavLink
        to="/about"
        className={({ isActive }) =>
          `text-[16px] font-medium transition-all duration-300 relative group py-2 
          ${isActive ? "text-primary" : "text-black hover:text-primary"}`
        }
      >
        About
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
      </NavLink> */}
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `text-[16px] font-medium transition-all duration-300 relative group py-2 
          ${isActive ? "text-primary" : "text-black hover:text-primary"}`
        }
      >
        Contact
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          `text-[16px] font-medium transition-all duration-300 relative group py-2 
          ${isActive ? "text-primary" : "text-black hover:text-primary"}`
        }
      >
        Blog
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
    </>
  );
  return (
    <nav className="sticky top-0 left-0 z-[100] w-full bg-white border-b border-gray-100 shadow-sm">
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
          {/* <button
            title="Account"
            className="hover:text-primary transition-colors"
          >
            <UserRound
              strokeWidth={1.5}
              className="w-5 h-5 md:w-6 md:h-6 lg:w-[28px] lg:h-[28px]"
            />
          </button> */}
          <div className="relative">
            {/* Search Button*/}
            {!showInput && (
              <button
                title="Search"
                onClick={() => setShowInput(true)}
                className="hover:text-primary transition-colors mt-2"
              >
                <Search
                  strokeWidth={1.5}
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-[28px] lg:h-[28px]"
                />
              </button>
            )}

            {/* Search Form*/}
            {showInput && (
              <form
                onSubmit={handleSearch}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-50"
              >
                <div className="relative flex items-center">
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border border-primary px-4 py-2 rounded-md shadow-lg w-48 md:w-64 focus:outline-none bg-white pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setShowInput(false);
                      setSearch("");
                    }}
                    className="absolute right-3 text-gray-400 hover:text-red-500"
                  >
                    <X size={18} />
                  </button>
                </div>
              </form>
            )}
          </div>
          <button
            title="Wishlist"
            className="hover:text-primary transition-colors relative"
          >
            <Heart
              strokeWidth={1.5}
              className="w-5 h-5 md:w-6 md:h-6 lg:w-[28px] lg:h-[28px]"
            />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {wishlist.length}
              </span>
            )}
          </button>
          <button
            title="Cart"
            className="relative hover:text-primary transition-colors"
          >
            <ShoppingCart
              strokeWidth={1.5}
              className="w-5 h-5 md:w-6 md:h-6 lg:w-[28px] lg:h-[28px]"
            />
            {cartItem.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartItem.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
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
          <ul className="space-y-6 flex flex-col">{link}</ul>

          {/* Mobile Bottom Info */}
          <div className="pb-10 space-y-4">
            <button className="w-full h-[60px] bg-primary text-white font-bold rounded-lg shadow-lg active:scale-95 transition-transform">
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
