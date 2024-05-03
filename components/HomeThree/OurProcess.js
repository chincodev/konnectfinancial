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
                                <strong><span>Apply</span></strong>
                                <p>Complete our quick and easy application.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="approvals-content">
                                <div className="icon">
                                    <i className="flaticon-satisfaction"></i>
                                </div>
                                <strong><span>Get Approved</span></strong>
                                <p>Wait for Approval. Approval usually takes up to 24 hours.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                            <div className="approvals-content">
                                <div className="icon">
                                    <i className="flaticon-document"></i>
                                </div>
                                <strong><span>Receive Funding</span></strong>
                                <p>Receive $500 - $100,000 in as little as 24 hours after approval!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProcess;