import './App.css';
import { Routes, Route } from 'react-router-dom';

// BOOTSTRAP FILE
import 'bootstrap/dist/css/bootstrap.min.css';

// COMPONENT
import Header from './Component/Header';

// USER PAGES
import Home from './Pages/User/Home';
import Product from './Pages/User/Product';
import Contact from './Pages/User/Contact';
import About from './Pages/User/About';
import Faq from './Pages/User/Faq';
import Track from './Pages/User/Track';
import Wishlist from './Pages/User/Wishlist';
import Account from './Pages/User/Account';
import Cart from './Pages/User/Cart';
import Footer from './Component/Footer';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/track-order" element={<Track />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login-register" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
