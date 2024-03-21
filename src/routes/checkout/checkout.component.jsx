import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

import "./checkout.styles.scss";

const HEADER_BLOCKS = [
  { header: "Product" },
  { header: "Description" },
  { header: "Quantiy" },
  { header: "Price" },
  { header: "Remove" },
];

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
      <span className="total">Total: ${cartTotal}</span>

      <PaymentForm />
    </div>
  );
};

export default Checkout;
