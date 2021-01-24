import React from 'react';
import { Link } from 'react-router-dom';
import { footerColumns } from '../../resources/footer-links';
import './styles.css';


const Footer = () => {
    const date = new Date();

    const renderFooterColumns = (columns) => {
        return columns.map(column => {
            return (
                <div className="footer--column" key={column.title}>
                    <h3>{column.title}</h3>
                    <ul>
                        {column.items.map((item) => {
                            return <li key={item.title}><Link className="footer--column--link" to={item.url}>{item.title}</Link></li>
                        })}
                    </ul>
                </div>
            );
        });
    }

    return (
        <footer>
            <div className="footer--logo">
                <div className="footer--logo--col1">
                    <h3><Link className="footer--logo--links" to="/">AaronWilliams.dev</Link></h3>
                </div>
                <div className="footer--logo--col1">
                    <h3><Link className="footer--logo--links" to="/contact">Contact Me</Link></h3>
                    <p><a href="mailto:contact@aaronwilliams.dev">contact@aaronwilliams.dev</a></p>
                    <p><a href="tel:2605800514">260.580.0514</a></p>
                </div>
            </div>
            <div className="footer--columns">
                {renderFooterColumns(footerColumns)}
            </div>
            <div className="footer--legal">
                <span>&#169; {date.getFullYear()} AaronWilliams.dev - </span><span>All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;