import { LogoVertical } from "../Icon";

export default function NavDesktop() {
  return (
    <div className="nav__menu">
      <div className="header-wrap h-left">
        <a
          aria-label="header-logo"
          className="header-logo w-inline-block w--current"
        >
          <div className="logo-wrap">
            <div className="logo-inner">
              <LogoVertical />
              <LogoVertical />
            </div>
          </div>
        </a>
      </div>
      <div className="header-wrap h-right">
        <div className="w-commerce-commercecartwrapper">
          <a
            href="#"
            className="w-commerce-commercecartopenlink cart-button w-inline-block"
          >
            <div className="cart-wrap">
              <div className="cart-inner">
                <div className="cart-text ct-face w-inline-block">Cart</div>
                <div className="cart-text ct-side w-inline-block">Cart</div>
              </div>
            </div>
            <div className="w-commerce-commercecartopenlinkcount cart-quantity">
              0
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
