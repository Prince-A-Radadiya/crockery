import Slider from "react-slick";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";

const sliderData = [
  {
    title: "Professional Copper Set",
    desc: "Upgrade your kitchen with 20% off our Signature Copper Series.",
    image:
      "https://images.unsplash.com/photo-1604909052743-94e838986d24",
  },
  {
    title: "Premium Cookware Collection",
    desc: "Crafted for chefs who demand perfection.",
    image:
      "https://images.unsplash.com/photo-1604909052743-94e838986d24",
  },
  {
    title: "Elite Kitchen Essentials",
    desc: "Designed for durability and performance.",
    image:
      "https://images.unsplash.com/photo-1604909052743-94e838986d24",
  },
];

const products = [
  {
    name: "Signature Chef’s Knife",
    price: "$185.00",
    rating: 4.8,
    reviews: 48,
    tag: "NEW",
    image: require('../../img/h2.jpg')
  },
  {
    name: "Ceramic Storage Set",
    price: "$64.00",
    rating: 4.6,
    reviews: 124,
    image: require('../../img/h2.jpg')
  },
  {
    name: "Heritage Cast Iron Skillet",
    price: "$89.00",
    rating: 4.9,
    reviews: 256,
    tag: "BESTSELLER",
    image: require('../../img/h2.jpg')
  },
  {
    name: "Artisan Bread Lame",
    price: "$24.00",
    rating: 4.5,
    reviews: 12,
    image: require('../../img/h2.jpg')
  },
  {
    name: "Professional Measuring Cups",
    price: "$32.00",
    rating: 4.7,
    reviews: 96,
    image: require('../../img/h2.jpg')
  },
  {
    name: "Signature Stock Pot",
    price: "$145.00",
    rating: 4.8,
    reviews: 52,
    image: require('../../img/h2.jpg')
  },
];

const Product = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="product py-5">
      <div className="container">

        {/* SLIDER */}
        <Slider {...sliderSettings} className="product-slider mb-5">
          {sliderData.map((s, i) => (
            <div className="slider-card" key={i}>
              <img src={s.image} alt={s.title} />
              <div className="slider-overlay">
                <span>{s.badge}</span>
                <h2>{s.title}</h2>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* TITLE */}
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h1 className="fw-bold">Premium Cookware</h1>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="row g-4">
          {products.map((p, i) => (
            <div className="col-lg-4 col-md-6 col-xl-3 col-sm-6" key={i}>
              <div className="product-card">

                {p.tag && <span className="product-tag">{p.tag}</span>}
                <button className="wishlist-btn"><FaRegHeart /></button>

                <div className="image-wrap">
                  <img src={p.image} alt={p.name} />
                  <button className="add-cart-btn">
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>

                <div className="card-info">
                  <div className="rating">★★★★★ <span>({p.reviews})</span></div>
                  <h4>{p.name}</h4>
                  <p>{p.sub}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <strong>{p.price}</strong>
                    <small>{p.extra}</small>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Product;
