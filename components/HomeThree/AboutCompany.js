import React from 'react';
import Link from 'next/link';

const AboutCompany = () => {
    return (
        <div className="about-area bg-color pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-wrap">
                            <img src="/images/about/about4.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content">
                            {/* <span></span> */}
                            <h3>About Konnect Financial</h3>
                            <p>We've been a cornerstone in the legal funding industry for a number of years, offering invaluable support to plaintiffs in need. With a commitment to transparency, integrity, and client-centric services, we ensure every individual receives the assistance they deserve throughout their legal journey.</p>
                            <strong>We provide:</strong>

                            <ul className="about-list">
                                <li>
                                    <i className="flaticon-check"></i>
                                    Pre-settlement funding solutions tailored to your unique needs.
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Transparent and reliable financial assistance throughout your legal case.
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Exceptional customer service and support from application to settlement.
                                </li>
                            </ul>

                            <div className="about-btn">
                                <Link href="/apply-now">
                                    <a className="default-btn">
                                        Apply Now <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCompany;