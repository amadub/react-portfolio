import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import '../styles/App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/skills" component={Skills} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    };
};

export default App;