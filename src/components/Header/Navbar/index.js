import React from 'react';
import { navLinks } from '../navLinks';
import LinkedIn from '../resources/linkedin.svg';
import Resume from '../resources/resume.svg';
import './styles.css';

const Navbar = () => {
    const renderLinks = (links) => {
        return links.map(link => {
            return <li className="nav__list__item" key={link.title}>{link.title}</li>  
        });
    }
    return (
            <nav className="nav__container">
                <div className="nav__logo">AaronWilliams.dev</div>
                <ul className="nav__list">
                    {renderLinks(navLinks)}
                </ul>
                <div className="nav__icons--right">
                    <img alt="linkedin logo" className="nav__icon linkedin-icon" src={LinkedIn} />
                    <img alt="resume logo" className="nav__icon resume-icon" src={Resume} />
                </div>
            </nav>
    );
};

export default Navbar;