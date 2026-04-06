import { ArrowRightLeft, Heart, Share2 } from "lucide-react";
import React, { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../Provider/CartProvider";
import { toast } from "react-toastify";

const ProductCard = ({ product, view }) => {
  const { id, image, tag, discount, title, subtitle, price, discountPrice } =
    product;
  const { cartItem, setCartItems, setIsCartOpen,handleAddToWishlist } = useContext(CartContext);

  const handleAddToCart = () => {
    const existingProduct = cartItem.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cartItem.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItem, { ...product, quantity: 1 }]);
    }
    // const newProduct = {...product, quantity:1};
    // setCartItems([...cartItem, product]);
    setIsCartOpen(true);
    toast.success("Added to cart item!")

  };
   if (view === "list") {
    return (
      <div className="flex flex-col md:flex-row gap-4 bg-[#F4F5F7] p-4 rounded-lg group">
        <div className="relative md:w-64 w-full h-48 overflow-hidden rounded-lg">
          <img src={image} className="w-full h-full object-cover" />

          {tag && (
            <div
              className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm ${
                tag === "new" ? "bg-[#2EC1AC]" : "bg-[#E97171]"
              }`}
            >
              {tag === "new" ? "New" : `-${discount}`}
            </div>
          )}
        </div>

        <div className="flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-[#3A3A3A] font-bold text-lg">{title}</h3>
            <p className="text-[#898989] text-sm">{subtitle}</p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div>
              <span className="font-bold">
                Rp {price.toLocaleString()}
              </span>
              {discountPrice && (
                <span className="line-through ml-2 text-sm text-gray-400">
                  Rp {discountPrice.toLocaleString()}
                </span>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-[#B88E2F] text-white px-4 py-2 rounded"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="group relative bg-[#F4F5F7] transition-all duration-300">
      <div className="relative overflow-hidden">
        <img src={image} alt="" className="w-full h-[301px] object-cover" />
        {tag && (
          <div
            className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-white font-medium ${tag === "new" ? "bg-[#2EC1AC]" : "bg-[#E97171]"}`}
          >
            {tag === "new" ? "New" : `-${discount}`}
          </div>
        )}
        <div className="absolute inset-0 bg-[#3a3a3a]/50 opacity-0 group-hover:opacity-100 duration-300 flex flex-col items-center justify-center gap-4">
          <button
            onClick={handleAddToCart}
            className="bg-white font-semibold py-3 px-12 hover:bg-[#B88E2F] hover:text-white transition-all duration-1000"
          >
            Add to cart
          </button>
          <div className="flex items-center gap-4 text-white font-semibold">
            <span className="flex items-center gap-1 cursor-pointer hover:text-[#B88E2F] duration-500">
              <Share2 />
              Share
            </span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-[#B88E2F] duration-500">
              <ArrowRightLeft />
              Compare
            </span>
            <button onClick={() => handleAddToWishlist(product)} className="flex items-center gap-1 cursor-pointer hover:text-[#B88E2F] duration-500">
              <Heart />
              Like
            </button>
          </div>
        </div>
      </div>
      <Link to={`/productDetails/${id}`}>
        <div className="p-4 md:p-5">
          <h3 className="text-[#3A3A3A] font-bold text-[24px] mb-1 group-hover:text-primary transition-colors duration-500">
            {title}
          </h3>
          <p className="text-[#898989] font-medium text-[16px] mb-2">
            {subtitle}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-[#3A3A3A] font-bold text-sm">
              Rp {price.toLocaleString()}
            </span>
            {discountPrice && (
              <span className="text-[#B0B0B0] line-through text-sm">
                Rp {discountPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
