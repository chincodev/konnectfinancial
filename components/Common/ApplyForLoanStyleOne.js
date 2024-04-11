import React from 'react';
import Link from 'next/link';

const ApplyForLoanStyleOne = () => {
    return (
        <div className="deserve-area ptb-100">
            <div className="container">
                <div className="section-title">
                    {/* <span>Funding circles</span> */}
                    <h2>Quick and Easy Process</h2>
                    <p>With our simple and transparent process, we're here to support you throughout your legal journey, providing the financial assistance you need to move forward with confidence. To access our funding product, you must have a valid legal claim and be represented by an attorney.</p>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="deserve-item">
                            <h3>Four Simple Steps</h3>

                            <div className="deserve-content">
                                <span>1</span>
                                <h4>Easy Application</h4>
                                <p>Start by submitting a short application online or contacting our customer support for assistance. Our goal is to make the process as simple and stress-free as possible for you.</p>
                            </div>

                            <div className="deserve-content">
                                <span>2</span>
                                <h4>Quick Review</h4>
                                <p>Upon receiving your application, we work swiftly with you and your attorney to assess your needs and determine the best course of action.</p>
                            </div>

                            <div className="deserve-content">
                                <span>3</span>
                                <h4>Fast Payment</h4>
                                <p>Once approved, funds are promptly delivered directly to you, typically on the same day. We understand the urgency of your situation and strive to provide timely support when you need it most.</p>
                            </div>

                            <div className="deserve-content">
                                <span>4</span>
                                <h4>You Benefit and Repay the Funds</h4>
                                <p>Enjoy the peace of mind that comes with our funding as you use it to cover everyday expenses or costs resulting from your injuries. Repayment is made once your case settles, along with a fee. And in the event that you lose your case, rest assured that you won't be obligated to repay us—ever.</p>
                            </div>

                            <div className="deserve-btn">
                                <Link href="/apply-now">
                                    <a className="default-btn">
                                        Apply Now<span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="rate-form">
                            <div className="rate-content">
                                <span>Calculate your rate</span>
                                <h3>How much do you need?</h3>
                            </div>

                            <form className="form">
                                <div className="form-group">
                                    <label>Type The Amount Of Money You Need</label>
                                    <input type="text" className="form-control" placeholder="$1000" />
                                </div>

                                <div className="form-group">
                                    <label>How much is your case worth?</label>
                                    <input type="text" className="form-control" placeholder="$1000" />
                                    {/* <select className="form-select">
                                        <option value="5">1 month</option>
                                        <option value="1">2 month</option>
                                        <option value="2">3 month</option>
                                        <option value="0">4 month</option>
                                        <option value="3">6 month</option>
                                        <option value="3">1 Year</option>
                                        <option value="0">2 Years</option>
                                        <option value="3">3 Years</option>
                                    </select> */}
                                </div>

                                <div className="form-group">
                                    <label>What Is The Attorneys Fee Percentage?</label>
                                    <input type="text" className="form-control" placeholder="10%" />
                                </div>

                                <div className="form-group">
                                    <label>How Many Months Is The Case Expected To Last?</label>
                                    <input type="text" className="form-control" placeholder="6 month" />
                                </div>

                                <div className="form-group">
                                    <label>The total you will pay</label>
                                    <input type="text" className="form-control" placeholder="$11200" />
                                </div>

                                <div className="rate-btn">
                                    <button type="submit" className="btn default-btn">
                                        Apply for this loan <span></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyForLoanStyleOne;