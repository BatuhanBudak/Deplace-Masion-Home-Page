import { FacebookLogo, InstagramLogo, ArrowUp } from "../Icon";
export default function NavDrawer({ drawerOpen }: { drawerOpen: boolean }) {
  return (
    <div
      className="nav__drawer"
      aria-hidden={!drawerOpen}
      tabIndex={drawerOpen ? 0 : -1}
      role="menu"
    >
      <div className="nav__drawer__inner">
        <div className="nav-wrap nav-col1">
          <div className="nav-text-outer">
            <div className="nav-text">tabs</div>
          </div>
          <div className="nav-line-wrap">
            <div className="nav-line"></div>
            <div className="nav-line line-overlay"></div>
          </div>
          <div className="nav-link-wrap">
            <a
              aria-label="nav-shop"
              href=""
              className="nav-link-item w-inline-block"
            >
              <h2 className="nav-link">SHOP</h2>
            </a>
            <a
              aria-label="nav-collections"
              href=""
              className="nav-link-item w-inline-block"
            >
              <h2 className="nav-link">collections</h2>
            </a>
            <a
              aria-label="nav-brand"
              href=""
              className="nav-link-item w-inline-block"
            >
              <h2 className="nav-link">about</h2>
            </a>
          </div>
          <div className="nav-footer-wrap">
            <div className="nav-f-row w-row">
              <div className="nav-f-column w-col w-col-6">
                <div className="nav-f-outer">
                  <a aria-label="nav-faq" href="" className="nav-f-link">
                    faq
                  </a>
                </div>
                <div className="nav-f-outer">
                  <a aria-label="nav-terms" href="" className="nav-f-link">
                    terms
                  </a>
                </div>
              </div>
              <div className="nav-f-column w-col w-col-6">
                <div className="nav-f-outer">
                  <a
                    aria-label="nav-returns"
                    href="/returns"
                    className="nav-f-link"
                  >
                    returns
                  </a>
                </div>
                <div className="nav-f-outer">
                  <a aria-label="nav-privacy" href="" className="nav-f-link">
                    privacy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-wrap nav-social">
          <div className="nav-footer-wrap">
            <div className="nav-f-row w-row">
              <div className="nav-f-column nav-social w-col w-col-6">
                <div className="nav-f-outer">
                  <a
                    aria-label="nav-facebook"
                    href=""
                    className="nav-social w-inline-block"
                  >
                    <FacebookLogo fill={null} classname={"nav-social-icon"} />
                  </a>
                </div>
                <div className="nav-f-outer">
                  <a
                    aria-label="nav-instagram"
                    href=""
                    className="nav-social social-r w-inline-block"
                  >
                    <InstagramLogo fill={null} classname={"nav-social-icon"} />
                  </a>
                </div>
              </div>
              <div className="nav-f-column nav-ink w-col w-col-6">
                <div className="nav-ink-tab">
                  <ArrowUp />
                  <div className="nav-f-ink">ink mode</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-wrap nav-slider">
          <div className="ns-section-2">
            <div className="ns-wrap-2">
              <a
                href="mailto:General Request?subject=info%40deplacemaison.com"
                className="ns-inner-2 w-inline-block"
              >
                <div className="ns-link-2">
                  Inquiries &nbsp;⟶ &nbsp;
                  <span className="ns-span">info@deplacemaison.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
