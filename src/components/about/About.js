import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const About = () => {
  return (
    <div style={{marginTop:70}}>

<Navbar/>
<section id="about" className="about" style={{ backgroundImage:"url('./hero-bg.png')",  backgroundSize:'small', backgroundPositionX:'40%' }}>
      <div className="container">

        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <div className="row content">
          <div className="row">
                    
					<div className="col-md-6 col-sm-6 col-xs-12  mt-5">
						<div className="choose-wrapper">
							<div className="choose-all">
								<div className="single-choose wow fadeInUp" data-wow-delay="0.3s" 
                // style={{visibility: visible, animationDelay: 0.3, animationName: fadeInUp}}
                >
								   <NavLink className="choose-icon" href={'/'}><i className="flaticon-026-idea"></i></NavLink>
									<div className="choose-content">
										<h4>Innovative ideas for next world</h4>
										<p>Our independent consultants, free from the internal demands of traditional firms, can focus.</p>
									</div>
								</div>
								{/* <!-- Start services --> */}
								<div className="single-choose wow fadeInUp" data-wow-delay="0.5s"
                //  style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;"
                 >
									<NavLink className="choose-icon" href={'/'}><i className="flaticon-003-analytics"></i></NavLink>
									<div className="choose-content">
										<h4>Research artificial intelligence</h4>
										<p>Our independent consultants, free from the internal demands of traditional firms, can focus.</p>
									</div>
								</div>
								{/* <!-- Start services --> */}
								<div className="single-choose last-item hidden-sm wow fadeInUp" data-wow-delay="0.7s"
                // style="visibility: visible; animation-delay: 0.7s; animation-name: fadeInUp;"
                 >
									<NavLink className="choose-icon" href={'/'}><i className="flaticon-132-web"></i></NavLink>
									<div className="choose-content">
										<h4>Working in next world technology</h4>
										<p>Our independent consultants, free from the internal demands of traditional firms, can focus.</p>
									</div>
								</div>
							</div>
						</div>
				    </div>
                    {/* <!-- End Column --> 
							<!-- Start Column --> */}
					<div className="col-md-6 col-sm-6 col-xs-12 aos-animate">
                        <div className="choose-image">
                            <img src="/img/ab.png" className="img-fluid" alt="Choose Imagess"/>
                        </div>
                    </div>
					{/* <!-- Start Column --> */}
				</div>
        </div>

      </div>
    </section>

{/*<!-- ======= Counts Section ======= --> */}
    <section id="counts" className="counts">
      <div className="container">

        <div className="row">
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
            <img src="/img/counts-img.svg" alt="" className="img-fluid"/>
          </div>

          <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
            <div className="content d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-emoji-smile"></i>
                    <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-journal-richtext"></i>
                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-clock"></i>
                    <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-award"></i>
                    <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                    <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End .content--> */}
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Counts Section -->*/}

    <Footer/>

    </div>
  )
}
export default About;