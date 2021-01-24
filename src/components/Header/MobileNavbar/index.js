import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../../../resources/nav-links';
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
            return <li key={link.title}><Link onClick={this.handleClick} className="menu-link--mobile" to={link.url}>{link.title}</Link></li>  
        });
    }

    render() {
        return(
            <div>
                <i className={`fa icon--mobile ${this.showIcon(this.state.clicked)}`} onClick={this.handleClick}></i>
                <nav className={`navbar--mobile ${this.showLinks(this.state.clicked)}`}>
                    <ul>
                        {this.renderLinks(navLinks)}
                    </ul>
                </nav>
            </div>
        );
    }
};

export default MobileNavbar;