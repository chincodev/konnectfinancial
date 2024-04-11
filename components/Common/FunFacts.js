import React from 'react';

const FunFacts = () => {
    return (
        <div className="fun-facts-area pt-100 pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-fun-fact">
                            <h3>1,000+</h3>
                            <p>Legal Journeys Supported</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-fun-fact">
                            <h3>5,000+</h3>
                            <p>Financial Pathways Paved</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-fun-fact">
                            <h3>
                                100<span className="sign-icon">%</span>
                            </h3>
                            <p>Peace of Mind Achieved</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-fun-fact">
                            <h3>20+</h3>
                            <p>Years of Combined Expertise</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FunFacts;