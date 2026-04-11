import React from "react";
import errorImg from "/images/404.svg";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-50 text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">

          <div className="mb-8">
            <img 
              src={errorImg} 
              alt="404 Error" 
              className="w-full h-auto max-w-sm mx-auto animate-pulse" 
            />
          </div>

          {/* <h2 className="mb-4 font-extrabold text-7xl md:text-9xl text-gray-400">
            <span className="sr-only">Error</span>404
          </h2> */}
          <p className="text-2xl font-semibold md:text-3xl mb-4">
            Oops! This page is missing.
          </p>
          <p className="mt-4 mb-8 text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>

 
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded-lg bg-primary hover:bg-[#a37a26] text-white transition-all duration-300 shadow-lg"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
