import React from 'react'
import { Link } from "react-scroll";
import '../styles/footer.css'
import logo from '../images/logos/logo_25w.svg'
import insta from '../images/logos/instagram.svg'
import face from '../images/logos/facebook.svg'
import twitt from '../images/logos/twitter.svg'
import youtube from '../images/logos/youtube.svg'
import linkedin from '../images/logos/linkedin.svg'


const Footer = () => {
    return ( 
        <footer id="footer" className="pt-5 pb-4 px-2">
            <div className="row justify-content-center align-items-baseline text-footer roboto-RG-16 mx-0 media">
                <div className="col-10 col-sm-3 col-md-2 text-center">
                    <Link
                            activeClass="active"
                            to="carouselExampleIndicators"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="footer_menu"
                        ><img className="footer_logo" src={logo} alt="" width="120px"/></Link>
                    <p className="roboto-RG-14 color_title mt-4_mod">2020 © All rights reserved.</p>
                </div>
                <div className="col-10 col-sm-2 text-center">

                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="footer_menu"
                    ><p>About Us</p></Link>
                
                    <Link
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="footer_menu"
                    ><p>Services</p></Link>

                    <Link
                        activeClass="active"
                        to="products"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="footer_menu"
                    ><p>Products</p></Link>

                </div>
                <div className="col-10 col-sm-2 text-center">
                    <Link
                        activeClass="active"
                        to="details"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="footer_menu"
                    ><p>Details</p></Link>
                    
                    <Link
                        activeClass="active"
                        to="form"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="footer_menu"
                    ><p>Contact</p></Link>
                </div>

                <div className="col-10 col-sm-3">
                    <p className="poppins-SB-21 text-center mb-4">Follow us</p>
                    <div className="d-flex justify-content-center">
                        <a href="https://instagram.com/agencia25watts"><img className="mx-3 mx-sm-1 mx-md-3" src={insta} alt="" width="24px"/></a>
                        <a href="https://www.facebook.com/25wattsDiseno"><img className="mx-3 mx-sm-1 mx-md-3" src={face} alt="" width="24px"/></a>
                        <a href="https://twitter.com/25watts"><img className="mx-3 mx-sm-1 mx-md-3" src={twitt} alt="" width="24px"/></a>
                        <a href="http://www.25watts.com.ar/blog/"><img className="mx-3 mx-sm-1 mx-md-3" src={youtube} alt="" width="24px"/></a>
                        <a href="https://www.linkedin.com/company/25watts"><img className="mx-3 mx-sm-1 mx-md-3" src={linkedin} alt="" width="24px"/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;