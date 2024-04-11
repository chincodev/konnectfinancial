import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="main-banner-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container-fluid">
                        <div className="main-banner-content">
                            <span>We are here for</span>
                            <h1>Fast and Fair Pre-Settlement Funding Solutions in California</h1>
                            <p>Get quick access to financial relief for pending legal cases. No upfront costs, fair terms, and support from application to settlement.</p>
                            
                            <div className="banner-btn">
                                <Link href="/apply-now">
                                    <a className="default-btn">
                                        Apply now <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="banner-social-buttons">
                            <ul>
                                <li>
                                    <span>Follow us</span>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i className="flaticon-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className="flaticon-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className="flaticon-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className="flaticon-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Approvals Area */}
            <div className="approvals-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="approvals-content">
                                <div className="icon">
                                    <i className="flaticon-loan"></i>
                                </div>
                                <span>Legal</span>
                                <p>Financial Assistance Now</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="approvals-content">
                                <div className="icon">
                                    <i className="flaticon-satisfaction"></i>
                                </div>
                                <span>Secure</span>
                                <p>Pre-Settlement Funding</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="approvals-content">
                                <div className="icon">
                                    <i className="flaticon-document"></i>
                                </div>
                                <span>Stress-Free</span>
                                <p>Case Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;