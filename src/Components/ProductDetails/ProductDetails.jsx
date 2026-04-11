import React, { useContext, useState } from "react";
import product1 from "../../assets/product11.jpg";
import product2 from "../../assets/product12.jpg";
import product3 from "../../assets/product13.jpg";
import { ChevronRight, Minus, Plus } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router";
import TabContent from "../TabContent/TabContent";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import { CartContext } from "../../Provider/CartProvider";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const products = useLoaderData();
  console.log("Products : ", products);
  const singleProduct = products.find((product) => product.id === productId);
  console.log("Single product : ", singleProduct);
  console.log("Id : ", typeof productId);

  const {
    image,
    title,
    price,
    reviewCount,
    description,
    sizes,
    colors,
    sku,
    category,
    tags,
  } = singleProduct;

  const { cartItem, setCartItems, setIsCartOpen } = useContext(CartContext);
  // const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  // category image
  const [mainImage, setMainImage] = useState(image);

  const relatedImages = products.filter(
    (item) => item.category === category && item.id !== productId,
  );
  const handleImageChange = (img) => {
    setMainImage(img);
  };

  const productImg = [
    {
      id: 1,
      img: product1,
    },

    {
      id: 2,
      img: product2,
    },

    {
      id: 3,
      img: product3,
    },
  ];

  const handleAddToCart = () => {
    const existingProduct = cartItem
      .find((item) => item.id === productId)
      .slice(0, 3);

    if (existingProduct) {
      const updatedCart = cartItem.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItem, { ...singleProduct, quantity: 1 }]);
    }
    // const newProduct = {...product, quantity:1};
    // setCartItems([...cartItem, product]);
    setIsCartOpen(true);
    toast.success("Added to cart item!");
  };
  return (
    <div className="">
      <div className="bg-[#F9F1E7] py-5">
        <div className="lg:container mx-auto">
          <div className="flex gap-3 items-center text-base md:text-lg">
            <Link
              to="/"
              className="text-gray-400 hover:text-black transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={18} className="text-black" />
            <Link
              to="/shop"
              className="text-gray-400 hover:text-black transition-colors"
            >
              Shop
            </Link>
            <ChevronRight size={18} className="text-black" />
            <div className="border-l-2 border-[#9F9F9F] h-8 mx-2"></div>
            <span className="font-semibold text-black">{title}</span>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="lg:container w-full mx-auto px-4 py-8 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* LEFT SIDE: Image Gallery */}

            <div className="w-full lg:w-1/2 flex gap-4 md:gap-8">
              {/* thumbnail image  */}
              <div className="flex flex-col gap-4">
                <div
                  onClick={() => handleImageChange(image)}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-[#F9F1E7] cursor-pointer overflow-hidden"
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* related images  */}
                {relatedImages.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleImageChange(item.image)}
                    className={`w-16 h-16 md:h-20 rounded-lg bg-[#F9F1E7] cursor-pointer overflow-hidden hover:scale-105 transition ${
                      mainImage === item.image ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="bg-[#F9F1E7] rounded-xl flex-1 flex items-center justify-center p-4 md:p-8 max-h-[400px]">
                <img
                  src={mainImage}
                  alt={title}
                  className="w-full h-auto object-contain max-h-[300px]"
                />
              </div>
            </div>

            {/* RIGHT SIDE: Product Info */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <h1 className="text-3xl md:text-4xl font-normal text-black mb-2">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-[#9F9F9F] font-medium mb-4">
                Rs. {price.toLocaleString()}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-5">
                <div className="rating rating-sm md:rating-md gap-1">
                  {[1, 2, 3, 4].map((n) => (
                    <input
                      key={n}
                      type="radio"
                      className="mask mask-star-2 bg-[#FFC700]"
                      disabled
                      checked
                    />
                  ))}
                  <input
                    type="radio"
                    className="mask mask-star-2 bg-[#FFC700] opacity-50"
                    disabled
                  />
                </div>
                <div className="divider divider-horizontal h-8 my-auto"></div>
                <span className="text-[#9F9F9F] text-sm">
                  {reviewCount} Customer Reviews
                </span>
              </div>

              <p className="text-sm md:text-[13px] leading-relaxed text-black max-w-md mb-8">
                {description}
              </p>

              {/* Size Selection */}
              <div className="mb-6">
                <span className="text-sm text-[#9F9F9F] block mb-3">Size</span>
                <div className="flex gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-8 h-8 rounded-md flex items-center justify-center text-[13px] transition-colors ${selectedSize === size ? "bg-primary text-white" : "bg-[#F9F1E7] text-black"}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-8">
                <span className="text-sm text-[#9F9F9F] block mb-3">Color</span>
                <div className="flex gap-4">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full ring-offset-2 transition-all duration-200 ${
                        selectedColor === color ? "ring-2 ring-black" : "ring-0"
                      }`}
                      style={{ backgroundColor: color }}
                    ></button>
                  ))}
                  {/* <button className="w-8 h-8 rounded-full bg-[#816DFA] ring-offset-2 hover:ring-2 ring-[#816DFA]"></button>
                  <button className="w-8 h-8 rounded-full bg-black ring-offset-2 hover:ring-2 ring-black"></button>
                  <button className="w-8 h-8 rounded-full bg-[#B88E2F] ring-offset-2 hover:ring-2 ring-[#B88E2F]"></button> */}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 md:gap-4 pb-12 border-b border-[#D9D9D9] mb-10">
                {/* <div className="flex items-center justify-between w-32 border border-[#9F9F9F] rounded-xl py-3 px-4 hover:border-black transition-colors group">
                  <button
                    onClick={() => decreaseQty(productId)}
                    className="hover:text-black text-[#9F9F9F] transition-colors"
                  >
                    <Minus
                      size={16}
                      strokeWidth={2.5}
                      className="cursor-pointer"
                    />
                  </button>
                  <span className="font-semibold text-black text-lg select-none">
                     {cartItem.find(item => item.id === productId)?.quantity || 1}
                  </span>
                  <button
                    onClick={() => increaseQty(productId)}
                    className="hover:text-black text-[#9F9F9F] transition-colors"
                  >
                    <Plus
                      size={16}
                      strokeWidth={2.5}
                      className="cursor-pointer"
                    />
                  </button>
                </div> */}

                <button
                  onClick={handleAddToCart}
                  className="flex-1 md:flex-none px-12 py-3 border border-black rounded-xl text-black text-[18px] font-medium hover:bg-black hover:text-white hover:shadow-lg active:scale-95 transition-all duration-300"
                >
                  Add To Cart
                </button>
                <Link
                  to="/comparison"
                  className="flex-1 md:flex-none px-12 py-3 border border-black rounded-xl text-black text-[18px] font-medium flex items-center justify-center gap-2 hover:bg-black hover:text-white hover:shadow-lg active:scale-95 transition-all duration-300"
                >
                  <Plus size={18} strokeWidth={2.5} /> Compare
                </Link>
              </div>

              {/* Metadata Section */}
              <div className="flex flex-col gap-3 text-[#9F9F9F] text-base">
                <div className="grid grid-cols-[100px_20px_1fr] items-center">
                  <span>SKU</span>
                  <span>:</span>
                  <span>{sku || "SS001"}</span>
                </div>
                <div className="grid grid-cols-[100px_20px_1fr] items-center">
                  <span>Category</span>
                  <span>:</span>
                  <span>{category || "Sofas"}</span>
                </div>
                <div className="grid grid-cols-[100px_20px_1fr] items-center">
                  <span>Tags</span>
                  <span>:</span>
                  <span>{tags.join(", ")}</span>
                  {/* <span className="">{tags.join.map(tag => <span>{
                  tag} </span> )}</span> */}
                </div>
                <div className="grid grid-cols-[100px_20px_1fr] items-center">
                  <span>Share</span>
                  <span>:</span>
                  <div className="flex gap-4 text-black text-xl">
                    <FaFacebook className="cursor-pointer hover:text-[#B88E2F]" />
                    <FaLinkedin className="cursor-pointer hover:text-[#B88E2F]" />
                    <FaTwitter className="cursor-pointer hover:text-[#B88E2F]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* tabs */}
          <TabContent />

          {/* Related Products  */}
          <RelatedProducts products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
