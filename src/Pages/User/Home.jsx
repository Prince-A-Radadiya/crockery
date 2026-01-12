import { RiTruckLine } from "react-icons/ri";
import { MdOutlineVerified, MdOutlineEco } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

const Home = () => {

    const categories = [
        {
            title: "Professional Cookware",
            label: "COLLECTION",
            image: require('../../img/h6.png')
        },
        {
            title: "Precision Knives",
            label: "FORGED",
            image: require('../../img/h7.png')
        },
        {
            title: "Modern Appliances",
            label: "SMART TECH",
            image: require('../../img/h8.png')
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
                            <p>Find everything you need for your kitchen masterpiece</p>
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
                                        <span>{cat.label}</span>
                                        <h3>{cat.title}</h3>
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
