import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { logoutUser } from "../../utils/firebase.utils";

import {
  NavigationContaier,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext); // get the currentUser from the UserContext; this triggers a re-render when the currentUser changes
  const { isCartOpen } = useContext(CartContext); // get the hidden value from the CartContext; this triggers a re-render when the hidden value changes

  return (
    <Fragment>
      <NavigationContaier>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={logoutUser}>
              Logout
            </NavLink>
          ) : (
            <NavLink to="/auth">Login</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContaier>
      <Outlet /> {/*This is where the child components will be rendered */}
    </Fragment>
  );
};

export default Navigation;
