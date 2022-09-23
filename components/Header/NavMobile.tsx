import React from "react";
import { HeaderLogoBlack, HeaderLogoWhite } from "../Icon";

export default function NavMobile({ toggleDrawer, drawerOpen }) {
  return (
    <div className="nav__mobile">
      <a className="nav__mobile__icon" href="">
        <HeaderLogoBlack />
        <HeaderLogoWhite />
      </a>

      <button
        type="button"
        className="nav__toggle"
        aria-expanded={drawerOpen}
        aria-controls="mobile-nav-primary"
        aria-haspopup="menu"
        onClick={() => {
          toggleDrawer();
        }}
      >
        <div className="nav__toggle__button left"></div>
        <div className="nav__toggle__button"></div>
        <div className="nav__toggle__button right"></div>
        <span className="visually-hidden" aria-hidden={true}>
          Toggle Navigation
        </span>
      </button>

      <div className="nav__mobile__cart__container">
        <span>CART</span>
        <span>0</span>
      </div>
    </div>
  );
}
