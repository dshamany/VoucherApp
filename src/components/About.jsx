import React from 'react';
import './Styles.css';

function About(props) {
    return (
        <div className="main-container">
            <div className="about" id={props.id}>
                <div className="content">
                    <h1>About Us</h1>
                    <h2>Augoura is a place for you to digitize customer experience and tailor it to your needs. Your regulars will appreciate the discounts, and you will appreciate the foot-traffic. The entire procedure takes three easy steps:</h2>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td><h1>1.</h1></td>
                            <td><h2>Customize Offerings</h2></td>
                        </tr>
                        <tr>
                            <td><h1>2.</h1></td>
                            <td><h2>Scan Customer QR Code</h2></td>
                        </tr>
                        <tr>
                            <td><h1>3.</h1></td>
                            <td><h2>Register Purchase and Track Customer Progress</h2></td>
                        </tr>
                    </tbody>
                </table>
                <div className="btn" style={{ width: 300, height: 70 }}>
                    <a href="#signup"><h1>Sign Up Now!</h1></a>
                </div>
            </div>
        </div>
    )
}

export default About;