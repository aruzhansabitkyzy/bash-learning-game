import {Link, Router, Route} from 'react-router-dom';
import '../Popup/popup.css';
import {useState, useEffect} from 'react';
import {SignUp} from '../SignUp/sign-up';
import { MainPopup } from '../MainPopUp/main-popup';
import {SignIn} from '../SignIn/sign-in';


export const Popup = (props) => {
  
    //  useEffect(() => {
    //     console.log(step);
    //  }, [])
    return( 
    (props.isOpen) ? (

        <div className="popup-container">
                <div className="close">
                    <img src={require("../../icons/close.png")} onClick = {props.toggleGroup} className="close-icon"></img>
                </div>
                {props.step==="all" && <MainPopup isOpen = {props.isOpen} toggleGroup={props.toggleGroup} changeStep = {props.changeStep} />}
                {props.step==="sign-in" && <SignIn />}
                {props.step==="sign-up" && <SignUp />}
        </div>
    ) : null
   
   )
};