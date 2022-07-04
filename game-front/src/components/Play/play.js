import './play.css';
import {useState, useEffect} from 'react';
import {Popup} from '../Popup/popup';
import {Console} from '../Terminal/Console';
import { DisplayOutput } from '../Terminal/DisplayOutput';

export const Play = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState("all");
    const changeStep = (step) =>{
            setStep(step);
            console.log(step + " step changed");
     }
    const toggleGroup = () => {
        
        setIsOpen(!isOpen);
        if(isOpen === true) {
            setStep("all");
        }
    }
    
    return(
        <div className="play-container">
            <div className="game">
                <div className="terminal">
                    <div className="os">
                        <select className='select' defaultValue="Linux">
                            <option value="unix-linux">Linux</option>
                            <option value="windows">Windows</option>
                        </select>
                    </div>
                    <div className="code">
                        <Console />
                
                    </div>
                </div>
                <div className="intro">
                    
                </div>
            </div>
            <button className="save-progress" onClick = {() => setIsOpen(true)}>
                Save my progress
            </button>

            <Popup isOpen = {isOpen} toggleGroup = {toggleGroup} step = {step} changeStep= {changeStep}/>
        </div>
        
        
    )
}