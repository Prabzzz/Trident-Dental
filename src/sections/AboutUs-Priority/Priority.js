import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import priorityImg from '../../assets/about/priority.png';
import './Priority.scss';

const Priority = () => {
    return (
        <section className='priority-section emergency-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-img">
                            <img src={priorityImg} alt="Emergency" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-text">
                            <SectionTitle
                                subTitle="OUR PRIORITY"
                                title="Our clients are our priority"
                                description="Ensuring the highest level of care for our patients is our top priority. Dr. J. Rajarajeswari is dedicated to providing personalized treatment and support, making sure each client's needs are met with compassion and professionalism."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Priority;