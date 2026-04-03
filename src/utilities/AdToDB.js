const getStoredCart = () => {
  try {
    const storedCart = localStorage.getItem("cartList");
    const parsed = storedCart ? JSON.parse(storedCart) : [];

    // invalid data remove
    return parsed.filter(
      (item) => item && item.id && item.price && item.quantity
    );
  } catch {
    return [];
  }
};

const saveCart = (cart) =>{
    localStorage.setItem("cartList", JSON.stringify(cart));
}


export {getStoredCart, saveCart};
