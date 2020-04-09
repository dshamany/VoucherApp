import React from 'react';
import './Styles.css';

function Landing(props){
    return (
        <div className="main-container">
            <div className="landing" id={props.id}>
                <h1>Landing</h1>
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

export default Landing;