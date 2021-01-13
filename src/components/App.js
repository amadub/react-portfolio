import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import '../styles/App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Route  path="/" exact component={Home}/>
                    <Route  path="/about" component={About}/>
                    <Route  path="/skills" component={Skills}/>
                    <Route  path="/projects" component={Projects}/>
                    <Route  path="/contact" component={Contact}/>
                    <Footer />
                </BrowserRouter>
            </div>
        );
    };
};

export default App;