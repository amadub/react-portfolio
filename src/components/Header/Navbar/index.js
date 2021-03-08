import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../navLinks';
import LinkedIn from '../resources/linkedin.svg';
import Resume from '../resources/resume.svg';
import './styles.css';

const Navbar = () => {
    const renderLinks = (links) => {
        return links.map(link => {
            return <li className="nav__list__item" key={link.title}><Link className="nav__list__link" to={link.url}>{link.title}</Link></li>  
        });
    }
    return (
            <nav className="nav__container">
                <div className="nav__logo"><Link to="/">AaronWilliams.dev</Link></div>
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