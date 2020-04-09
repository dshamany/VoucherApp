import React from 'react';
import './Styles.css';

function Signup(props){
    return (
        <div className="main-container" id={props.id}>
            <div className="signup">
                <h1>Signup</h1>
                <div className="signup-form">
                    <input 
                        placeholder='Full Name'
                        type='text'
                    />
                    <input 
                        placeholder='Email Address'
                        type='email'
                    />
                </div>
                <div className="action-bar">
                    <input
                        className='btn submit'
                        type='button'
                        value='Submit'
                        onClick={() => console.log('Clicked')}
                    />
                </div>
            </div>
        </div>
    )
}

export default Signup;