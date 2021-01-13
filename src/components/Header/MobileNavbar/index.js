import React from 'react';
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
            return 'showNav'
        }
    }

    showIcon = (clicked) => {
        if (clicked) {
            return 'fa-times'
        } else {
            return 'fa-bars'
        }
    }

    render() {
        return(
            <div>
                <i className={`fa icon ${this.showIcon(this.state.clicked)}`} onClick={this.handleClick}></i>
                <nav className={`navbar ${this.showLinks(this.state.clicked)}`}>
                    <ul>
                        <li><a onClick={this.handleClick} className="menuLink" href="#">Skills</a></li>
                        <li><a onClick={this.handleClick} className="menuLink" href="#">Projects</a></li>
                        <li><a onClick={this.handleClick} className="menuLink" href="#">Widgets</a></li>
                        <li><a onClick={this.handleClick} className="menuLink" href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
};

export default MobileNavbar;