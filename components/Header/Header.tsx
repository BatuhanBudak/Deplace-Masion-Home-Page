import { useEffect, useRef, useState } from "react";
import useToggle from "../../hooks/useToggle";
import NavDrawer from "./NavDrawer";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

export default function Header() {
  const [drawerOpen, toggleDrawer] = useToggle();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      let currentScroll = window.scrollY;

      //Scroll Down
      if (currentScroll > lastScrollY) {
        document.body.classList.remove("scroll-up");
        document.body.classList.add("scroll-down");
      }
      //Scroll Up
      else if (currentScroll < lastScrollY) {
        document.body.classList.remove("scroll-down");
        document.body.classList.add("scroll-up");
      }
      setLastScrollY(currentScroll);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add("nav-open");
    } else if (!drawerOpen) {
      document.body.classList.remove("nav-open");
    }
  }, [drawerOpen]);

  return (
    <header>
      <a href="#content" className="visually-hidden skip-nav">
        Skip Navigation
      </a>

      <nav
        className={`header header-mobile ${drawerOpen ? "drawer-open" : ""}`}
      >
        <NavMobile toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />

        <NavDrawer drawerOpen={drawerOpen} />
      </nav>
      <nav className="header">
        <NavDesktop />
      </nav>
    </header>
  );
}
