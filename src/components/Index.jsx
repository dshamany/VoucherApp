import React from 'react';
import './Styles.css';

import Landing from './Landing';
import About from './About';
import Signup from './Signup';

function Index(props){
    return (
        <div className="main-container">
            <Landing />
            <About />
            <Signup />
        </div>
    )
}

export default Index;