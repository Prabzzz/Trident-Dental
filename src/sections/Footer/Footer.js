import React from 'react';
import logo from '../../assets/footer_logo.png';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import call from '../../assets/footer/calling.png';
import time from '../../assets/footer/time.png';
import location from '../../assets/footer/location.png';

const Footer = () => {

    const footerMenu = [
        {
            name: 'About Us',
            path: '/about'
        },
        {
            name: 'Dental Services',
            path: '/singleservice'
        },
        {
            name: 'Dentist',
            path: '/'
        },
        {
            name: 'Blogs',
            path: '/blogs'
        },
        {
            name: 'FAQs',
            path: '/'
        }
    ];

    const footerContacts = [
        {
            'title': 'Phone Number',
            'info': `<a href="tel:+919944465304" target="_blank">+91 99444 65304</a>`,
            'icon': call,
            'link': 'tel:+919944465304'
        },
        {
            'title': 'Open Hour',
            'info': `<a href="https://calendar.google.com/" target="_blank">Mon - Fri [10:00 AM - 09:00 PM]<br />Sat - Sun [11:00 AM - 10:00 PM]`,
            'icon': time,
            'link': 'https://calendar.google.com/'
        },
        {
            'title': 'Clinic Address',
            'info': `<a href="https://maps.app.goo.gl/7SaVSuiG9yGWDqFR7" target="_blank">No 1B, Bharathi Street, Anandha Nagar,<br />Kathirkamam, Pondicherry - 605009</a>`,
            'icon': location,
            'link': 'https://maps.app.goo.gl/7SaVSuiG9yGWDqFR7'
        }
    ];

    return (
        <footer className='pt-100 pb-70'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <div className="footer-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <p>Trident Dental Care is a top-rated local practice for cosmetic, preventative, and restorative dentistry in Pondicherry</p>

                        <div className="social-logo">
                            <p>Follow us on</p>
                            <ul>
                                <li><a href="https://www.instagram.com/trident_dental.clinic?igsh=NDA1NjlrMnB1aWNv" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                                <li><a href="https://www.facebook.com/share/U69YDJsg82y6aU9x/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
                                <li><a href="https://youtube.com/@tridentdentalclinic?si=2OWUbTiMg1Q_uiLV" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <div className="footer-link">
                            <p>Quick Links</p>
                            <ul>
                                {
                                    footerMenu.map(singleMenu => <li key={singleMenu.name}><Link to={singleMenu.path}>{singleMenu.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="footer-contact">
                            <p>Contact & Information</p>

                            {
                                footerContacts.map((footerContact, index) => {
                                    return (
                                        <div className="contact-list" key={index}>
                                            <div className="contact-icon">
                                                <a href={footerContact.link || "#"} target={footerContact.link ? "_blank" : "_self"}>
                                                    <img src={footerContact.icon} alt={footerContact.title} />
                                                </a>
                                            </div>
                                            <div className="contact-text">
                                                <p>{footerContact.title}</p>
                                                <h5 dangerouslySetInnerHTML={{ __html: footerContact.info }}></h5>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className='copy-text'>
                        <p>&copy; Trident. All Right Reserved</p>
                    </div>
                    <div className='copy-links'>
                        <ul>
                            <li><Link to='/'>Terms of Use</Link></li>
                            <li><Link to='/'>Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
