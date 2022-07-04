import {useRef, useEffect, useState } from 'react';
import {Prompt} from '../Terminal/Prompt';

export const DisplayOutput = ({consoleOutput}) => {
    const [scroll, setScroll] = useState(0);
    const scrollRef= useRef();

    useEffect(() => {
        if(scrollRef.current) {
          scrollRef.current.scrollTop = scroll;
        //  console.log(scrollRef.current.scrollTop );
        //  console.log(scrollRef.current.scrollHeight );
        }
    }) 

    const onScroll = () => {
        setScroll(scrollRef.current.scrollTop);
        
    }
    console.log(scrollRef.current?.scrollTop, scroll)
    return(

        <>
            <div className="out" ref={scrollRef} onScroll={onScroll}>
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