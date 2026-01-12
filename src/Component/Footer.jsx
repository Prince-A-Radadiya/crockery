import {
    FiMapPin,
    FiPhone,
    FiMail,
    FiShare2,
    FiDribbble,
    FiPlay,
} from "react-icons/fi";
import { TbToolsKitchen3 } from "react-icons/tb";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">

                <div className="row footer-top">

                    {/* BRAND */}
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
                            <span><FiShare2 /></span>
                            <span><FiDribbble /></span>
                            <span><FiPlay /></span>
                        </div>
                    </div>

                    {/* SHOP */}
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

                    {/* SUPPORT */}
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

                    {/* CONTACT */}
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
                            +1 (800) COOK-ART
                        </p>

                        <p>
                            <FiMail />
                            hello@culinaryart.com
                        </p>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="footer-bottom">
                    <p>
                        © 2024 CulinaryArt Premium Kitchenware. All rights reserved.
                    </p>

                    <div className="bottom-links">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Sitemap</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
