import {useRef, useEffect} from 'react';
import {Prompt} from '../Terminal/Prompt';
import {useOnEnter} from '../Terminal/useOnEnter';
import { DisplayOutput } from './DisplayOutput';
import './terminal.css';

export const Console = () => {
    const inputText = useRef();
  
    const [consoleOutput, onEnter] = useOnEnter();

    useEffect(() =>{
        inputText.current.value = "";
        inputText.current.focus();  
    }); 
    
    
    return ( 
        <section className="cons">
              <DisplayOutput consoleOutput = {consoleOutput} />
             <div className= "input-prompt">
                <Prompt /> 
                <input type="text" className="command" ref={inputText} onKeyPress = {({target: {value} , key}) => onEnter(value, key)}/>
                 
             </div>
        </section>
        
    )
}