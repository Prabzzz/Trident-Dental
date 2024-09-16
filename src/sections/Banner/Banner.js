import React from 'react';
import './Banner.scss';
import {Link} from 'react-router-dom';
import icon from '../../assets/banner/icons/Calling.png';
import bannerImg from '../../assets/banner/1.png';
import doctorImg from '../../assets/banner/doctor.png';
import bannerPattern from '../../assets/banner/pattern_02.png';
import shapeOne from '../../assets/banner/vector_01.png';
import shapeTwo from '../../assets/banner/vector_02.png';
import shapeThree from '../../assets/banner/vector_03.png';
import shapeFour from '../../assets/banner/pattern.png';

const Banner = () => {
    const phoneNumber = '+919944465304'; // Replace with your actual phone number
    const bookingMessage = 'Hello, I would like to book an appointment.'; // Replace with your booking message
    const encodedMessage = encodeURIComponent(bookingMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <section className='section-bg section-common banner-section'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <h1>Entrust your smile to professionals</h1>
                                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

                                    <div className="banner-bottom">
                                        <div className="theme-btn">
                                           <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"> Book an Appointment</a>
                                        </div>

                                        <div className="banner-call">
                                            <div className='icon'>
                                                <img src={icon} alt="icon" />
                                            </div>
                                            <div className='call-text'>
                                                <p>Dental 24H Emergency</p>
                                                <h6>+91 99444 65304</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="banner-img-area" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                                    <div className="banner-img">
                                        <img src={bannerImg} alt="banner model" />
                                    </div>
                                    <div className='info-box'>
                                        <div className="info-img">
                                            <img src={doctorImg} alt="doctor" />
                                        </div>
                                        <div className='info-text'>
                                            <p>Dr. J. Rajarajeswari</p>
                                            <p><small>Consultant</small></p>
                                        </div>
                                    </div>  

                                    {/* Vector Shapes */}
                                    <div className="shapes">
                                        <img src={shapeOne} alt="shape" />
                                        <img src={shapeTwo} alt="shape" />
                                        <img src={shapeThree} alt="shape" />
                                        <img src={shapeFour} alt="shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner Pattern Vector*/}
            <img className='banner-pattern' src={bannerPattern} alt="banner pattern" />
        </section>
    );
};

export default Banner;