import React from 'react';
import './Emergency.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import EmergencyImg from '../../assets/emergency.png';

const Emergency = () => {
    const phoneNumber = '+919944465304'; // Replace with your actual phone number
    const bookingMessage = 'Hello, I would like to book an appointment.'; // Replace with your booking message
    const encodedMessage = encodeURIComponent(bookingMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    return (
        <section className='emergency-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="emergency-img">
                            <img src={EmergencyImg} alt="Emergency" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="emergency-text">
                            <SectionTitle subTitle="Dental 24H Emergency" title="Gentle, friendly treatment from our locally practice." description="Prompt, compassionate care available any time, ensuring comfort and relief. Our trusted local team is ready to handle your dental emergencies with expertise and kindness." />

                            <div className="theme-btn">
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"> Book an Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Emergency;