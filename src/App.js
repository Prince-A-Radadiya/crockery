import './App.css';
import { Routes, Route } from 'react-router-dom';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// REACT SLICK
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Layouts
import UserLayout from './Layout/UserLayout';
import AdminLayout from './Layout/AdminLayout';

// Pages
import Home from './Pages/User/Home';
import Product from './Pages/User/Product';
import Contact from './Pages/User/Contact';
import About from './Pages/User/About';
import Faq from './Pages/User/Faq';
import Track from './Pages/User/Track';
import Wishlist from './Pages/User/Wishlist';
import Account from './Pages/User/Account';
import Cart from './Pages/User/Cart';

function App() {
  return (
    <Routes>

      {/* USER WEBSITE WITH HEADER & FOOTER */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/track" element={<Track />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Route>

      {/* AUTH PAGE (NO HEADER / FOOTER) */}
      <Route path="/login-register" element={<Account />} />

    </Routes>
  );
}

export default App;
