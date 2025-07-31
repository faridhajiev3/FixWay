import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaYoutube } from "react-icons/fa";
import "../../scss/footer.scss";
import { SidebarData } from "../Header/SidebarData";
import { FaInstagram } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import SocialIcon from './SocialIcon';

function Footer() {
    const socialIcons = [
        { icon: <FaFacebookF size={16} />, href: "#" },
        { icon: <FaInstagram size={16} />, href: "#" },
        { icon: <FaXTwitter size={16} />, href: "#" },
        { icon: <FaYoutube size={16} />, href: "#" },
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h1>Fixway</h1>
                        <p className="footer-text">
                            Take a photo, send us the problem – your expert is on the way!
                        </p>
                        <div className="footer-social">
                            {socialIcons.map((social, index) => (
                                <SocialIcon key={index} href={social.href}>
                                    {social.icon}
                                </SocialIcon>
                            ))}
                        </div>
                    </div>

                    <div className="footer-column">
                        <nav>
                            <ul className="footer-links">
                                {SidebarData.map((link, index) => (
                                    <NavLink className="sidebar-links" to={link.path} key={index}>
                                        {link.nameKey}
                                    </NavLink>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="footer-column">
                        <div className="footer-contact-list">
                            <ul className='contact-item'>
                                <li>Terms & Conditions</li>
                                <li>User Agreement</li>
                                <li>Privacy Policy</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>


                    <div className="footer-column">
                        <ul className="footer-hours">
                            <div>
                                <li className="openHoursItem">
                                    <span><FaPhoneAlt /></span>
                                    <span></span>
                                    <span>+994 555 55 55</span>
                                </li>
                            </div>
                            <div>
                                <li className="openHoursItem">
                                    <span><SlEnvolopeLetter /></span>
                                    <span></span>
                                    <span>fixway@gmail.com</span>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='end'>
                    <p>© 2025 FixWay. All Rights Reserved.</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer