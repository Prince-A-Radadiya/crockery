import { useEffect, useState } from "react";
import { TbToolsKitchen3 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setMenuOpen(false); // close mobile menu on scroll
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      {/* TOP BAR */}
      <div className={`main-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="row align-items-center">

            {/* LOGO */}
            <div className="col-6 col-lg-3 d-flex align-items-center">
              <div className="logo d-flex align-items-center">
                <div className="outer-logo me-2">
                  <TbToolsKitchen3 size={22} />
                </div>
                Bhavin.
              </div>
            </div>

            {/* DESKTOP NAV */}
            <div className="col-lg-6 d-none d-lg-flex justify-content-center">
              <ul className="d-flex">
                {["/", "/product", "/contact", "/about", "/faq", "/track"].map(
                  (path, i) => (
                    <li key={i} className="mx-3 text-capitalize">
                      <NavLink to={path} className="c-link">
                        {path === "/" ? "home" : path.replace("/", "")}
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* ICONS */}
            <div className="col-6 col-lg-3 d-flex justify-content-end align-items-center">
              <div className="d-none d-lg-flex">
                <NavLink to="/wishlist" className="c-icon me-3"><FaRegHeart /></NavLink>
                <NavLink to="/login-register" className="c-icon me-3"><FaRegUser /></NavLink>
                <NavLink to="/cart" className="c-icon"><GrCart /></NavLink>
              </div>

              {/* MOBILE MENU ICON */}
              <button className="menu-btn d-lg-none" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="container py-3">
          <ul>
            <li><NavLink onClick={() => setMenuOpen(false)} to="/">Home</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to="/product">Products</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to="/contact">Contact</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to="/about">About</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to="/faq">FAQ</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to="/track">Track</NavLink></li>

            <hr />

            <li><NavLink onClick={() => setMenuOpen(false)} to="/wishlist">Wishlist</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to="/login-register">Account</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to="/cart">Cart</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
