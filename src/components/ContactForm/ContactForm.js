import React from 'react';
import './ContactForm.scss';
import icon from '../../assets/banner/icons/Calling.png';

const ContactForm = () => {
    const phoneNumber = '+919944465304'; // Replace with your actual phone number
    const bookingMessage = 'Hello, I would like to book an appointment.'; // Replace with your booking message
    const encodedMessage = encodeURIComponent(bookingMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    return (
        <form>
            <div className="row">
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="email" class="form-control" placeholder="Enter your name..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>E-mail Address</label>
                        <input type="email" class="form-control" placeholder="Enter email address..." />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Messages</label>
                        <textarea class="form-control" placeholder='Enter your messages...' rows="3"></textarea>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="theme-btn">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Book an Appointment</a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="appointment-call">
                        <div className='icon'>
                            <a href="tel:+919944465304">
                                <img src={icon} alt="icon" />
                            </a>
                        </div>
                        <div className='call-text'>
                            <p>Dental 24H Emergency</p>
                            <a href="tel:+919944465304" className='call-link'>
                                <h6>+91 99444 65304</h6>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;