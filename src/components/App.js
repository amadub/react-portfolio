import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Widgets from './Widgets';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import '../styles/App.css';

class App extends React.Component {
    render() {
        return (
            <div className="root">
                <BrowserRouter>
                    <Header />
                    <div className="content">
                        <Route  path="/" exact component={About}/>
                        <Route  path="/skills" component={Skills}/>
                        <Route  path="/widgets" component={Widgets}/>
                        <Route  path="/projects" component={Projects}/>
                        <Route  path="/contact" component={Contact}/>
                    </div>
                    <Footer />
                </BrowserRouter>
            </div>
        );
    };
};

export default App;