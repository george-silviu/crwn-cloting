import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; //interact with redux store

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { signOutStart } from "../../store/user/user.action";

import {
  NavigationContaier,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const dispatch = useDispatch();

  const handleLogout = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContaier>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={handleLogout}>
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
