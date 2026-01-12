import {
    FiMapPin,
    FiPhone,
    FiMail,
} from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">

                <div className="row footer-top gy-3">

                    <div className="col-lg-4 col-md-6 footer-brand">
                        <div className="logo d-flex align-items-center">
                            <div className="outer-logo me-2">
                                <TbToolsKitchen3 size={22} />
                            </div>
                            Bhavin.
                        </div>

                        <p>
                            We believe every home chef deserves professional-grade tools.
                            Our products are crafted with precision, passion, and the
                            finest materials available.
                        </p>

                        <div className="social-icons">
                            <Link to='https://www.instagram.com/b_chikhaliya31?igsh=a284OHd4ZmY0OG43'>
                                <span><FaInstagram size={17} /></span>
                            </Link>
                            <Link to='https://api.whatsapp.com/send?phone=916354592098'>
                                <span><FaWhatsapp size={17} /></span>
                            </Link>
                            <Link to='https://www.facebook.com/share/1aafyAQJFC/'>
                                <span><FaFacebookF size={17} /></span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 footer-links">
                        <h4>Shop</h4>
                        <ul>
                            <li>Cookware Sets</li>
                            <li>Knives & Cutlery</li>
                            <li>Bakeware</li>
                            <li>Appliances</li>
                            <li>New Arrivals</li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Support</h4>
                        <ul>
                            <li>Shipping Policy</li>
                            <li>Returns & Exchanges</li>
                            <li>Care & Maintenance</li>
                            <li>Warranty Information</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-contact">
                        <h4>Contact</h4>

                        <p>
                            <FiMapPin />
                            123 Culinary Way, Suite 400
                            <br />
                            San Francisco, CA 94103
                        </p>

                        <p>
                            <FiPhone />
                            +91 63545 92098
                        </p>

                        <p>
                            <FiMail />
                            bhavinchikhaliya063@gmail.com
                        </p>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p className="mb-0">
                        © 2024 Bhavin's Premium Kitchenware. All rights reserved.
                    </p>

                    <div className="bottom-links">
                        <span className="me-2">Privacy Policy</span>
                        <span className="mx-2">Terms of Service</span>
                        <span className="ms-2">Sitemap</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
