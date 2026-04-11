import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../Pages/home/Home.jsx";
import ProductRange from "../Components/ProductRange/ProductRange.jsx";
import PhotoGallery from "../Components/PhotoGallery/PhotoGallery.jsx";
import ProductSection from "../Components/ProductSection/ProductSection.jsx";
import ErrorPage from "../Pages/ErrorPage/ErrorPage.jsx";
import ShopPage from "../Pages/ShopPage/ShopPage.jsx";
import Shops from "../Components/Shops/Shops.jsx";
import ProductDetails from "../Components/ProductDetails/ProductDetails.jsx";
import Contact from "../Pages/Contact/Contact.jsx";
import Cart from "../Pages/Cart/Cart.jsx";
import Checkout from "../Pages/Checkout/Checkout.jsx";
import Blog from "../Pages/Blog/Blog.jsx";
import Register from "../Components/Register/Register.jsx";
import Login from "../Components/Login/Login.jsx";
import axios from "axios";
import ProductComparison from "../Pages/ProductComparison/ProductComparison.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        // loader: () => fetch("/products.json"),
        loader: async () => {
          await new Promise((res) => setTimeout(res, 1000));
          const res = await fetch("/products.json");
          return res.json();
        },
        Component: Home,
      },
      {
        path: "product-range",
        Component: ProductRange,
      },
      {
        path: "products",
        Component: ProductSection,
      },
      {
        path: "gallery",
        Component: PhotoGallery,
      },
      {
        path: "/shop",
        loader: async () => {
          await new Promise((res) => setTimeout(res, 1000));
          const res = await fetch("/products.json");
          return res.json();
        },
        Component: ShopPage,
      },

      // {
      //   path: "/productDetails/:id",
      //    loader: () => fetch("../../public/products.json"),
      //   Component: ProductDetails
      // },
      {
        path: "/productDetails/:id",
        loader: async () => {
          await new Promise((res) => setTimeout(res, 1000));
          const res = await fetch("/products.json");
          return res.json();
        },
        Component: ProductDetails,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/checkout",
        Component: Checkout,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/blog",
        loader: async () => {
          await new Promise((res) => setTimeout(res, 1000));
          const res = await fetch("/products.json");
          return res.json();
        },
        Component: Blog,
      },
      {
        path: "/comparison",
        Component: ProductComparison,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
