import React from 'react';
import Computer from './images/computer.svg';
import ellipse from './images/ellipse.svg';
import './styles.css';

const Home = () => {
    return(
        <div className="home-wrapper">
            <div className="hero__image">
                <img alt="circle decoration"class="ellipse-svg" src={ellipse} />
                <img alt="computer" class="computer-svg" src={Computer} />
            </div>
            <div className="hero__text">
                <h1 class="hero__text--heading">Web Developer</h1>
                <div class="hero__text--subheading">and Lifelong Learner</div>
            </div>
        </div>
    );
}

export default Home;