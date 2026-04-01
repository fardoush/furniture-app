import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

 export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartItem, setCartItems] = useState([]);

    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleRemoveFormCart = (id) => {
        setCartItems(cartItem.filter(cart => cart.id !== id));
        toast.error(`Item removed successfully!`);

    }

    const increaseQty = (id) => {
  const updated = cartItem.map(item =>
    item.id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
  setCartItems(updated);
};

const decreaseQty = (id) => {
  const updated = cartItem
    .map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter(item => item.quantity > 0);

  setCartItems(updated);
};

    const value = {
        cartItem,
        setCartItems,
        isCartOpen,
        setIsCartOpen,
        handleRemoveFormCart,
        increaseQty,
        decreaseQty

    }

    return (
       <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

export default CartProvider;