import React from 'react';
import avatar from './images/avatar.svg';
import svgDesign from './images/svg-design.svg';
import './styles.css';

const About = () => {
  return (
    <div>
        <div className="about-me__container">
                <div className="background__design--container">
                    <img alt="svg design" className="background__design" src={svgDesign} />
                </div>
                <img alt="vacation" className="about-me__avatar" src={avatar} />
                <div className="about-me__text">
                    <h1 className="about-me__text--h1">Get to Know Me</h1>
                    <div className="about-me__text--p">
                        <p>
                            Hi, my name is Aaron Williams. I am a lifelong learner and enjoy solving challenging problems. I enjoy spending
                            time with my family, riding bikes, discovering new places, being outdoors, flying my drone, and playing board
                            games.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default About;