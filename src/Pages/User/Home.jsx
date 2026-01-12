import { RiTruckLine } from "react-icons/ri";
import { MdOutlineVerified, MdOutlineEco } from "react-icons/md";
import { FiArrowUpRight, FiShoppingCart, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Home = () => {

    const categories = [
        {
            title: "Professional Sipper",
            label: "COLLECTION",
            image: require('../../img/h6.jpg')
        },
        {
            title: "Master Bottle",
            label: "Limited",
            image: require('../../img/h7.jpg')
        },
        {
            title: "Bubble Jug",
            label: "Best",
            image: require('../../img/h8.jpg')
        },
    ];
    
    const products = [
        {
            title: "borosilicate bottle",
            desc: "50ML",
            price: "$125.00",
            badge: "NEW",
            image: require('../../img/h1.jpg')
        },
        {
            title: "duck hexa jug",
            desc: "glass material",
            price: "$189.00",
            image: require('../../img/h2.jpg')
        },
        {
            title: "dark blue sipper",
            desc: "450ML",
            price: "$349.00",
            image: require('../../img/h3.jpg')
        },
        {
            title: "compartment lunchbox",
            desc: "3 section-box",
            price: "$210.00",
            badge: "LIMITED",
            image: require('../../img/h4.jpg')
        },
    ];

    return (
        <div className="home">
            <section className="bg-img py-4">
                <div className="container">
                    <div className="hero-section">
                        <div className="hero-content">

                            <span className="hero-badge text-uppercase">Premium Kitchenware</span>

                            <h1>
                                Elevate Your <br />
                                <span className="highlight">Culinary</span> <br />
                                Journey
                            </h1>

                            <p>
                                Professional-grade tools designed for the modern home chef.
                                Experience precision, durability, and elegance in every meal.
                            </p>

                            <div className="hero-buttons">
                                <button className="animated-btn">
                                    <span>Shop the Collection</span>
                                </button>

                                <button className="btn-secondary-custom">
                                    View Lookbook
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="sec-2">
                <div className="container">
                    <div className="row c-border gy-3">
                        <div className="col-12 col-lg d-flex align-items-center gap-4">
                            <div className="left logo">
                                <RiTruckLine size={22} />
                            </div>
                            <div className="right">
                                <p className="mb-0 text-capitalize">free global shipping</p>
                                <span className="mb-0 text-capitalize">on all order over $150.00</span>
                            </div>
                        </div>
                        <div className="col-12 col-lg d-flex align-items-center gap-4">
                            <div className="left logo">
                                <MdOutlineVerified size={22} />
                            </div>
                            <div className="right">
                                <p className="mb-0 text-capitalize">free global shipping</p>
                                <span className="mb-0 text-capitalize">on all order over $150.00</span>
                            </div>
                        </div>
                        <div className="col-12 col-lg d-flex align-items-center gap-4">
                            <div className="left logo">
                                <MdOutlineEco size={22} />
                            </div>
                            <div className="right">
                                <p className="mb-0 text-capitalize">free global shipping</p>
                                <span className="mb-0 text-capitalize">on all order over $150.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="category-section">
                <div className="container">
                    <div className="category-header d-flex justify-content-between align-items-center">
                        <div>
                            <h2>Shop by Category</h2>
                        </div>

                        <button className="view-all-btn">
                            View All Categories
                            <FiArrowUpRight />
                        </button>
                    </div>

                    <div className="row g-4 mt-2">
                        {categories.map((cat, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="category-card">
                                    <img src={cat.image} alt={cat.title} />

                                    <div className="category-overlay">
                                        <span className="text-uppercase">{cat.label}</span>
                                        <h3 className="text-capitalize">{cat.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="arrivals-section">
                <div className="container">
                    <div className="arrivals-header">
                        <h2>New Arrivals</h2>

                        <div className="nav-arrows d-flex">
                            <button><FiChevronLeft /></button>
                            <button><FiChevronRight /></button>
                        </div>
                    </div>

                    <div className="row g-4">
                        {products.map((item, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div className="arrival-card">

                                    {item.badge && (
                                        <span className={`badge ${item.badge.toLowerCase()}`}>
                                            {item.badge}
                                        </span>
                                    )}

                                    <div className="image-wrap">
                                        <img src={item.image} alt={item.title} />

                                        <button className="add-cart-btn">
                                            <FiShoppingCart />
                                            Add to Cart
                                        </button>
                                    </div>

                                    <div className="arrival-info">
                                        <h4 className="text-uppercase">{item.title}</h4>
                                        <p className="text-capitalize">{item.desc}</p>
                                        <span className="price">{item.price}</span>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home
