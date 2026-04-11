import React from "react";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import ProductRange from "../../Components/ProductRange/ProductRange";
import ProductSection from "../../Components/ProductSection/ProductSection";
import PhotoGallery from "../../Components/PhotoGallery/PhotoGallery";
import { useLoaderData, useNavigation } from "react-router";
import Slider from "../../Components/Slider/Slider";
import { Triangle } from "react-loader-spinner";

const Home = () => {
  const products = useLoaderData();
  const navigation = useNavigation();
  // console.log(products);

if(navigation.state === "loading"){
  return (
     <div className="flex justify-center items-center h-screen">
         <Triangle
          visible={true}
          height="80"
          width="80"
          color="#b88e2f"
          ariaLabel="triangle-loading"
        />
      </div>
  )
}


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
