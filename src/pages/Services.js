import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import Gallery from '../sections/Service-Gallery/Gallery';
import ServiceBanner from '../sections/Service-Banner/ServiceBanner';
import Symptoms from '../sections/Service-Sympthoms/Symptoms';

const Services = () => {
    return (
        <>
            <Navbar />
            <ServiceBanner />
            <Symptoms />
            <Gallery />
            <Footer />
        </>
    );
};

export default Services;