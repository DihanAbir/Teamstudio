import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Wecode-logo-15.png';

function FooterHomeThree({ className }) {
    return (
        <>
            <section className={`appie-footer-area appie-footer-3-area ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-about-widget footer-about-widget-3">
                                <div className="logo">
                                    <a href="#">
                                        <img height={70} src={logo} alt="" />
                                    </a>
                                </div>
                                {/* <p>
                                    wecode 
                                </p>
                                <a href="#">
                                    Read More <i className="fal fa-arrow-right" />
                                </a> */}
                                {/* <div className="social mt-30">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                        <div className="d-none col-lg-2 col-md-6">
                            <div className="footer-navigation footer-navigation-3">
                                <h4 className="title">Company</h4>
                                <ul>
                                    <li>
                                        <Link to="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/Service">Service</Link>
                                    </li>
                                    <li>
                                        <a href="#">Case Studies</a>
                                    </li>
                                    <li>
                                        <Link to="/news">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-navigation footer-navigation-3">
                                <h4 className="title">Company</h4>
                                <ul>
                                    {/* <li>
                                        <Link to="/about-us">Community</Link>
                                    </li>
                                    <li>
                                        <a href="#">Resources</a>
                                    </li>
                                    <li>
                                        <a href="#">Faqs</a>
                                    </li> */}
                                    <li>
                                        <a href="/privacy">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/Returun_policy">Returun  Policy</a>
                                    </li>
                                    {/* <li>
                                        <a href="#">Careers</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget-info">
                            <h4 className="title">Address</h4>
                                    <ul>
                                        <li>
                                            <a href="#">  3883 Jubla Street</a>
                                        </li>
                                        <li>
                                            <a href="#">   Nahda, Dammam</a>
                                        </li>
                                        <li>
                                            <a href="#">   <p>Saudi Arabia, 34243</p></a>
                                        </li>
                                    </ul>
                              
                               
                               
                                {/* <h4 className="title">Get In Touch</h4> */}
                                {/* <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-envelope" /> support@appie.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-phone" /> +(642) 342 762 44
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-map-marker-alt" /> 442 Belle Terre
                                            St Floor 7, San Francisco, AV 4206
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="
                        footer-copyright
                        d-flex
                        align-items-center
                        justify-content-center
                        pt-35
                         " 
                            >
                                {/* <div className="apps-download-btn">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-apple" /> Download for iOS
                                            </a>
                                        </li>
                                        <li>
                                            <a className="item-2" href="#">
                                                <i className="fab fa-google-play" /> Download for
                                                Android
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                                <div className="copyright-text">
                                    <p>Copyright © 2023 Weecode. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterHomeThree;
