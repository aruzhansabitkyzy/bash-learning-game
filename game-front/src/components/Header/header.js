import {useState, useEffect } from 'react';
import './header.css';

export const Header = () => {
    return (
         <div className="container inconsolas">
            <div className='logo'>
                {/* <img className="logo-icon" src="./icon.png"></img> */}
                {/* <span className="logo-icon"></span> */}
                <div className="logo-icon"></div>
                <p className="logo-text">logo</p>
            </div>
            <div className="account">
                <div className="sign-up">
                    <input type="text" className="header_input"></input>
                    <button className="sign-up-button inconsolas">Sign in</button>
                </div>
            </div>
         </div>
    );
};
