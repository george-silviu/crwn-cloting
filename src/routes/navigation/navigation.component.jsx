import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { logoutUser } from "../../utils/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext); // get the currentUser from the UserContext; this triggers a re-render when the currentUser changes

  const handleLogout = async () => {
    await logoutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={handleLogout}>
              Logout
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet /> {/*This is where the child components will be rendered */}
    </Fragment>
  );
};

export default Navigation;
