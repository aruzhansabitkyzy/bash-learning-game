import {useRef, useEffect, useState } from 'react';
import {Prompt} from '../Terminal/Prompt';

export const DisplayOutput = ({consoleOutput}) => {
  
    
    return(

        <>
            <div className="out">
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    
                    {consoleOutput.map((text) => {
                       let res = text.split(":");


                       return <div style={{ color: 'white' }}>
                                 <div> <Prompt /> {res[0]}</div>
                                 <div> <Prompt /> {res[1]}</div>
                              </div>

                    })}
                </div>
            </div>
        </>
     
    )
}