import React, { Component } from 'react'
import Link from 'next/link'

export default class ProfessionalServices extends Component {
    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }
    render() {
        return (
            <div className="best-services-area bg-color ptb-100">
                <div className="container">
                    <div className="section-title">
                        {/* <span>Knowledge of the market</span> */}
                        <h2>Cases We Fund</h2>
                        <p>We specialize in providing financial assistance for a wide range of legal cases. From personal injury claims to workplace negligence and premises liability, we're here to support plaintiffs in their pursuit of justice.</p>
                    </div>

                    <div className="tab services-list-tab">
                        <ul className="tabs-list">
                            <li
                                // className="current"
                                // onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <i className="flaticon-agriculture"></i>
                                <span>Auto Accidents</span>
                            </li>

                            <li
                                // onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                <i className="flaticon-personal"></i>
                                <span>Pedestrian Accidents</span>
                            </li>

                            <li
                                // onClick={(e) => this.openTabSection(e, 'tab3')}
                            >
                                <i className="flaticon-loan-1"></i>
                                <span>Motorcycle Accidents</span>
                            </li>

                            <li
                                // onClick={(e) => this.openTabSection(e, 'tab4')}
                            >
                                <i className="flaticon-scholarship"></i>
                                <span>Uber Accidents</span>
                            </li>

                            <li
                                // onClick={(e) => this.openTabSection(e, 'tab5')}
                            >
                                <i className="flaticon-loan-2"></i>
                                <span>Slip and Fall Cases</span>
                            </li>

                            <li
                                // onClick={(e) => this.openTabSection(e, 'tab6')}
                            >
                                <i className="flaticon-loan-3"></i>
                                <span>Medical Malpractice Cases</span>
                            </li>
                        </ul>

                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="services-tab-content">
                                            <h3>Our Team Is Ready To Help</h3>
                                            <p>Our experienced team understands the challenges you face and is committed to offering tailored solutions to meet your specific needs. Whether you've been involved in an auto accident, a slip and fall incident, or a medical malpractice case, we're dedicated to helping you navigate through the complexities of your legal journey with confidence and peace of mind.</p>

                                            {/* <h3>Get financing for whatever you need now</h3>
                                            <ul className="list">
                                                <li>New home</li>
                                                <li>Home improvement loan</li>
                                                <li>Home renovation</li>
                                                <li>Land purchase</li>
                                            </ul>
                                    
                                            <h3>Agricultural loan - Eligibility</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}

                                            <Link href="/apply-now">
                                                <a className="default-btn">Apply Now<span></span></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="services-tab-image1">
                                            <img src="/images/services-tab2.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab2" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="services-tab-content">
                                            <h3>Our Team Is Ready To Help</h3>
                                            <p>Our experienced team understands the challenges you face and is committed to offering tailored solutions to meet your specific needs. Whether you've been involved in an auto accident, a slip and fall incident, or a medical malpractice case, we're dedicated to helping you navigate through the complexities of your legal journey with confidence and peace of mind.</p>

                                            {/* <h3>Get financing for whatever you need now</h3>
                                            <ul className="list">
                                                <li>New home</li>
                                                <li>Home improvement loan</li>
                                                <li>Home renovation</li>
                                                <li>Land purchase</li>
                                            </ul>
                                    
                                            <h3>Agricultural loan - Eligibility</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}

                                            <Link href="/apply-now">
                                                <a className="default-btn">Apply Now<span></span></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="services-tab-image1">
                                            <img src="/images/services-tab2.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab3" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="services-tab-content">
                                            <h3>Our Team Is Ready To Help</h3>
                                            <p>Our experienced team understands the challenges you face and is committed to offering tailored solutions to meet your specific needs. Whether you've been involved in an auto accident, a slip and fall incident, or a medical malpractice case, we're dedicated to helping you navigate through the complexities of your legal journey with confidence and peace of mind.</p>

                                            {/* <h3>Get financing for whatever you need now</h3>
                                            <ul className="list">
                                                <li>New home</li>
                                                <li>Home improvement loan</li>
                                                <li>Home renovation</li>
                                                <li>Land purchase</li>
                                            </ul>
                                    
                                            <h3>Agricultural loan - Eligibility</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}

                                            <Link href="/apply-now">
                                                <a className="default-btn">Apply Now<span></span></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="services-tab-image1">
                                            <img src="/images/services-tab2.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab4" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="services-tab-content">
                                            <h3>Our Team Is Ready To Help</h3>
                                            <p>Our experienced team understands the challenges you face and is committed to offering tailored solutions to meet your specific needs. Whether you've been involved in an auto accident, a slip and fall incident, or a medical malpractice case, we're dedicated to helping you navigate through the complexities of your legal journey with confidence and peace of mind.</p>

                                            {/* <h3>Get financing for whatever you need now</h3>
                                            <ul className="list">
                                                <li>New home</li>
                                                <li>Home improvement loan</li>
                                                <li>Home renovation</li>
                                                <li>Land purchase</li>
                                            </ul>
                                    
                                            <h3>Agricultural loan - Eligibility</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}

                                            <Link href="/apply-now">
                                                <a className="default-btn">Apply Now<span></span></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="services-tab-image1">
                                            <img src="/images/services-tab2.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab5" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="services-tab-content">
                                            <h3>Our Team Is Ready To Help</h3>
                                            <p>Our experienced team understands the challenges you face and is committed to offering tailored solutions to meet your specific needs. Whether you've been involved in an auto accident, a slip and fall incident, or a medical malpractice case, we're dedicated to helping you navigate through the complexities of your legal journey with confidence and peace of mind.</p>

                                            {/* <h3>Get financing for whatever you need now</h3>
                                            <ul className="list">
                                                <li>New home</li>
                                                <li>Home improvement loan</li>
                                                <li>Home renovation</li>
                                                <li>Land purchase</li>
                                            </ul>
                                    
                                            <h3>Agricultural loan - Eligibility</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}

                                            <Link href="/apply-now">
                                                <a className="default-btn">Apply Now<span></span></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="services-tab-image1">
                                            <img src="/images/services-tab2.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab6" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="services-tab-content">
                                            <h3>Our Team Is Ready To Help</h3>
                                            <p>Our experienced team understands the challenges you face and is committed to offering tailored solutions to meet your specific needs. Whether you've been involved in an auto accident, a slip and fall incident, or a medical malpractice case, we're dedicated to helping you navigate through the complexities of your legal journey with confidence and peace of mind.</p>

                                            {/* <h3>Get financing for whatever you need now</h3>
                                            <ul className="list">
                                                <li>New home</li>
                                                <li>Home improvement loan</li>
                                                <li>Home renovation</li>
                                                <li>Land purchase</li>
                                            </ul>
                                    
                                            <h3>Agricultural loan - Eligibility</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}

                                            <Link href="/apply-now">
                                                <a className="default-btn">Apply Now<span></span></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="services-tab-image1">
                                            <img src="/images/services-tab2.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
