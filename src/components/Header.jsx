import React, { useState } from 'react'
import { Link } from "react-scroll";
import '../styles/header.css'
import logo from '../images/logos/logo_25w.svg'
import menu from '../images/logos/menu.svg'


const Header = () => {

    const [navBar, setNavBar] = useState(false);

    const changeBackgrond = () => {
        if (window.scrollY >= 80) {
            setNavBar(true)
        } else (
            setNavBar(false)
        )
    }
    window.addEventListener('scroll', changeBackgrond)

    return (

            <nav className={navBar ? "navbar navbar-expand-lg sticky-top py-4 py-lg-0 px-6 navbar_style bg-color" : "navbar navbar-expand-lg sticky-top py-4 py-lg-0 px-6 navbar_style navbar-transparent"}>
                
                <a className="navbar-brand " href="#!">
                    <img src={logo} width="120px" height="30" alt=""/>
                </a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">


                    <img src={menu} alt="" width="25px"/>
                </button>

                <div className="collapse navbar-collapse mr-auto" id="navbarNav">
                    <ul className="nav ml-auto roboto-MD-16">

                        <li className="nav-item">
                        
                            <Link
                                activeClass="active"
                                to="carouselExampleIndicators"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav-link text-white py-4_mod"
                            >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav-link text-white py-4_mod"
                            >About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav-link text-white py-4_mod"
                            >Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="products"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav-link text-white py-4_mod"
                            >Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="details"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="nav-link text-white py-4_mod"
                            >Details</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="form"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                className="nav-link text-white py-4_mod"
                            >Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>

    );
}
 
export default Header;