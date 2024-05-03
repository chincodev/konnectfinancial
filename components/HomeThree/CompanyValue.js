import React from 'react';

const CompanyValue = () => {
    return (
        <div className="value-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="value-image">
                            <img src="/images/value.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="value-content">
                            {/* <span>Company value</span> */}
                            <h3>Company Values</h3>
                            <p className="text">At Konnect Financial, our values serve as the cornerstone of our operations, guiding us towards a future of excellence and integrity. We believe in innovation, constantly striving to evolve and adapt to better serve our clients' needs. Our team is our greatest asset, and we nurture talent, empowering individuals to reach their fullest potential. We are committed to enabling access to justice, ensuring that all individuals have the resources they need to navigate through the legal system. Above all, we uphold a sense of responsibility, both to our clients and the communities we serve, ensuring transparency, fairness, and accountability in all our endeavors.</p>
                            {/* <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}

                            {/* <ul className="value-features">
                                <li>
                                    <i className='flaticon-idea'></i>
                                    Innovative
                                </li>
                                <li>
                                    <i className='flaticon-talent'></i>
                                    Talent
                                </li>
                                <li>
                                    <i className='flaticon-key'></i>
                                    Enabling
                                </li>
                                <li>
                                    <i className='flaticon-responsibility'></i>
                                    Responsible
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyValue;