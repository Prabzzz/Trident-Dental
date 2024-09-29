import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AboutBanner from '../sections/AboutUs-Banner/AboutBanner';
import Faq from '../sections/AboutUs-Faq/Faq';
import Priority from '../sections/AboutUs-Priority/Priority';
import Footer from '../sections/Footer/Footer';
import Appointment from '../sections/AboutUs-Appointment/Appointment';

const About = () => {
    return (
        <>
            <Navbar />
            <AboutBanner />
            <Priority />
            <Appointment />
            <Faq />
            <Footer />
        </>
    );
};

export default About;