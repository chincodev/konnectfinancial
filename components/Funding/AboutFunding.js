import React from 'react';

const AboutFunding = () => {
    return (
        <div className="funding-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="funding-image">
                            <img src="/images/funding.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="funding-content">
                            {/* <span>Pre-Settlement Funding</span> */}
                            <h3>Pre-Settlement Funding</h3>
                            <p>We fund a variety of cases, including personal injury, premise liability, and medical malpractice cases.</p>
                            {/* <strong>We Reimagined Fundraising.</strong> */}

                            <ul className="funding-list">
                                <li>
                                    <span>(1)</span>
                                    <b>Personal</b> Injury Cases
                                </li>
                                <li>
                                    <span>(2)</span>
                                    <b>Workplace</b> Accidents and Negligence Claims
                                </li>
                                <li>
                                    <span>(3)</span>
                                    <b>Premises</b> Liability Cases
                                </li>
                                <li>
                                    <span>(4)</span>
                                    <b>Medical</b> Malpractice Cases
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFunding;