import { React, useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);

//   const changeColor = () => {
//     if (window.scrollY >= 100) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };

//   window.addEventListener("scroll", changeColor);




  return (
    <div className={color ? "header header-bg" : "header"} style={{ marginTop:60}}> 

            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <h1><Link to={'/'}>SimpliBot</Link></h1>
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    <Link to={'/'}><img src="/img/logo.png" alt="" className="img-fluid"/></Link>
                </div>

                <nav id="navbar" className="navbar">
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                    {/* <Link to="/">Home </Link> */}

                    <li><Link className="nav-link " exact to={'/home'}>Home</Link></li>
                    <li><Link className="nav-link " exact to={'/about'}>About</Link></li>
                    <li><Link className="nav-link " exact to={'/services'}>Services</Link></li>
                    <li><Link className="nav-link " exact to={'/portfolio'}>Portfolio</Link></li>
                    
                    <li><Link className="nav-link scrollto" to={'/contact'}>Contact</Link></li>
                    <li><Link className="nav-link scrollto" exact to={'/faq'}>FAQ</Link></li>
                    
                    </ul>
                    
                    <div className="hamburger" onClick={handleClick}>
                        {click ? (
                        <FaTimes size={20} style={{ color: "#000", fontWeight:300 }} />
                        ) : (
                        <FaBars size={20} style={{ color: "#000", fontWeight:300 }} />
                        )}
                    </div>
                
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                {/* <!-- .navbar --> */}

                </div>
            </header>
    </div>
  )
}

export default Navbar;
