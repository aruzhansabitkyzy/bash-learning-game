import {Link, Router, Route} from 'react-router-dom';
import '../Popup/popup.css';
import {useState, useEffect} from 'react';
import {SignUp} from '../SignUp/sign-up';


export const Popup = (props) => {
    
    const [step, setStep] = useState("all");
    const changeStep = (step) =>{
            setStep(step);
            console.log(step + " step changed");
     }
     useEffect(() => {
        console.log(step);
     }, [])
    return(
    (props.isOpen) ? (

        <div className="popup-container">
                <div className="close">
                    <img src={require("./close.png")} onClick = {props.toggleGroup} className="close-icon"></img>
                </div>
               
                <div className="main-cont">
                        <div className="message">
                            <p>Sign in to save your progress</p> 
                        </div>
                        <Link to="sign-in">
                        <div className="sign-up-btn" onClick={ () => {changeStep("sign-in")} }>
                            <p>Sign in</p>
                        </div>
                        </Link>
                        <div className="message-bottom">
                            Already has an account? <Link to="sign-up" onClick={() => changeStep("sign-up")}>Sign-up</Link>
                        </div>
                </div>
                
        </div>
    ) : null
   
   )
};