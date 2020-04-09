import React from 'react';
import './Styles.css';

function About(props){
    return (
        <div className="main-container">
            <div className="about" id={props.id}>
                <h1>About</h1>
                <input
                    className='btn'
                    type='button'
                    value='Test'
                    onClick={() => console.log('Clicked')}
                />
            </div>
        </div>
    )
}

export default About;