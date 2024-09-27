import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../sections/Home-Banner/Banner';
import Blogs from '../sections/Blogs/Blogs';
import Emergency from '../sections/Home-Emergency/Emergency';
import Expert from '../sections/Home-Expert/Expert';
import Features from '../sections/Home-Features/Features';
import Footer from '../sections/Footer/Footer';
import Services from '../sections/Home-Services/Services';
import Testimonial from '../sections/Home-Testimonial/Testimonial';

const Home = () => {

    return (
        <>
            <Navbar/>
            <Banner/>
            <Services/>
            <Emergency/>
            <Features />
            <Expert/>
            <Testimonial/>
            <Blogs/>
            <Footer/>
        </>
    );
};

export default Home;