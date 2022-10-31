import React from 'react';
import { NavLink } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

 const Services = () => {
  return (
    <div style={{marginTop:70}}>


<Navbar/>

<section id="services" className="services">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fug</p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4 className="title"><NavLink to={'/'}>Lorem Ipsum</NavLink></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4 className="title"><NavLink to={'/'}>Sed ut perspiciatis</NavLink></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4 className="title"><NavLink to={'/'}>Magni Dolores</NavLink></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4 className="title"><NavLink to={'/'}>Nemo Enim</NavLink></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Services Section -->

    <!-- ======= More Services Section ======= --> */}
    <section id="more-services" className="more-services">
      <div className="container">

        <div className="row">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="card" 
            style={{ backgroundImage: "url('/img/more-services-1.jpg')"}} data-aos="fade-up" data-aos-delay="100"
            >
              <div className="card-body">
                <h5 className="card-title"><NavLink to={'/'}>Lobira Duno</NavLink></h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                <div className="read-more"><NavLink to={'/'}><i className="bi bi-arrow-right"></i> Read More</NavLink></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="card" 
            style={{ backgroundImage: 'url("/img/more-services-2.jpg")'}} data-aos="fade-up" data-aos-delay="200"
            >
              <div className="card-body">
                <h5 className="card-title"><NavLink to={'/'}>Limere Radses</NavLink></h5>
                <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</p>
                <div className="read-more"><NavLink to={'/'}><i className="bi bi-arrow-right"></i> Read More</NavLink></div>
              </div>
            </div>

          </div>
          <div className="col-md-6 d-flex align-items-stretch mt-4">
            <div className="card"
             style={{backgroundImage: 'url("/img/more-services-3.jpg")'}} data-aos="fade-up" data-aos-delay="100"
            >
              <div className="card-body">
                <h5 className="card-title"><NavLink to={'/'}>Nive Lodo</NavLink></h5>
                <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>
                <div className="read-more"><NavLink to={'/'}><i className="bi bi-arrow-right"></i> Read More</NavLink></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch mt-4">
            <div className="card"
             style={{backgroundImage: 'url("/img/more-services-4.jpg")'}} data-aos="fade-up" data-aos-delay="200"
            >
              <div className="card-body">
                <h5 className="card-title"><NavLink to={'/'}>Pale Treda</NavLink></h5>
                <p className="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.</p>
                <div className="read-more"><NavLink to={'/'}><i className="bi bi-arrow-right"></i> Read More</NavLink></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    
    <Footer/>


    </div>
  )
}
export default Services;
