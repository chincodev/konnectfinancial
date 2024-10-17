import React from 'react';
import Link from 'next/link';
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'
const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text:  'Thank you for filling out an application. A representative will reach out to you shortly.',
        icon: 'success',
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}


const ApplyForFunding = () => {

    const INITIAL_STATE = {
        fullname: "",
        phone_number: "",
        email: "",
        date: "",
        amount: "",
        received: "",
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
            const url = `${window.location.origin}/api/get_funding`;
            const { 
                fullname,
                phone_number,
                email,
                date,
                amount,
                received,
            } = contact;
            const payload = { 
                fullname,
                phone_number,
                email,
                date,
                amount,
                received,
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
        <div className="funding-form-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Apply For Funding</span>
                    <h2>Get Funded From The Comfort Of Your Home</h2>
                </div>

                <div className="row">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Full Name*</label>
                                    <input 
                                        type="text" 
                                        name="fullname" 
                                        className="form-control" 
                                        value={contact.fullname}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input 
                                        type="text" 
                                        name="phone_number" 
                                        className="form-control" 
                                        value={contact.phone_number}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6">
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
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Date of Accident</label>
                                    <input 
                                        type="date" 
                                        name="date" 
                                        className="form-control" 
                                        value={contact.date}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>    
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Funding Amount Requested</label>
                                    <input 
                                        type="text" 
                                        name="amount" 
                                        className="form-control" 
                                        value={contact.amount}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Have You Received Funding Before?</label>
                                    <input 
                                        type="text" 
                                        name="received" 
                                        className="form-control" 
                                        value={contact.received}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>
                        </div>

         
                        <div className="funding-btn">
                            <button type="submit" className="btn default-btn">
                                Get Funding <span></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ApplyForFunding;