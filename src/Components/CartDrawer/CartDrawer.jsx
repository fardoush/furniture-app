import { MessageSquareX, Trash2, X } from "lucide-react";
import React, { useContext } from "react";
import { CartContext } from "../../Provider/CartProvider";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router";

const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItem,
    handleRemoveFormCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  // const total = cartItem.reduce((sum,item) => sum + item.price * item.quantity,0)

const total = cartItem.reduce(
  (sum, item) => sum + (item?.price || 0) * (item?.quantity || 0),
  0
);

// const cleanCart = cartItem.filter(item => item && item.price);
// const total = cleanCart.reduce(
//   (sum, item) => sum + item.price * item.quantity,
//   0
// );

  return (
    <div
      className={`fixed  top-0 right-0 md:w-[400px]  w-full h-screen z-200 bg-white shadow-xl/30 transform transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
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
              <div className=" flex flex-col md:gap-2 gap-1">
                <h4 className="text-lg font-semibold ">{cart.title}</h4>
                <div className="flex items-center md:gap-3 gap-1">
                  {/* <span>{cart.quantity}</span> */}
                   <div className="flex items-center md:gap-2 gap-1 border border-gray-400 rounded-2xl">
                <button
                  onClick={() => decreaseQty(cart.id)}
                  className="md:px-2 px-[8px]"
                >
                  -
                </button>

                <span>{cart.quantity}</span>

                <button
                  onClick={() => increaseQty(cart.id)}
                  className="md:px-2 px-1"
                >
                  +
                </button>
              </div>
                  <span>
                    <X size={14} />
                  </span>
                  <span className="text-primary md:text-base text-sm">
                   Rp {((cart?.price || 0) * (cart?.quantity || 0)).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
             
              <button
                onClick={() => handleRemoveFormCart(cart.id)}
                className=""
              >
                <Trash2 className="text-red-600 md:w-6 md:h-6 w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="">
        <div className="flex items-center justify-between px-4">
          <span className="">Subtitle</span>
          <h6 className="text-primary text-xl">Rs.{total}</h6>
        </div>
        <div className="divider"></div>
        <div className="flex items-center justify-center md:gap-3 gap-2  py-4 md:px-6">
          <Link to="/cart" className="btn btn-outline rounded-full md:px-6 px-4">Cart</Link>
          <Link to="/checkout" className="btn btn-outline rounded-full  md:px-6 px-4">
            Checkout
          </Link>
          <Link className="btn btn-outline rounded-full  md:px-6 px-4">
            Comparison
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CartDrawer;
