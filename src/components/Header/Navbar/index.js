import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../navLinks';
import LinkedIn from '../resources/linkedin.svg';
import Resume from '../resources/resume.svg';
import resumeFile from '../../../resources/resume.pdf';
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
                    <a href="https://www.linkedin.com/in/aaronmawilliams/" target="_blank" rel="noreferrer">
                        <img alt="linkedin logo" className="nav__icon linkedin-icon" src={LinkedIn} />
                    </a>
                    <Link to={resumeFile} target="_blank" download>
                        <img alt="resume logo" className="nav__icon resume-icon" src={Resume} />
                    </Link>
                </div>
            </nav>
    );
};

export default Navbar;