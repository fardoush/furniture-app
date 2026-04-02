import React from 'react';
import DefaultBanner from '../../Components/DefaultBanner/DefaultBanner';

const Checkout = () => {
    return (
        <div className="">
     
        <DefaultBanner/>

      <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Billing Details Form */}
        <div>
          <h2 className="text-3xl font-semibold mb-8">Billing details</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-medium">First Name</label>
                <input type="text" className="border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#B88E2F]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium">Last Name</label>
                <input type="text" className="border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#B88E2F]" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium">Company Name (Optional)</label>
              <input type="text" className="border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#B88E2F]" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium">Country / Region</label>
              <select className="border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#B88E2F]">
                <option>Bangladesh</option>
                <option>Sri Lanka</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium">Street address</label>
              <input type="text" placeholder="House number and street name" className="border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#B88E2F]" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium">Town / City</label>
              <input type="text" className="border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#B88E2F]" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium">Email address</label>
              <input type="email" className="border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#B88E2F]" />
            </div>

            <div className="mt-4">
              <input type="text" placeholder="Additional information" className="border border-gray-400 rounded-md p-3 w-full focus:outline-none focus:ring-1 focus:ring-[#B88E2F]" />
            </div>
          </form>
        </div>

        {/* Right Side: Order Summary & Payment */}
        <div className="py-2">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h3 className="text-2xl font-medium">Product</h3>
            <h3 className="text-2xl font-medium">Subtotal</h3>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <p className="text-gray-400">Asgaard sofa <span className="text-black text-xs">x 1</span></p>
              <p className="font-light">Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Subtotal</p>
              <p className="font-light">Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">Total</p>
              <p className="text-2xl font-bold text-[#B88E2F]">Rs. 250,000.00</p>
            </div>
          </div>

          <hr className="mb-6" />

          {/* Payment Method Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <p className="font-medium">Direct Bank Transfer</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 border border-gray-400 rounded-full"></div>
              <p className="text-gray-400 font-medium">Cash On Delivery</p>
            </div>
          </div>

          <p className="text-sm my-6">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold hover:text-primary transition-all duration-500">privacy policy.</span>
          </p>

          <div className="flex justify-center">
            <button className="border border-black px-16 py-3 rounded-xl hover:bg-black hover:text-white transition-all text-xl">
              Place Order
            </button>
          </div>
        </div>
      </div>

      {/* Benefits Section (Static Footer part from your image) */}
      <div className="bg-[#FAF3EA] py-20 mt-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
                <img src="/trophy.png" alt="High Quality" className="w-12 h-12" />
                <div>
                    <h4 className="font-bold text-xl text-[#242424]">High Quality</h4>
                    <p className="text-[#898989]">crafted from top materials</p>
                </div>
            </div>
            {/* Repeat for other benefits like Warranty, Free Shipping, etc. */}
        </div>
      </div>
    </div>
    );
};

export default Checkout;