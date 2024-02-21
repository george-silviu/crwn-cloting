import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { logoutUser } from "../../utils/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext); // get the currentUser from the UserContext; this triggers a re-render when the currentUser changes
  const { isCartOpen } = useContext(CartContext); // get the hidden value from the CartContext; this triggers a re-render when the hidden value changes

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={logoutUser}>
              Logout
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Login
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet /> {/*This is where the child components will be rendered */}
    </Fragment>
  );
};

export default Navigation;
