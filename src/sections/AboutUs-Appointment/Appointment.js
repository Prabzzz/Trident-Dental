import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const Appointment = () => {

    const mapLink = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14942.844555131023!2d79.7939077!3d11.9442205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x213ce8e3e9102e15%3A0x5b047c466b8b15fb!2sTrident%20Multispeciality%20Dental%20clinic%20%26%20Implant%20Centre!5e1!3m2!1sen!2sin!4v1727628263674!5m2!1sen!2sin';

    return (
        <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>No 1B, Anandha Nagar,<br />Kathirkamam, Pondicherry - 605009</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <SectionTitle 
                            subTitle="BOOK APPOINTMENT"
                            title="Care at Trident is pleasure"
                            description="Experience exceptional care with ease. Schedule your appointment today at Trident for a pleasant dental visit."/>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;