import { MessageSquareX, Trash2, X } from "lucide-react";
import React, { useContext } from "react";
import { CartContext } from "../../Provider/CartProvider";
import { ToastContainer } from "react-toastify";

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItem, handleRemoveFormCart } =
    useContext(CartContext);

  return (
    <div
      className={`fixed  top-0 right-0 lg:w-[400px] md:w-[350px] w-full h-screen z-200 bg-white shadow-xl/30 transform transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <h2 className="text-lg font-semibold">Shopping Cart</h2>
        <button onClick={() => setIsCartOpen(false)} className=" text-gray-400">
          <MessageSquareX />
        </button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-[72%]">
        {cartItem.map((cart) => (
          <div
            className="flex gap-4 justify-between items-center"
            key={cart.id}
          >
            <div className="flex items-center gap-4">
              <img src={cart.image} alt="" className="w-16 h-16 object-cover" />
              <div>
                <h4 className="text-lg font-semibold ">{cart.title}</h4>
                <div className="flex items-center gap-3">
                  <span>1</span>
                  <span>
                    <X size={14} />
                  </span>
                  <span className="text-primary">
                    Rp {cart.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <button onClick={() => handleRemoveFormCart(cart.id)} className="">
              <Trash2 className="text-red-600" />
            </button>
          </div>
        ))}
      </div>

      <div className="">
        <div className="flex items-center justify-between px-4">
          <span className="">Subtitle</span>
          <h6 className="text-primary text-xl">Rs.9090890</h6>
        </div>
        <div className="divider"></div>
        <div className="flex items-center justify-center gap-3  py-4 px-6">
          <button className="btn btn-outline rounded-full px-6">Cart</button>
          <button className="btn btn-outline rounded-full px-6">
            Checkout
          </button>
          <button className="btn btn-outline rounded-full px-6">
            Comparison
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CartDrawer;
