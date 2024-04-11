import React from 'react';
import Link from 'next/link';

const ApplyForFunding = () => {
    return (
        <div className="funding-form-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Apply For Funding</span>
                    <h2>Get Funded From The Comfort Of Your Home</h2>
                </div>

                <div className="row">
                    <form className="funding-form">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Full Name*</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Date of Accident</label>
                                    <input type="date" className="form-control" />
                                </div>    
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Funding Amount Requested</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Have You Received Funding Before?</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="buy-checkbox-btn">
                            <div className="item">
                                <input className="inp-cbx" id="cbx" type="checkbox" />
                                <label className="cbx" htmlFor="cbx">
                                    <span>
                                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                        </svg>
                                    </span>
                                    <span>I have read and agree to Clearbanc’s <Link href="/privacy-policy"><a>Privacy Policy</a></Link> and  <Link href="/terms-conditions"><a>Terms of Service</a></Link></span>
                                </label>
                            </div>
                        </div>

                        <div className="funding-btn">
                            <button type="submit" className="btn default-btn">
                                Get Funding <span></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ApplyForFunding;