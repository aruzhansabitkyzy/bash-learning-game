import './play.css';
import {useState, useEffect, useRef} from 'react';
import {Popup} from '../Popup/popup';
import {Console} from '../Terminal/Console';
import { DisplayOutput } from '../Terminal/DisplayOutput';
// import ScrollableFeed from 'react-scrollable-feed';

export const Play = () => {
    const [scroll, setScroll] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState("all");
    const changeStep = (step) =>{
            setStep(step);
     }
    const toggleGroup = () => {
        
        setIsOpen(!isOpen);
        if(isOpen === true) {
            setStep("all");
        }
    }
    const scrollRef= useRef();

    useEffect(() => {
        if(scrollRef.current) {
            // console.log(scrollRef.current.scrollTop + " top");
            // console.log(scrollRef.current.scrollHeight + " height");
            // scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            scrollRef.current.scrollIntoView({
                behavior: "smooth",
                block : "end",
                inline : "nearest"
            })
        }
    }) 
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
                    <div className="code" ref={scrollRef}>
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