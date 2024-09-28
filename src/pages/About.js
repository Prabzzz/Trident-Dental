import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AboutBanner from '../sections/AboutUs-Banner/AboutBanner';
import Faq from '../sections/AboutUs-Faq/Faq';
import Priority from '../sections/AboutUs-Priority/Priority';
import Team from '../sections/AboutUs-Team/Team';
import Footer from '../sections/Footer/Footer';

const About = () => {
    return (
        <>
            <Navbar />
            <AboutBanner />
            <Priority />
            <Team />
            <Faq />
            <Footer />
        </>
    );
};

export default About;