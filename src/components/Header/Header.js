import React from 'react';
import Navbar from './Navbar/Navbar';
import '../../styles/Header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Navbar />
            </header>
        );
    };
};

export default Header;