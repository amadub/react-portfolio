import React from 'react';
import './styles.css';

/* Images */ 
import dockerImage from './images/docker.svg';
import pythonImage from './images/python.svg';
import nodeImage from './images/nodejs.svg';
import reactImage from './images/reactjs.svg';
import cssImage from './images/css3.svg';
import k8sImage from './images/kubernetes.svg';
import jsImage from './images/js.svg';
import html5Image from './images/html5.svg';


const Skills = () => {
  return (
    <div>
      <div className="skills__container">
        <h1 className="skills__heading">Skills and Tools</h1>
        <div className="skills__icons__container">
          <img alt="skills logo" className="skills__icon" src={pythonImage} />
          <img alt="skills logo" className="skills__icon" src={dockerImage} />
          <img alt="skills logo" className="skills__icon" src={cssImage} />
          <img alt="skills logo" className="skills__icon" src={html5Image} />
          <img alt="skills logo" className="skills__icon" src={jsImage} />
          <img alt="skills logo" className="skills__icon" src={nodeImage} />
          <img alt="skills logo" className="skills__icon" src={k8sImage} />
          <img alt="skills logo" className="skills__icon" src={reactImage} />
        </div>
      </div>
    </div>
  );
};

export default Skills;