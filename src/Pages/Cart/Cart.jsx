import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import DefaultBanner from "../../Components/DefaultBanner/DefaultBanner";
import { CartContext } from "../../Provider/CartProvider";
import { Link } from "react-router";

const Cart = () => {
  const { cartItem, handleRemoveFormCart } = useContext(CartContext);

  const total = cartItem.reduce(
    (sum, items) => sum + items.price * items.quantity,
    0,
  );

  const subtotal = total;
  const shipping = 0;
  const finalTotal = subtotal + shipping;

  return (
    <div className="">
      <DefaultBanner />
      <div className="lg:container w-full mx-auto lg:py-20 md:py-12 py-10 md:px-8 px-5">
        <div className="flex lg:flex-row flex-col justify-center gap-5 lg:gap-10">
          <div className=" w-full lg:w-2/3 overflow-x-auto ">
            <table className="table w-full">
              {/* head */}
              <thead className="bg-[#F9F1E7] text-black capitalize">
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {cartItem.length > 0 ? (
                  cartItem.map((cart) => (
                    <tr className="hover:bg-[#FDF9F6]" key={cart.id}>
                      <td className="">
                        <div className="bg-[#F9F1E7] rounded-lg w-16 h-16 flex items-center justify-center shrink-0">
                          <img
                            src={cart.image}
                            alt={cart.title}
                            className="object-cover w-full h-full rounded-md"
                          />
                        </div>
                      </td>
                      <td>{cart.title}</td>
                      <td>{cart.price}</td>
                      <td>{cart.quantity}</td>
                      <td>Rp.{cart.price * cart.quantity}</td>
                      <td>
                        <MdDelete
                          onClick={() => handleRemoveFormCart(cart.id)}
                          className="text-primary w-6 h-6"
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-10 text-2xl">
                      Cart is empty 😢
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Total  */}
          <div className="card lg:w-96 w-full bg-[#F9F1E7] card-md rounded-none py-6">
            <div className="card-body flex flex-col justify-center items-center">
              <h2 className="card-title text-center text-3xl font-bold mb-12">
                Cart Totals
              </h2>

              <div className="flex flex-col gap-y-6">
                {/* Subtotal */}
                <div className="flex items-center gap-4">
                  <span className="w-1/3 font-semibold text-black ">
                    Subtotal
                  </span>
                  <div className="w-4/3 flex justify-end">
                    <span className="text-gray-400 text-[#9F9F9F]">
                      Rs. {subtotal}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-center gap-4">
                  <span className="w-1/3 font-semibold text-black ">Total</span>
                  <div className="w-4/3 flex justify-end">
                    <span className=" font-semibold text-primary text-base">
                      Rs. {finalTotal}
                    </span>
                  </div>
                </div>
              </div>

              <div className="justify-end card-actions mt-6">
                <Link
                  to="/checkout"
                  className="btn btn-primary shadow-none border-none"
                >
                  Check Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
