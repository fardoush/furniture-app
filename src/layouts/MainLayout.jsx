import { Outlet, useNavigation } from "react-router";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import FeatureSection from "../Components/FeatureSection/FeatureSection";
import CartDrawer from "../Components/CartDrawer/CartDrawer";
import CartProvider from "../Provider/CartProvider";
import { Triangle } from "react-loader-spinner";


const MainLayout = () => {
    const navigation = useNavigation();

  return (
    
    <CartProvider>
       {navigation.state === "loading" && (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50 space-y-3">
         <Triangle height="80" width="80" color="#b88e2f"/>
         <h6 className="text-center text-[#B88E2F] font-semibold text-2xl uppercase tracking-wider">Loading ...</h6>
        </div>
      )}
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
