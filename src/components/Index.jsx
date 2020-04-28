import React from 'react';
import './Styles.css';

import Landing from './Landing';
import About from './About';
import Signup from './Signup';

function Index(props) {
    return (
        <div>
            <div id="navbar">

                <div className="logo-container">
                    <a href="/#">
                        <img id="logo" src="https://i.imgur.com/TpRJ9wg.png" alt="company logo"/>
                    </a>
                </div>
                    <ul>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#signup">Sign Up</a></li>
                    </ul>
            </div>

            <div className="main-container">
                <Landing id="landing" />
                <About id="about" />
                <Signup id="signup" />
            </div>
        </div>
    )
}

export default Index;