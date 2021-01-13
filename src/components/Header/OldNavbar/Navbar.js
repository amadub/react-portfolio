import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import { Button } from './Buttons';
import '../../../styles/Navbar.css';

class Navbar extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    };

    render() {
        return (
            <nav className="NavbarItems">
                <Link to="/">
                    <h1 className="navbar-logo">Portfolio<i className="fab fa-react"></i></h1>
                </Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={item.cName}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
                <Link to="/contact">
                    <Button>Contact Me</Button>
                </Link>
            </nav>
        );
    };
};

export default Navbar;