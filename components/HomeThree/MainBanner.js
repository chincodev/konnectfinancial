import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="main-banner-area bg-three">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="main-banner-content">
                                    <h1>Fast and Fair Pre-Settlement Funding Solutions in California</h1>
                                    <p>Get quick access to financial relief for pending legal cases. No upfront costs, fair terms, and support from application to settlement.</p>
                                    
                                    <div className="banner-btn">
                                        <Link href="/apply-now">
                                            <a className="default-btn">
                                                Apply Now <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="banner-image">
                                    <img src="/images/vector.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;