import React from 'react';
import { navLinks } from '../navLinks';
import LinkedIn from '../resources/linkedin.svg';
import Resume from '../resources/resume.svg';
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
            return <li key={link.title}>{link.title}</li>  
        });
    }

    render() {
        return(
            <div>
                <i className={`fa icon--mobile ${this.showIcon(this.state.clicked)}`} onClick={this.handleClick}></i>
                <nav className={`navbar--mobile ${this.showLinks(this.state.clicked)}`}>
                    <ul>
                        {this.renderLinks(navLinks)}
                        <div>
                            <img alt="linkedin logo" className="nav__icon--mobile linkedin-icon" src={LinkedIn} />
                            <img alt="resume logo" className="nav__icon--mobile resume-icon" src={Resume} />
                        </div>
                    </ul>
                </nav>
            </div>
        );
    }
};

export default MobileNavbar;