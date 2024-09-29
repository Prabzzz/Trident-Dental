import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.scss';
import icon from '../../assets/banner/icons/Calling.png';
import bannerImg from '../../assets/banner/1.png';
import doctorImg from '../../assets/banner/doctor.png';
import bannerPattern from '../../assets/banner/pattern_02.png';
import shapeOne from '../../assets/banner/vector_01.png';
import shapeTwo from '../../assets/banner/vector_02.png';
import shapeThree from '../../assets/banner/vector_03.png';
import shapeFour from '../../assets/banner/pattern.png';

const Banner = () => {
    return (
        <section className='section-bg section-common banner-section'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <h1>Get ready to smile like you mean it</h1>
                                    <p>Experience exceptional dental care tailored to give you a flawless, confident smile. Trust our cutting-edge treatments to keep you smiling boldly every day!</p>

                                    <div className="banner-bottom">
                                        <div className="theme-btn">
                                        <Link to='/contact'>Book an Appointment</Link>
                                        </div>

                                        <div className="banner-call">
                                            <a href="tel:+919944465304" className='call-link'>
                                                <div className='icon'>
                                                    <img src={icon} alt="icon" />
                                                </div>
                                                </a>
                                                <div className='call-text'>
                                                    <p>Dental 24H Emergency</p>
                                                    <a href="tel:+919944465304" className='call-link'>
                                                    <h6>+91 99444 65304</h6>
                                                    </a>
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
                                            <p><small>Chief Dental Surgeon</small></p>
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