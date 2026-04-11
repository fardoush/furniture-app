import React, { useContext } from "react";
import DefaultBanner from "../../Components/DefaultBanner/DefaultBanner";
import Swal from "sweetalert2";
import { CartContext } from "../../Provider/CartProvider";

const Checkout = () => {
  const { cartItem } = useContext(CartContext);

const totalPrice = cartItem.reduce(
  (total, item) => total + (item.price * item.quantity),
  0
);

  const handleSubmitCheckout = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const companyname = form.companyname.value;
    const country = form.country.value;
    const address = form.address.value;
    const email = form.email.value;
    const info = form.info.value;

    console.log(
      firstname,
      lastname,
      companyname,
      country,
      address,
      email,
      info,
    );
    Swal.fire({
      title: "Success!",
      text: "Message sent successfully Order Submited!",
      icon: "success",
      draggable: true,
      confirmButtonColor: "#B88E2F",
    });
  };

  return (
    <div className="">
      <DefaultBanner />

      <form onSubmit={handleSubmitCheckout}>
        <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Billing Details Form */}
          <div>
            <h2 className="text-3xl font-semibold mb-8">Billing details</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-medium">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    required
                    className="border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    required
                    className="border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium">Company Name (Optional)</label>
                <input
                  type="text"
                  name="companyname"
                  required
                  className="border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium">Country / Region</label>
                <select
                  name="country"
                  className="border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option>Bangladesh</option>
                  <option>Sri Lanka</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium">Street address</label>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="House number and street name"
                  className="border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium">Town / City</label>
                <input
                  type="text"
                  name="city"
                  required
                  className="border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium">Email address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  name="info"
                  placeholder="Additional information"
                  required
                  className="border border-gray-400 rounded-md p-3 w-full focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Order Summary & Payment */}
          <div className="py-2">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <h3 className="text-2xl font-medium">Product</h3>
              <h3 className="text-2xl font-medium">Subtotal</h3>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex flex-col justify-between">
                {cartItem.map((item) => (
                  <div key={item.id} className="flex justify-between gap-3">
                    <p className=" text-base text-gray-400">
                      {item.title}{" "}
                      <span className="text-black text-lg">
                        x {item.quantity}
                      </span>
                    </p>

                    <p className="text-base">
                      Rs. {item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <hr className="mb-6" />
            <div className="flex justify-between">
              <p className="font-medium text-xl">Total</p>
              <p className="text-2xl font-bold text-primary">
                Rs. {totalPrice}
              </p>
            </div>

            {/* Payment Method Section */}
            <div className="space-y-4 mt-10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <p className="font-medium">Direct Bank Transfer</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 border border-gray-400 rounded-full"></div>
                <p className="text-gray-400 font-medium">Cash On Delivery</p>
              </div>
            </div>

            <p className="text-sm my-6">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our
              <span className="font-bold hover:text-primary transition-all duration-500">
                privacy policy.
              </span>
            </p>

            <div className="flex ">
              <button className="border border-primary text-primary px-16 py-3 rounded-xl hover:bg-primary  focus:bg-primary focus:text-white hover:text-white transition-all text-xl">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
