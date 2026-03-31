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

    const value = {
        cartItem,
        setCartItems,
        isCartOpen,
        setIsCartOpen,
        handleRemoveFormCart
    }

    return (
       <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

export default CartProvider;