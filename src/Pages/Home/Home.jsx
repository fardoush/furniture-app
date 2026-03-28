import React from "react";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import ProductRange from "../../Components/ProductRange/ProductRange";
import ProductSection from "../../Components/ProductSection/ProductSection";
import PhotoGallery from "../../Components/PhotoGallery/PhotoGallery";
import { useLoaderData } from "react-router";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <>
      <HeroBanner />
      <ProductRange />
      <ProductSection products={products} />
      <Slider products={products} />
      <PhotoGallery />
    </>
  );
};

export default Home;
