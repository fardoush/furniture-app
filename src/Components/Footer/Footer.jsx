import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router";

const Footer = () => {
    const link = <>
    <Link to="/" className="link link-hover hover:text-primary transition-all duration-500">Home</Link>
    <Link to="/shop" className="link link-hover hover:text-primary transition-all duration-500">Shop</Link>
    <Link to="/about" className="link link-hover hover:text-primary transition-all duration-500">About</Link>
    <Link to="/contact" className="link link-hover hover:text-primary transition-all duration-500">Contact</Link>
    </>
  return (
    <footer className=" bg-base-200 ">
      <div className="lg:container w-full mx-auto footer sm:footer-horizontal text-base-content p-10">
        <aside>
          <a href="" className="">
            <img src={logo} alt="" className="w-full h-10 object-cover" />
          </a>
          <p>
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Links</h6>
          {link}
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 ">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Furniro</p>
  </aside>
</footer>
    </footer>
  );
};

export default Footer;
