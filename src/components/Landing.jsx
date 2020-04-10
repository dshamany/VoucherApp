import React from 'react';
import './Styles.css';

function Landing(props){
    return (
        <div className="main-container">
            <div className="landing" id={props.id}>
\                <img id="punch-card" src='https://imgur.com/5LwN8My.png' />
                <div id="landing-description">
                    <h1>Digitize Your Customer's Purchases</h1>
                    <p>Be part of a digital revolution that ensures customer value and retention.</p>
                </div>
            </div>
        </div>
    )
}
export default Landing;