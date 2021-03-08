import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../navLinks';
import LinkedIn from '../resources/linkedin.svg';
import Resume from '../resources/resume.svg';
import resumeFile from '../../../resources/resume.pdf';
import './styles.css';

class MobileNavbar extends React.Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                clicked: !prevState.clicked
            }
        })
    }

    showLinks = (clicked) => {
        if (clicked) {
            return 'show-nav--mobile'
        }
    }

    showIcon = (clicked) => {
        if (clicked) {
            return 'fa-times'
        } else {
            return 'fa-bars'
        }
    }
    
    renderLinks = (links) => {
        return links.map(link => {
            // return <li key={link.title}><Link onClick={this.handleClick} className="menu-link--mobile" to={link.url}><span>{link.title}</span></Link></li>  
            return <li key={link.title}><Link onClick={this.handleClick} className="menu-link--mobile" to={link.url}>{link.title}</Link></li>  
        });
    }

    render() {
        return(
            <div>
                <div className="nav__logo"><Link to="/">AaronWilliams.dev</Link></div>
                <i className={`fa icon--mobile ${this.showIcon(this.state.clicked)}`} onClick={this.handleClick}></i>
                <nav className={`navbar--mobile ${this.showLinks(this.state.clicked)}`}>
                    <ul>
                        {this.renderLinks(navLinks)}
                        <div>
                            <a href="https://www.linkedin.com/in/aaronmawilliams/" target="_blank" rel="noreferrer">
                                <img alt="linkedin logo" className="nav__icon--mobile linkedin-icon" src={LinkedIn} />
                            </a>
                            <Link to={resumeFile} target="_blank" download>
                                <img alt="resume logo" className="nav__icon--mobile resume-icon" src={Resume} />
                            </Link>
                        </div>
                    </ul>
                </nav>
            </div>
        );
    }
};

export default MobileNavbar;