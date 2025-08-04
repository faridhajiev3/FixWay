import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import "../../scss/header.scss";
import { SidebarData } from '../../components/SidebarData';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <div className="output">
                <div className="logo">
                    <h1>FixWay</h1>
                </div>
                <nav className="navigation">
                    <ul className="nav-list">
                        {
                            SidebarData.map((item) => (
                                <li key={item.nameKey}>
                                    <NavLink 
                                        to={item.path}
                                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    >
                                        <span className="nav-icon">{item.icon}</span>
                                        {item.nameKey}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <button className="theme-toggle" aria-label="Toggle theme">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                </button>
                <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
                    {isMobileMenuOpen ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
                </button>
            </div>
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul className="mobile-nav-list">
                    {
                        SidebarData.map((item) => (
                            <li key={item.nameKey}>
                                <NavLink 
                                    to={item.path}
                                    className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                                    onClick={toggleMobileMenu}
                                >
                                    <span className="nav-icon">{item.icon}</span>
                                    {item.nameKey}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </header>
    );
}

export default Header;