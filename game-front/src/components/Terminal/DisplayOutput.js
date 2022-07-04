import {useRef, useEffect } from 'react';
import {Prompt} from '../Terminal/Prompt';

export const DisplayOutput = ({consoleOutput}) => { 
    // const scrollRef= useRef();

    // useEffect(() => {
    //     if(scrollRef.current) 
    //       scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    // }) 
    return(
        <div className="out" >
          {consoleOutput.map((item) => (
            <div>
                <Prompt />
                <span style={{ color: 'white' }}>{item}</span>
            </div>
           ))}
          
        </div>
    )
}