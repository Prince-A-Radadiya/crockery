import {
  FiCheckCircle,
  FiDroplet,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";

const commitments = [
  {
    icon: <FiCheckCircle />,
    title: "Superior Quality",
    desc:
      "Rigorous testing ensures every pan and knife meets professional standards for durability and performance.",
  },
  {
    icon: <FiDroplet />,
    title: "Sustainable Sourcing",
    desc:
      "We prioritize eco-friendly coatings, recycled metals, and ethically sourced materials.",
  },
  {
    icon: <FiClock />,
    title: "Timeless Design",
    desc:
      "Minimalist aesthetics that look beautiful on your counter and feel perfectly balanced in your hands.",
  },
];

const materials = [
  {
    title: "Forged Carbon Steel",
    desc: "Hand-hammered for extreme durability and heat retention.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-bf4H63B49Q20DYQylEJNhx8Jg-N4IMMa9jrb8-_UbQ9Hnq64Oof0nlVVk3drMcoYQkY9AOzC3cnntPU2YONuYMlwDB_R-uwaOJeCFs9C2BV_7jSY_Uogn3FFLojcyYyR2RYzrDf1DGJw0wXAHuidnVKWZAkarowHEXJ0EIGZDh2Rw0AM-bs0JnER4D-3-LivfRydiO7G-xAnND0bVshZV09_mN_X-AZd-vliedW_OoKmfkpsAUfSAb8AbiRZyeYotJugvTMur_c",
  },
  {
    title: "Sustainable Walnut",
    desc: "FSC-certified timber, hand-oiled for a silky ergonomic grip.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqifEcSCn812czU6Wlh3hqxFirfxJD8vQMu2SPVYB1gA41rlLEMj7a6uOewhbt-62YghhRH3uiOaunk4lfD75tTsT88Z-0ViaWc2lvBKvvugTDHZOADB3H59LhUJl5Wpx5wv_gZtmjhqLRtzpodsKynEYTtEUsqzIII10f-lGPJK1CgMRPirehAYdJuA-JGTXmmBKJOg6FNjOcjZRtTkCzJqNkpC87iutkb__4PRPmG3Wu3sBEA4E25WUASY6yVQEOgyktSCrqrx4",
  },
  {
    title: "Professional Ceramic",
    desc: "Non-toxic, PFAS-free surface for naturally slick performance.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3aaZZw4pdbetzpuvStIerQNSodC_eVZJCqUMlMmOMLny1oXVQ-O66ehY_nfD0ckMZN_4ubUrWhCLj4g4Ti2Gm7Ly40dvSrcwjMf7FOFAxqDktm8jH2ThAGY0CggnvV4MvFgXFgvnXDBnjNh9Gyr_VSXluJh2wfzw3K00sU3-eI3LGNvecOvLG2ZvgF2a79Qb2XsYPJGX5y-5YEivtIchJWjsExIZtM00HkFJvvQ6qhe3zTXPVAjYoyEGfoXPs6lgFuc4nhVjklsE",
  },
];

const About = () => {
  return (
    <section className="about">
      <div className="container">

        {/* =========================
            OUR COMMITMENT
        ========================== */}
        <div className="commitment text-center">
          <h2>Our Commitment to Excellence</h2>
          <p>
            Every piece we create is a balance of aesthetic beauty and
            functional durability.
          </p>

          <div className="row g-4 mt-4">
            {commitments.map((item, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="commitment-card">
                  <div className="icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================
            MATERIALS
        ========================== */}
        <div className="materials">
          <h2 className="text-center">Our Signature Materials</h2>
          <p className="text-center subtitle">
            The secret to extraordinary cooking starts with the chemistry
            of our materials.
          </p>

          <div className="row g-4 mt-4">
            {materials.map((mat, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="material-card">
                  <div className="material-image">
                    <img src={mat.image} alt={mat.title} />
                  </div>

                  <h4>{mat.title}</h4>
                  <p>{mat.desc}</p>
                </div>

              </div>
            ))}
          </div>

          <div className="text-center mt-4 process-btn-wrap">
            <button className="outline-btn">
              Learn About Our Process <FiArrowRight />
            </button>
          </div>

        </div>

        {/* =========================
            CTA
        ========================== */}
        <div className="about-cta text-center">
          <h2>Ready to upgrade your kitchen?</h2>
          <p>
            Join over 50,000 home cooks who have chosen tools that last a lifetime.
          </p>

          <div className="cta-buttons">
            <button className="primary-btn">Shop All Products</button>
            <button className="secondary-btn">View Collections</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
