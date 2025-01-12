import React from "react";
import "react-toastify/dist/ReactToastify.css";

function Contact() {

  
  return (
    <>
      <div id="contact">
        <div className="container" id="Contact">
          <div className="row">
            <div className="col-md-12">
              <h2>Contact</h2>
              <div className="map-box">
                <iframe
                  title="contact-form"
                  style={{ filter: "invert(90%) grayscale(1)" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.748423387!2d72.41492502397058!3d23.02047410476304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1717402079057!5m2!1sen!2sin"
                  width="935"
                  height="450"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <h3 className="ContactForm mt-3 mb-4">Contact Form</h3>
            <form >
              <div className="input-wrapper">
                <div className="input-container">
                  <input
                    type="text"
                    name="user_name"
                    
                    id="full-name"
                    className="form-input"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="full-name" className="input-label">
                    Full Name
                  </label>
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    className="form-input"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="email" className="input-label">
                    Enter Your Email
                  </label>
                </div>
              </div>
              <div className="message-container">
                <textarea
                  name="message"
                  id="message"
                  className="form-input"
                  placeholder=" "
                  required
                ></textarea>
                <label htmlFor="message" className="input-label">
                  Your Message
                </label>
              </div>
              <button type="submit" className="form-button">
                <i className="fa-regular fa-paper-plane me-2"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
