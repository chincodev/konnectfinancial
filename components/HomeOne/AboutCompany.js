import React from 'react';
import Link from 'next/link';

const AboutCompany = () => {
    return (
        <div className="about-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="p-relative">
                            <div className="about-image">
                                <img src="/images/about/about1.jpg" alt="image" />
                                <img src="/images/about/about2.jpg" alt="image" />
                            </div>

                            <div className="experience">
                                <h4>25</h4>
                                <p>We have more than years of experience</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="about-content">
                            <span>Quick and Easy Process</span>
                            <h3>Help For All Types Of Cases</h3>
                            <p>Our funding solutions cater to diverse legal cases, offering support and financial relief tailored to your unique situation and needs.</p>
                            {/* <strong>In business, we focus on 3 things.</strong> */}

                            <ul className="about-list">
                                <li>
                                    <i className="flaticon-check"></i>
                                    Personal Injury Cases
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Workplace Accidents and Negligence Claims
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Premises Liability (Slip and Fall) Cases
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Medical Malpractice Cases
                                </li>
                            </ul>

                            <div className="about-btn">
                                <Link href="/about-us">
                                    <a className="default-btn">
                                        View more <span></span>
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