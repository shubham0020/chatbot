import React from 'react';
import { NavLink } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

 const Contact = () => {
  return (
    <div style={{marginTop:70}}>

<Navbar/>
<section id="contact" className="contact">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Contact Us</h2>
        </div>

        <div className="row pt-5">

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-about">
              <h3>ChatBot</h3>
              <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
              <div className="social-links">
                <NavLink to={'/'} className="twitter"><i className="bi bi-twitter"></i></NavLink>
                <NavLink to={'/'} className="facebook"><i className="bi bi-facebook"></i></NavLink>
                <NavLink to={'/'} className="instagram"><i className="bi bi-instagram"></i></NavLink>
                <NavLink to={'/'} className="linkedin"><i className="bi bi-linkedin"></i></NavLink>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
            <div className="info">
              <div>
                <i className="ri-map-pin-line"></i>
                <p>A108 Adam Street<br></br>New York, NY 535022</p>
              </div>

              <div>
                <i className="ri-mail-send-line"></i>
                <p>info@example.com</p>
              </div>

              <div>
                <i className="ri-phone-line"></i>
                <p>+1 5589 55488 55</p>
              </div>

            </div>
          </div>

          <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
              </div>
              <div className="form-group">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    <Footer/>

    </div>
  )
}
export default Contact;