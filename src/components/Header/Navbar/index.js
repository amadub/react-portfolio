import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../../../resources/nav-links';
import './styles.css';

const Navbar = () => {
    const renderLinks = (links) => {
        return links.map(link => {
            return <li key={link.title}><Link className="menu-link--desktop" to={link.url}>{link.title}</Link></li>  
        });
    }
    return (
            <nav className='navbar--desktop'>
                <div className="nav-logo--desktop"><Link to="/" className="menu-link--desktop">AaronWilliams.dev</Link></div>
                <ul>
                    {renderLinks(navLinks)}
                </ul>
            </nav>
    );
};

export default Navbar;