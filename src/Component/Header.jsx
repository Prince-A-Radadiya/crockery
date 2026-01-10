import { useState } from "react";
import { TbToolsKitchen3 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="head">
          <div className="row align-items-center">

            {/* LOGO */}
            <div className="col-6 col-lg-3 d-flex align-items-center">
              <div className="logo d-flex align-items-center">
                <div className="outer-logo me-1">
                  <TbToolsKitchen3 size={25} />
                </div>
                Bhavin.
              </div>
            </div>

            {/* DESKTOP MENU */}
            <div className="col-lg-6 d-none d-lg-flex justify-content-center">
              <nav>
                <ul className="d-flex m-0">
                  {["/", "/product", "/contact", "/about", "/faq", "/track"].map(
                    (path, i) => (
                      <li key={i} className="mx-3 text-capitalize">
                        <NavLink className="text-decoration-none c-link" to={path}>
                          {path === "/" ? "home" : path.replace("/", "")}
                        </NavLink>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>

            {/* ICONS */}
            <div className="col-6 col-lg-3 d-flex align-items-center justify-content-end">
              <ul className="d-flex m-0 align-items-center">
                <li className="me-2 d-none d-lg-block">
                  <NavLink to="/wishlist" className="c-icon"><FaRegHeart size={18} /></NavLink>
                </li>
                <li className="mx-2 d-none d-lg-block">
                  <NavLink to="/login-register" className="c-icon"><FaRegUser size={18} /></NavLink>
                </li>
                <li className="ms-2 d-none d-lg-block">
                  <NavLink to="/cart" className="c-icon"><GrCart size={18} /></NavLink>
                </li>

                {/* MOBILE MENU ICON */}
                <li className="d-lg-none">
                  <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
                  </button>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""} py-0`}>
        <ul>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/">Home</NavLink></li>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/product">Products</NavLink></li>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/contact">Contact</NavLink></li>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/about">About</NavLink></li>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/faq">FAQ</NavLink></li>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/track-order">Track Order</NavLink></li>
          <hr />
          <li><NavLink onClick={() => setMenuOpen(false)} to="/wishlist">Wishlist</NavLink></li>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/login-register">Account</NavLink></li>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/cart">Cart</NavLink></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
