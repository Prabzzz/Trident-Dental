import React from 'react';
import './Expert.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/expert.png';

const Expert = () => {
    return (
        <section className='expert-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text">
                            <SectionTitle 
                                subTitle="CHIEF DENTAL SURGEON"
                                title="Top-notch dentistry, from India's top dentists."
                                description="Top-notch dentistry, provided by Dr. J. Rajarajeswari, a highly skilled and trusted dental expert. Delivering personalized care with precision and expertise."
                            />

                            <ul>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Renowned dental professional
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Cutting-edge dental services
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Special discounts on all treatments
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img src={expertImg} alt="expert" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;