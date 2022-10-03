import React, { useContext } from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import DressLogo from "../../assets/heart.png";
import "./navigation.styles.scss";
import { UserContext } from "../../Components/contexts/User";
import { CartContext } from "../../Components/contexts/Cart";
import { signOutUser } from "../../utils/firebase/Firebase";
import CartIcon from "../../Components/cartIcon/CartIcon";
import CartDropdown from "../../Components/cartDropdown/CartDropdown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div className="logo">
            <img src={DressLogo} alt="" />
          </div>
        </Link>

        <div className="links-container">
          <Link className="nav-links" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              SIGN OUT{""}
            </span>
          ) : (
            <Link className="nav-links" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
