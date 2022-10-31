import React from 'react';
import { NavLink } from 'react-router-dom';
import Testimonial from "./Testimonial";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { SocialIcon } from 'react-social-icons';
import { FaFacebookMessenger, FaTelegramPlane,FaEnvelope } from 'react-icons/fa'; 

const Home = () => {
  return (
    <div>
      

      <Navbar/>


      {/* scroll 1 */}
      <section id="hero" className="d-flex align-items-center">

        <div className="container pt-5">
          <div className="row pt-5">

            <div className="col-lg-6 order-1 order-lg-1 hero-img pt-5 pb-5" data-aos="fade-left" data-aos-delay="200">
              <img src="/img/hero-img.png" className="img-fluid animated" alt="" />
            </div>
            <div className="col-lg-6 p-5 pt-5 pt-lg-0 order-2 order-lg-2 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up"><span>API-driven customer</span><br/><span>service at scale</span></h1>
              <h5 data-aos="fade-up" data-aos-delay="400" className="pt-5"><span>SimpliBot powers multilingual conversations and trusted global communications to connect you with.</span> <br/><br/>
              <span>Because it allows you to manage informational and transactional dialog, empowering your support services across demographics is easy.</span></h5><br/>
              <div data-aos="fade-up" data-aos-delay="800">
                <NavLink to={'/about'} className="btn-get-started scrollto">Sign up and get started now</NavLink>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* scroll 2  */}

      <div id="hero" className='container pt-5'>
            
            <h1 data-aos="fade-up" className=' justify-content-center'><center>Pick your customer's favourite social messenger</center></h1>
           
      <section  className="d-flex align-items-center">

        <div className="container ">
            
          <div className="row">
            
          <h1> 
          
          <i style={{ fontSize:'12px',paddingLeft:'10%'}}><SocialIcon url="https://www.whatsapp.com" /></i>

          <i style={{color:'blue', paddingLeft:'10%',fontSize:48}}><FaFacebookMessenger/></i>
          <i style={{ paddingLeft:'10%', fontSize:'12px'}}><SocialIcon url="https://www.wechat.com" /></i>
          <i style={{ color:'#0dcaf0',paddingLeft:'10%',fontSize:48}}><FaTelegramPlane /></i>
          <i style={{ paddingLeft:'10%', fontSize:'12px'}}><SocialIcon url="https://www.instagram.com" /></i>
          <i style={{ color:'green', paddingLeft:'10%',fontSize:48}}><FaEnvelope/></i>
          
          </h1>
             <h5 data-aos="fade-up" data-aos-delay="400" className="pt-5"><span>And build your own personal relationalships
             at every step of their journey. Leverage the power of conversational AI to create personal journeys, deliver 1:1
             messenges that exceed expectations. </span> <br/><br/>
              </h5>
              <div data-aos="fade-up" data-aos-delay="800">
                <div><NavLink to={'/about'} className="btn-get-started scrollto">Put your service manual to work</NavLink></div>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <div><NavLink to={'/about'} className="btn-get-started scrollto">Learn more</NavLink></div>
                
              </div>
            </div>

          
        </div>

      </section>

      <h1 data-aos="fade-up" className='justify-content-center p-3'>Discover APIs for developer Operations to integrate with channels</h1>
      <h5 data-aos="fade-up" data-aos-delay="400" className="justify-content-center pt-5 p-3"><span>Quickly intrgrate powerful APIs to support your solutions for SMS, messaging, voice notes, videos and emails through our speech-to-text engine, Sodium. </span> 
              </h5>

      </div>
      <br/><br/>
      {/* scroll 3 */}
      <div className='pt-5 mt-5'>
      <section id="hero" className="d-flex align-items-center mobtab">

        <div className="container  pt-5">
          <div className="row pt-5 mt-5">
            <div className='mobile-res'></div>
            <div className="col-lg-5 order-1 order-lg-1 hero-img pt-5 pb-5" data-aos="fade-left" data-aos-delay="200">
              <img src="/img/hero-2.png" className="img-fluid pt-5" alt="" />
            </div>

            <div className="col-lg-2 p-5 pt-5 pt-lg-0 order-2 order-lg-2 d-flex flex-column justify-content-center">
                <NavLink to={'/about'} className="btn btn-primary">Messaging</NavLink>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><NavLink to={'/about'} className="btn btn-primary">Voice</NavLink>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><NavLink to={'/about'} className="btn btn-primary">Telecalling</NavLink>
            </div>

            <div className="col-lg-5 p-5 pt-5 pt-lg-0 order-2 order-lg-2 d-flex flex-column justify-content-center">
              
              <h6 data-aos="fade-up" data-aos-delay="400" ><span>Automate your customer experience by combining any digital channel, first party customer data, and globally based data centers to support you at scale .</span> <br/><br/>
              <span>Because it allows you to manage informational and transactional dialog, empowering your support services across demographics is easy.</span></h6><br/>
              <div data-aos="fade-up" data-aos-delay="800">
                <NavLink to={'/about'} className="btn-service  scrollto" style={{ backgroundColor: 'rgb(53 203 107)', fontWeight:600}}>End2End Encrypted</NavLink>

                <br/><br/>

                <NavLink to={'/about'} className="btn-service  scrollto" style={{ backgroundColor: 'rgb(53 203 107)', fontWeight:600}}>5G Intelligent Service Opertaions</NavLink>
              </div>
            </div>

          </div>
        </div>
        

      </section>
      
      <div className='container ' id='hero'>
      <h1 data-aos="fade-up" className='justify-content-center mobtab2'>Support operations helpdesk </h1>
      <section id="services" className="services">
      <div className="row ">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <img src="/img/simplibot.png" className="img-fluid pt-4 pb-2" alt="" />
              <h2 className="title">Simplibot</h2>
              <p className="description">Chatbot delivery platform to support omni-channel communications.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <img src="/img/simplitalk.png" className="img-fluid pt-4 pb-3" alt=""  />
              <h2 className="title">Simplitalk</h2>
              <p className="description">Programmable contact center to manage connectivity with billions of devices.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
            <img src="/img/Eywa.png" className="img-fluid pt-2 pb-3" alt="Eywa"  />
              <h2 className="title">Eywa</h2>
              <p className="description">Plug-and-play mental health chat module to boost ogranisational Productivity.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <img src="/img/Moss-ai.png" className="img-fluid pt-2 pb-3" alt="Moss.ai"  />
              <h2 className="title">Moss.ai</h2>
              <p className="description">Transcribe and diarize phonics or 'whole language'.</p>
            </div>
          </div>

        </div>
        </section>
      </div>
    </div>

      {/* <!-- End More Services Section -->

<!-- ======= Features Section ======= --> */}
      <section id="features" className="features feature-mob">
        <div className="container">

          <div className="section-title" data-aos="fade-up">
            <h2>Features</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-3 col-md-4">
              <div className="icon-box">
                <i className="ri-store-line" style={{ color: '#ffbb2c' }}></i>
                <h3><NavLink to={'/'}>Lorem Ipsum</NavLink></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="ri-bar-chart-box-line" style={{ color: '#5578ff' }}></i>
                <h3><NavLink to={'/'}>Dolor Sitema</NavLink></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="ri-calendar-todo-line" style={{ color: '#e80368' }}></i>
                <h3><NavLink to={'/'}>Sed perspiciatis</NavLink></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <i className="ri-paint-brush-line" style={{ color: '#e361ff' }}></i>
                <h3><NavLink to={'/'}>Magni Dolores</NavLink></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-database-2-line" style={{ color: '#47aeff' }}></i>
                <h3><NavLink to={'/'}>Nemo Enim</NavLink></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-gradienter-line" style={{ color: '#ffa76e' }}></i>
                <h3><NavLink to={'/'}>Eiusmod Tempor</NavLink></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-file-list-3-line" style={{ color: '#11dbcf' }}></i>
                <h3><NavLink to={'/'}>Midela Teren</NavLink></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-price-tag-2-line" style={{ color: '#4233ff' }}></i>
                <h3><NavLink to={'/'}>Pira Neve</NavLink></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-anchor-line" style={{ color: '#b2904f' }}></i>
                <h3><NavLink to={'/'}>Dirada Pack</NavLink></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-disc-line" style={{ color: '#b20969' }}></i>
                <h3><NavLink to={'/'}>Moton Ideal</NavLink></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-base-station-line" style={{ color: '#ff5828' }}></i>
                <h3><NavLink to={'/'}>Verdo Park</NavLink></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-fingerprint-line" style={{ color: '#29cc61' }}></i>
                <h3><NavLink to={'/'}>Flavor Nivelanda</NavLink></h3>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* <!-- End Features Section -->

<!-- ======= Testimonials Section ======= --> */}


      {/* <!-- End Portfolio Section -->

<!-- ======= Team Section ======= --> */}
      <section id="team" className="team section-bg">
        <div className="container">

          <div className="section-title" data-aos="fade-up">
            <h2>Team</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
          </div>

          <div className="row">

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay="100">
                <div className="member-img">
                  <img src="/img/team/team-1.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <NavLink to={'/'}><i className="bi bi-twitter"></i></NavLink>
                    <NavLink to={'/'}><i className="bi bi-facebook"></i></NavLink>
                    <NavLink to={'/'}><i className="bi bi-instagram"></i></NavLink>
                    <NavLink to={'/'}><i className="bi bi-linkedin"></i></NavLink>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay="200">
                <div className="member-img">
                  <img src="/img/team/team-2.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <NavLink to={'/'}><i className="bi bi-twitter"></i></NavLink>
                    <NavLink to={'/'}><i className="bi bi-facebook"></i></NavLink>
                    <NavLink to={'/'}><i className="bi bi-instagram"></i></NavLink>
                    <NavLink to={'/'}><i className="bi bi-linkedin"></i></NavLink>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay="300">
                <div className="member-img">
                  <img src="/img/team/team-3.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <NavLink to={'/'}><i className="bi bi-twitter"></i></NavLink>
                    <NavLink to={'/'}><i className="bi bi-facebook"></i></NavLink>
                    <NavLink to={'/'}><i className="bi bi-instagram"></i></NavLink>
                    <NavLink to={'/'}><i className="bi bi-linkedin"></i></NavLink>
                  </div>
                </div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay="400">
                <div className="member-img">
                  <img src="/img/team/team-4.jpg" className="img-fluid" alt="" />
                  <div className="social">
                    <NavLink to={'/'}><i className="bi bi-twitter"></i></NavLink>
                    <NavLink to={'/'}><i className="bi bi-facebook"></i></NavLink>
                    <NavLink to={'/'}><i className="bi bi-instagram"></i></NavLink>
                    <NavLink to={'/'}><i className="bi bi-linkedin"></i></NavLink>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* <!-- End Team Section -->

<!-- ======= Pricing Section ======= --> */}
      {/* <section id="pricing" className="pricing">
  <div className="container">

    <div className="section-title">
      <h2>Pricing</h2>
      <p>Sit sint consectetur velit nemo qui impedit suscipit alias ea</p>
    </div>

    <div className="row">

      <div className="col-lg-4 col-md-6">
        <div className="box" data-aos="zoom-in-right" data-aos-delay="200">
          <h3>Free</h3>
          <h4><sup>$</sup>0<span> / month</span></h4>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li className="na">Pharetra massa</li>
            <li className="na">Massa ultricies mi</li>
          </ul>
          <div className="btn-wrap">
            <NavLink to={'/'} className="btn-buy">Buy Now</NavLink>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
        <div className="box recommended" data-aos="zoom-in" data-aos-delay="100">
          <h3>Business</h3>
          <h4><sup>$</sup>19<span> / month</span></h4>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li>Pharetra massa</li>
            <li className="na">Massa ultricies mi</li>
          </ul>
          <div className="btn-wrap">
            <NavLink to={'/'} className="btn-buy">Buy Now</NavLink>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
        <div className="box" data-aos="zoom-in-left" data-aos-delay="200">
          <h3>Developer</h3>
          <h4><sup>$</sup>29<span> / month</span></h4>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li>Pharetra massa</li>
            <li>Massa ultricies mi</li>
          </ul>
          <div className="btn-wrap">
            <NavLink to={'/'} className="btn-buy">Buy Now</NavLink>
          </div>
        </div>
      </div>

    </div>

  </div>
</section> */}

      {/* <!-- End Pricing Section -->*/}


      {/* <!-- ======= Clients Section ======= --> */}
      <section id="clients" className="clients clients">
        <div className="container">

          <div className="row">

            <div className="col-lg-2 col-md-4 col-6">
              <img src="/img/clients/client-1.png" className="img-fluid" alt="" data-aos="zoom-in" />
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <img src="/img/clients/client-2.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100" />
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <img src="/img/clients/client-3.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="200" />
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <img src="/img/clients/client-4.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300" />
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <img src="/img/clients/client-5.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="400" />
            </div>

            <div className="col-lg-2 col-md-4 col-6">
              <img src="/img/clients/client-6.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500" />
            </div>

          </div>

        </div>
      </section>
      {/* <!-- End Clients Section -->*/}


      
      <section id="testimonials" className="testimonials section-bg">
        <div className="container">

          <div className="section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <p>Magnam dolores commodi suscipit eum quidem consectetur velit</p>
          </div>

            <Testimonial/>

        </div>
      </section>
      {/* <!-- End Testimonials Section -->

<!-- ======= Portfolio Section ======= --> */}


    <Footer/>

    </div>

    
  )
}
export default Home;
