import React from "react";
import { MdDelete } from "react-icons/md";
import DefaultBanner from "../../Components/DefaultBanner/DefaultBanner";

const Cart = () => {
  return (
    <div className="">
        <DefaultBanner/>
        <div className="lg:container w-full mx-auto lg:py-20 md:py-12 py-10 md:px-8 px-5">
      <div className="flex lg:flex-row flex-col justify-between gap-5">
        <div className="overflow-x-auto ">
          <table className="table">
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
              <tr className="hover:bg-[#FDF9F6]">
                <th>
                  {" "}
                  <img
                    src="https://ibb.co.com/99M0zdb3"
                    alt=""
                    className="object-cover w-16 h-16 rounded-lg"
                  />
                </th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>
                  <MdDelete className="text-primary w-6 h-6" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Total  */}
        <div className="card lg:w-96 w-full bg-[#F9F1E7] card-md rounded-none py-6">
          <div className="card-body flex flex-col justify-center items-center">
            <h2 className="card-title text-center text-3xl font-bold mb-12">Cart Totals</h2>

            <div className="flex flex-col gap-y-6">
          {/* Subtotal */}
          <div className="flex items-center gap-4">
            <span className="w-1/3 font-semibold text-black ">Subtotal</span>
            <div className="w-4/3 flex justify-end">
                <span className="text-gray-400 text-[#9F9F9F]">Rs. 250,000.00</span>
            </div>
          </div>

          {/* Total */}
          <div className="flex items-center gap-4">
            <span className="w-1/3 font-semibold text-black ">Total</span>
             <div className="w-4/3 flex justify-end">
                <span className=" font-semibold text-primary text-base">
                 Rs. 250,000.000
                </span>
             </div>
          </div>
        </div>

            <div className="justify-end card-actions mt-6">
              <button className="btn btn-primary shadow-none border-none">Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;
