import React, { useState } from 'react';
import './Styles.css';

import {enlistPerson } from '../utils/signup';

function Signup(props) {

    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className="main-container" id={props.id}>
            <div className="signup">
                <h1>Signup</h1>
                <div className="signup-form">
                    <input
                        placeholder='Full Name'
                        type='text'
                        value={fullname}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <input
                        placeholder='Email Address'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="action-bar">
                    <input
                        className='btn submit'
                        type='button'
                        value='Submit'
                        onClick={() => {
                            const payload = {
                                fullname,
                                email
                            }
                            if (fullname && email) {
                                enlistPerson(payload);
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Signup;