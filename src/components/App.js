import React from 'react';
import Header from './Header';
import Home from './Home';
import '../styles/App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
            </div>
        );
    };
};

export default App;