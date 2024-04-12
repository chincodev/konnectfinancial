import React from 'react';
import Navbar from '../components/_App/Navbar';
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import baseUrl from '../utils/baseUrl'
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


const ApplyNow = () => {
    const INITIAL_STATE = {
        loan_amount: "",
        first_name: "",
        dob: "",
        address: "",
        email: "",
        phone: "",
        designation: "",
        purpose: "",
        income: "",
        last_name: "",
        gender: "",
        country: "",
        email_alt: "",
        company_name: "",
        company_address: "",
        type: "",
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
            const url = `${window.location.origin}/api/loan_application`;
            const { 
                loan_amount,
                first_name,
                dob,
                address,
                email,
                phone,
                designation,
                purpose,
                income,
                last_name,
                gender,
                country,
                email_alt,
                company_name,
                company_address,
                type,
            } = contact;
            const payload = { 
                loan_amount,
                first_name,
                dob,
                address,
                email,
                phone,
                designation,
                purpose,
                income,
                last_name,
                gender,
                country,
                email_alt,
                company_name,
                company_address,
                type,
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
        <>
            <Navbar />
            
            <PageBanner 
                pageTitle="Apply Now" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Apply Now" 
                imgClass="item-bg-2" 
            /> 

            <div className="apply-area ptb-100">
                <div className="container">
                    <div className="apply-title">
                        <h3>Loan Application</h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="apply-form">
                                    <div className="form-group">
                                        <label>Desired Loan Amount*</label>
                                        <input 
                                            type="text" 
                                            name="loan_amount" 
                                            className="form-control" 
                                            value={contact.loan_amount}
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Firstname*</label>
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
                                        <label>Date of Birth*</label>
                                        <input 
                                            type="date" 
                                            name="dob" 
                                            className="form-control" 
                                            value={contact.dob}
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Address*</label>
                                        <input 
                                            type="text" 
                                            name="address" 
                                            className="form-control" 
                                            value={contact.address}
                                            onChange={handleChange} 
                                            required  
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Email Address*</label>
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
                                        <label>Phone Number*</label>
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
                                        <label>Designation*</label>
                                        <input 
                                             type="text" 
                                             name="designation" 
                                             className="form-control" 
                                             value={contact.designation}
                                             onChange={handleChange} 
                                             required 
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Purpose of Loan*</label>
                                        <input
                                            type="text" 
                                            name="purpose" 
                                            className="form-control" 
                                            value={contact.purpose}
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="apply-form">
                                    <div className="form-group">
                                        <label>Annual Income*</label>
                                        <input
                                            type="text" 
                                            name="income" 
                                            className="form-control" 
                                            value={contact.income}
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Lastname*</label>
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
                                        <label>Gender</label>
                                        <select className="form-select" onChange={handleChange} name="gender" value={contact.gender}>
                                            <option value="1">Select the Gender</option>
                                            <option value="2">Male</option>
                                            <option value="3">Female</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Country*</label>
                                        <select className="form-select" onChange={handleChange} name="country" value={contact.country} required>
                                            <option value="0">Select the Country</option>
                                            <option value="1">United Arab Emirates</option>
                                            <option value="2">China</option>
                                            <option value="3">United Kingdom</option>
                                            <option value="4">Germany</option>
                                            <option value="5">France</option>
                                            <option value="6">Japan</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Alternative Email Address*</label>
                                        <input
                                            type="text" 
                                            name="email_alt" 
                                            className="form-control" 
                                            value={contact.email_alt}
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Company Name</label>
                                        <input
                                            type="text" 
                                            name="company_name" 
                                            className="form-control" 
                                            value={contact.company_name}
                                            onChange={handleChange} 
                                          
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Company Address</label>
                                        <input
                                            type="text" 
                                            name="company_address" 
                                            className="form-control" 
                                            value={contact.company_address}
                                            onChange={handleChange} 
                                 
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Type of Loan</label>
                                        <select className="form-select" onChange={handleChange} name="type" value={contact.type}>
                                            <option value="0">Choose the Loan</option>
                                            <option value="1">Agricultural Loan</option>
                                            <option value="2">Business Loan</option>
                                            <option value="3">House Loan</option>
                                            <option value="4">Personal Loan</option>
                                            <option value="5">Education Loan</option>
                                            <option value="6">Payday Loan</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="apply-btn">
                            <button type="submit" className="btn default-btn">
                            {sending ? 'Sending...' : error ? "Error sending..." : 'Apply Now'}<span></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
      
            <Footer />
        </>
    )
}

export default ApplyNow;