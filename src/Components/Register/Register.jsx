import React from 'react';

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F4F5F7] px-4 py-12">
      <div className="max-w-lg w-full bg-white p-10 shadow-sm border border-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#333333]">Register</h2>
        
        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input type="text" className="w-full px-4 py-3 border border-[#D9D9D9] focus:border-[#B88E2F] focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input type="text" className="w-full px-4 py-3 border border-[#D9D9D9] focus:border-[#B88E2F] focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
            <input type="email" className="w-full px-4 py-3 border border-[#D9D9D9] focus:border-[#B88E2F] focus:outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input type="password" className="w-full px-4 py-3 border border-[#D9D9D9] focus:border-[#B88E2F] focus:outline-none" />
          </div>

          <p className="text-xs text-gray-500 leading-relaxed">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold">privacy policy</span>.
          </p>

          <button className="w-full bg-black text-white py-4 font-semibold hover:bg-[#333] transition-all uppercase">
            Register
          </button>
        </form>
      </div>
    </div>
    );
};

export default Register;