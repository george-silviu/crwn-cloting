import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { setIsCartOpen, cartItemsCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen((prev) => !prev); // toggle the value of hidden

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
