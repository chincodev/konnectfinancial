import React from 'react';

const OurProcess = () => {
    return (
        <div className="approvals-area ptb-100 bg-color">
            <div className="container">
                <div className="approvals-item">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="approvals-content">
                                <div className="icon">
                                    <i className="flaticon-loan"></i>
                                </div>
                                <span>Legal</span>
                                <p>Financial Assistance Now</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="approvals-content">
                                <div className="icon">
                                    <i className="flaticon-satisfaction"></i>
                                </div>
                                <span>Secure</span>
                                <p>Pre-Settlement Funding</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
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

export default OurProcess;