import './play.css';
import {useState, useEffect} from 'react';
import {Popup} from '../Popup/popup';

export const Play = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleGroup = () => {
        
        setIsOpen(!isOpen);
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
                        <span id="cursor"></span>
                    </div>
                </div>
                <div className="intro">
                    
                </div>
            </div>
            <button className="save-progress" onClick = {() => setIsOpen(true)}>
                Save my progress
            </button>

            <Popup isOpen = {isOpen} toggleGroup = {toggleGroup}/>
        </div>
        
        
    )
}