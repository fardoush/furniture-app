import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getStoredCart, saveCart } from "../utilities/AdToDB";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItem, setCartItems] = useState(() => getStoredCart());
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  useEffect(() => {
    saveCart(cartItem);
  }, [cartItem]);

  const handleRemoveFormCart = (id) => {
    setCartItems(cartItem.filter((cart) => cart.id !== id));
    toast.error(`Item removed successfully!`);
  };

  const increaseQty = (id) => {
    const updated = cartItem.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setCartItems(updated);
  };

  const decreaseQty = (id) => {
    const updated = cartItem
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updated);
  };

  // wishlist functionality

  const handleAddToWishlist = (product) => {
    const exist = wishlist.find((item) => item.id === product.id);
    if (!exist) {
      setWishlist([...wishlist, product]);
      toast.success("Added to wishlist!");
    }
  };

  const value = {
    cartItem,
    setCartItems,
    isCartOpen,
    setIsCartOpen,
    handleRemoveFormCart,
    increaseQty,
    decreaseQty,
    wishlist,
    setWishlist,
    handleAddToWishlist,
    search,
    setSearch
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
