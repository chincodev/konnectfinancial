import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'

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

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {

    const [contact, setContact] = useState(INITIAL_STATE);

    const [ sending, setSending ] = useState(false)
    const [ error, setError ] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            setSending(true);
 
            const url = `${window.location.origin}/api/contact`;
     
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            await axios.post(url, payload);
            setContact(INITIAL_STATE);
            alertContent();
            setSending(false);
            setError(false)
        } catch (error) {
            setError(true)
            setSending(false);
        }
    };

    return (
        <div className="contact-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Have questions?</span>
                    <h2>Get In Touch With Our Team</h2>
                </div>

                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="contact-form">
                      

                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                placeholder="Name" 
                                                className="form-control" 
                                                value={contact.name}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                placeholder="Email" 
                                                className="form-control" 
                                                value={contact.email}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input 
                                                type="text" 
                                                name="number" 
                                                placeholder="Phone number" 
                                                className="form-control" 
                                                value={contact.number}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Subject</label>
                                            <input 
                                                type="text" 
                                                name="subject" 
                                                placeholder="Subject" 
                                                className="form-control" 
                                                value={contact.subject}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Message</label>
                                            <textarea 
                                                name="text" 
                                                cols="30" 
                                                rows="6" 
                                                placeholder="Write your message..." 
                                                className="form-control" 
                                                value={contact.text}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-sm-12">
                                        <button type="submit" disabled={sending || error} className="btn default-btn">
                                           {sending ? 'Sending...' : error ? "Error sending..." : 'Send message'}<span></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="contact-side-box">
                            <div className="title">
                                <h3>Contact Info</h3>
                            </div>
        
                            <div className="info-box">
                                <div className="icon">
                                    <i className="flaticon-clock"></i>
                                </div>
                                <h4>Working hours</h4>
                                <ul className="list">
                                    <li>
                                        Mon – Thurs
                                        <span>8:00 AM - 5:00 PM</span>
                                    </li>
                                    <li>
                                        Fri – Satur
                                        <span>8:00 AM - 3:00 PM</span>
                                    </li>
                                    <li>
                                        Sun
                                        <span>CLOSED</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="info-box">
                                <div className="icon">
                                    <i className="flaticon-pin"></i>
                                </div>
                                <h4>Address</h4>
                                <span>7111 Santa Monica Blvd, Ste B197, West Hollywood, CA 90046</span>
                            </div>

                            <div className="info-box">
                                <div className="icon">
                                    <i className="flaticon-phone-call"></i>
                                </div>
                                <h4>Phone</h4>
                                <span>
                                    <a href="tel:8336604343">+1 (833) 660-4343</a>
                                </span>
                                <span>
                                    <a href="tel:8336604343">+1 (833) 660-4343</a>
                                </span>
                            </div>

                            <div className="info-box">
                                <div className="icon">
                                    <i className="flaticon-email"></i>
                                </div>
                                <h4>Email</h4>
                                <span>
                                    <a href="mailto:support@konnectfinancial.com">Support@konnectfinancial.com</a>
                                </span>
                      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;