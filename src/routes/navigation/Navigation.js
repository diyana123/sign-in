import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import DressLogo from "../../assets/heart.png";
import "./navigation.styles.scss";

const Navigation = () => {
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

          <Link className="nav-links" to="/auth">
            SIGN IN
          </Link>
          <Link className="nav-links" to="/">
            blehh
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
