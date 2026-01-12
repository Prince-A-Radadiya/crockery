import { IoSendOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">

        {/* Title */}
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Have a question about our cookware or need help with an order?
          Our team of culinary experts is here to help you create magic in your kitchen.
        </p>

        <div className="row g-5">

          {/* FORM */}
          <div className="col-lg-7">
            <div className="contact-card">
              <h3>Send us a Message</h3>

              <div className="row g-3">
                <div className="col-md-6">
                  <label>First Name</label>
                  <input type="text" placeholder="e.g. Julia" />
                </div>

                <div className="col-md-6">
                  <label>Last Name</label>
                  <input type="text" placeholder="e.g. Child" />
                </div>

                <div className="col-12">
                  <label>Email Address</label>
                  <input type="email" placeholder="julia@example.com" />
                </div>

                <div className="col-12">
                  <label>Message</label>
                  <textarea placeholder="How can we help you?"></textarea>
                </div>

                <div className="col-12">
                  <button className="send-btn">
                    Send Message <IoSendOutline className="c-icon"  />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* INFO */}
          <div className="col-lg-5">
            <div className="contact-info">
              <div className="info-item">
                <div className="icon"><FiMapPin  /></div>
                <div>
                  <h4>Visit Our Showroom</h4>
                  <p>
                    123 Culinary Way, Gastronomy District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon"><IoIosCall /></div>
                <div>
                  <h4>Call Us</h4>
                  <p>
                    +91 63 54 59 20 98<br />
                    Mon–Fri, 9AM – 6PM EST
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon"><FaRegEnvelope  /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>
                    bhavinchikhaliya063<br />
                    hello@kitchenwareco.com
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
