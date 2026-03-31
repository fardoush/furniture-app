import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import FeatureSection from "../Components/FeatureSection/FeatureSection";
import CartDrawer from "../Components/CartDrawer/CartDrawer";
import CartProvider from "../Provider/CartProvider";

const MainLayout = () => {
  return (
    <CartProvider>
      <div className="relative">
        <Header />
        <CartDrawer />
        <Outlet />
        <FeatureSection />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default MainLayout;
