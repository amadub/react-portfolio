import React from 'react';
import Computer from './images/computer.svg';
import ellipse from './images/ellipse.svg';
import './styles.css';

const Home = () => {
    return(
        <div className="home-wrapper">
            <div className="hero__image">
                <img alt="circle decoration"className="ellipse-svg" src={ellipse} />
                <img alt="computer" className="computer-svg" src={Computer} />
            </div>
            <div className="hero__text">
                <h1 className="hero__text--heading">Web Developer</h1>
                <div className="hero__text--subheading">Lifelong Learner</div>
            </div>
        </div>
    );
}

export default Home;