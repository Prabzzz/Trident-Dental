import React from 'react';
import './Navbar.scss';
import logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';
import ChatBot from '../ChatBot/ChatBot';

const Navbar = () => {

    const navbarItems = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About Us',
            path: '/about',
        },
        {
            name: 'Services',
            path: '/service',
        },
        {
            name: 'Blogs',
            path: '/blogs',
        },
        {
            name: 'Contact Us',
            path: '/contact',
        }
    ];

    const phoneNumber = '+919944465304';
    const bookingMessage = 'Hello, I would like to book an appointment.';
    const encodedMessage = encodeURIComponent(bookingMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <>
            <div className='main-nav'>
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            {/* Logo */}
                            <Link className="navbar-brand" to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                {/* Navbar Link */}
                                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                    {
                                        navbarItems.map(navSingle =>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={navSingle.path}>{navSingle.name}</Link>
                                            </li>
                                        )
                                    }
                                </ul>

                                {/* Navbar Button */}
                                <div className="theme-btn">
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"> Book Appointment</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <ChatBot />
        </>
    );
};

export default Navbar;