import {Link, Router, Route} from 'react-router-dom';
import '../Popup/popup.css';
import {useState, useEffect} from 'react';
import {SignUp} from '../SignUp/sign-up';

export const MainPopup = (props) => {
 
    return(
                <div className="main-cont">
                        <div className="message">
                            <p>Sign up to save your progress</p> 
                        </div>
    
                        <div className="sign-in-btn" onClick={ () => {props.changeStep("sign-up")} }>
                            <p>Sign up</p>
                        </div>
                        <div className="message-bottom">
                            Already has an account? <span className="sign-up-btn" onClick={() => props.changeStep("sign-in")}>Sign in</span>
                        </div>
                </div>
   )
};