import { useContext } from "react";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const HEADER_BLOCKS = [
  { header: "Product" },
  { header: "Description" },
  { header: "Quantiy" },
  { header: "Price" },
  { header: "Remove" },
];

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header ">
        {HEADER_BLOCKS.map((block, index) => {
          const { header } = block;
          return (
            <div key={index} className="header-block">
              <span>{header}</span>
            </div>
          );
        })}
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total: {total} €</span>
    </div>
  );
};

export default Checkout;
