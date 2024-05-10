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
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}


const ApplyNow = () => {
    const INITIAL_STATE = {
        first_name: "",
        address: "",
        email: "",
        phone: "",
        last_name: "",
        case_type: ""
    };
    const [contact, setContact] = React.useState(INITIAL_STATE);

    const [ sending, setSending ] = React.useState(false)
    const [ error, setError ] = React.useState(false)

    
    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            setSending(true);
            const url = `${window.location.origin}/api/loan_application`;
            const { 
                first_name,
                address,
                email,
                phone,
                last_name,
                case_type
            } = contact;
            const payload = { 
                first_name,
                address,
                email,
                phone,
                last_name,
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
                        <h3>Apply for Funding</h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="apply-form">

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
                                        <label>State*</label>
                                        <input 
                                            type="text" 
                                            name="state" 
                                            className="form-control" 
                                            value={contact.address}
                                            onChange={handleChange} 
                                            required  
                                        />
                                    </div>

                               



                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="apply-form">

                            
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
                                        <label>Case Type*</label>
                                        <select className="form-select" onChange={handleChange} name="case_type" value={contact.case_type}>
                                            <option value="Auto Accident">Auto Accident</option>
                                            <option value="Slip and Fall">Slip and Fall</option>
                                            <option value="Worker's Compensation">Worker's Compensation</option>
                                            <option value="Dog Bite">Dog Bite</option>
                                            <option value="Wrongful Death">Wrongful Death</option>
                                            <option value="Medical Malpractice">Medical Malpractice</option>
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