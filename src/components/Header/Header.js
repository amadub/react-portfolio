import React from 'react';
import MediaQuery from 'react-responsive';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';
import '../../styles/Header.css';
import { breakpoints } from '../../mediaQueries/deviceSizes';

class Header extends React.Component {
    render() {
        return (
            <header>
                <MediaQuery minWidth={breakpoints.tablet.minWidth}>
                    <Navbar />
                </MediaQuery>
                <MediaQuery maxWidth={breakpoints.phone.maxWidth}>
                    <MobileNavbar />
                </MediaQuery>
            </header>
        );
    };
};

export default Header;