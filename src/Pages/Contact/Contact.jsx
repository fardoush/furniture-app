import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import DefaultBanner from "../../Components/DefaultBanner/DefaultBanner";

const Contact = () => {
  return (
    <div>
        <DefaultBanner/>
      <section className="bg-white py-16 px-4 md:px-8 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Get In Touch With Us
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            {/* Left Side: Contact Info */}
            <div className="w-full lg:w-1/3 space-y-10">
              {/* Address */}
              <div className="flex gap-4">
                {/* Lucide MapPin Icon */}
                <MapPin className="w-7 h-7 mt-1 text-black flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-black">Address</h3>
                  <p className="text-gray-700 mt-1">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                {/* Lucide Phone Icon */}
                <Phone className="w-7 h-7 mt-1 text-black flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-black">Phone</h3>
                  <p className="text-gray-700 mt-1">
                    Mobile: +(84) 546-6789 <br />
                    Hotline: +(84) 456-6789
                  </p>
                </div>
              </div>

              {/* Working Time */}
              <div className="flex gap-4">
                {/* Lucide Clock Icon */}
                <Clock className="w-7 h-7 mt-1 text-black flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    Working Time
                  </h3>
                  <p className="text-gray-700 mt-1">
                    Monday-Friday: 9:00 - 22:00 <br />
                    Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="w-full lg:w-2/3">
              <form className="space-y-8">
                {/* Your Name */}
                <div>
                  <label className="block text-black font-medium mb-3">
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="Abc"
                    className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#B88E2F] transition-all"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-black font-medium mb-3">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Abc@def.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#B88E2F] transition-all"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-black font-medium mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="This is an optional"
                    className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#B88E2F] transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-black font-medium mb-3">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Hi! I'd like to ask about"
                    className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#B88E2F] transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#B88E2F] hover:bg-[#a17a26] text-white px-16 py-3 rounded-md font-medium transition-colors duration-300 w-full md:w-auto"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
