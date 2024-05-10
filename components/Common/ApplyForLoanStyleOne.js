import React from 'react';
import Link from 'next/link';
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

const ApplyForLoanStyleOne = () => {

    const INITIAL_STATE = {
        first_name: "",
        email: "",
        phone: "",
        last_name: "",
        state: "",
        case_type: ""
    };

    const [contact, setContact] = React.useState(INITIAL_STATE);

    const [ sending, setSending ] = React.useState(false)
    const [ error, setError ] = React.useState(false)

    
    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            setSending(true);
            const url = `${window.location.origin}/api/funding_application`;
            const { 
                first_name,
                email,
                phone,
                last_name,
                state,
                case_type
            } = contact;
            const payload = { 
                first_name,
                email,
                phone,
                last_name,
                state,
                case_type
             };
            await axios.post(url, payload);
            setContact(INITIAL_STATE);
            alertContent();
            setSending(false);
            setError(false)
        } catch (error) {
            console.log(error);
            setError(true)
            setSending(false);
        }
    };
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
                             
                                <h3>Apply For Funding</h3>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input 
                                        type="text" 
                                        name="first_name" 
                                        className="form-control" 
                                        value={contact.first_name}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                        type="text" 
                                        name="last_name" 
                                        className="form-control" 
                                        value={contact.last_name}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        className="form-control" 
                                        value={contact.email}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input 
                                            type="text" 
                                            name="phone" 
                                            className="form-control" 
                                            value={contact.phone}
                                            onChange={handleChange} 
                                            required 
                                        />
                                </div>

                                <div className="form-group">
                                    <label>State</label>
                                    <input
                                        type="text" 
                                        name="state" 
                                        className="form-control" 
                                        value={contact.state}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Case Type</label>
                                    <select className="form-select" onChange={handleChange} name="case_type" value={contact.case_type}>
                                        <option value="Auto Accident">Auto Accident</option>
                                        <option value="Slip and Fall">Slip and Fall</option>
                                        <option value="Worker's Compensation">Worker's Compensation</option>
                                        <option value="Dog Bite">Dog Bite</option>
                                        <option value="Wrongful Death">Wrongful Death</option>
                                        <option value="Medical Malpractice">Medical Malpractice</option>
                                    </select>
                                </div>
                                <div className="rate-btn">
                                <button type="submit" className="btn default-btn">
                            {sending ? 'Sending...' : error ? "Error sending..." : 'Apply Now'}<span></span>
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