import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="footer-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a><img src="/images/logo-white.png" alt="image" /></a>
                                    </Link>
                                </div>

                                <p>Konnect Financial offers quick, easy, and transparent funding solutions to Plaintiffs with pending settlements.</p>

                              
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Quick Links</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    
                                    <li>
                                        <Link href="/funding">
                                            <a>Funding</a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/loan-calculator">
                                            <a>Calculator</a>
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link href="/FAQ">
                                            <a>FAQ</a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/contact">
                                            <a>Contact</a>
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>    
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Other Resources</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="/contact">
                                            <a>Support</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/apply-now">
                                            <a>Apply</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-conditions">
                                            <a>Terms of Service</a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="#">
                                            <a>Business Loans</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Loan Services</a>
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>    
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Contact Us</h3>

                                <div className="info-contact">
                                    <i className="flaticon-pin"></i>
                                    <span>7111 Santa Monica Blvd, Ste B197, West Hollywood, CA 90046</span>
                                </div>

                                <div className="info-contact">
                                    <i className="flaticon-mail"></i>
                                    <span>
                                        <a style={{paddingTop:'0.3rem'}} href="mailto:support@konnectfinancial.com">Support@konnectfinancial.com</a>
                                    </span>
                                </div>

                                <div className="info-contact">
                                    <i className="flaticon-telephone"></i>
                                    <span>
                                        <a href="tel:8336604343">+1 (833) 660-4343</a>
                                    </span>
                                    <span>
                                        <a href="tel:8336604343">+1 (833) 660-4343</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
         
            <div className="copy-right-area">
                <div className="container">
                    <div className="copy-right-content">
                        <p>
                            Copyright &copy; {currentYear} Konnect Financial Inc.
                             {/* Designed By <a href="https://envytheme.com/" target="_blank">EnvyTheme</a> */}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;