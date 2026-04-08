import React from 'react';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F4F5F7] px-4">
      <div className="max-w-md w-full bg-white p-8 shadow-sm border border-gray-100 rounded-sm">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#333333]">Log In</h2>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 border border-[#B88E2F] rounded-md focus:outline-none focus:ring-1 focus:ring-[#B88E2F]"
              placeholder="Your email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 border border-[#B88E2F] rounded-md focus:outline-none focus:ring-1 focus:ring-[#B88E2F]"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="accent-[#B88E2F]" />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-[#B88E2F] hover:underline">Forgot password?</a>
          </div>

          <button className="w-full bg-[#B88E2F] text-white py-3 font-semibold hover:bg-[#967524] transition-colors uppercase tracking-widest">
            Log In
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          New customer? <a href="/register" className="text-[#B88E2F] font-bold">Create Account</a>
        </p>
      </div>
    </div>
    );
};

export default Login;