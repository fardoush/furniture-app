import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../Pages/home/Home.jsx";
import ProductRange from "../Components/ProductRange/ProductRange.jsx";
import PhotoGallery from "../Components/PhotoGallery/PhotoGallery.jsx";
import ProductSection from "../Components/ProductSection/ProductSection.jsx";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('../../public/products.json'),
        Component: Home,
      },
      {
        path:"product-range",
        Component: ProductRange
      },
      {
        path:"products",
        Component: ProductSection
      },
      {
        path:"gallery",
        Component: PhotoGallery
      },
      
    ],
  },
]);