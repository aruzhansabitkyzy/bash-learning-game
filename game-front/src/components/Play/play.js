import './play.css';
import {useState, useEffect, useRef} from 'react';
import {Console} from '../Terminal/Console';
import { DisplayOutput } from '../Terminal/DisplayOutput';

export const Play = () => {
    const [level, setLevel] = useState(1);
    const [definition, setDefinition] = useState();
    const tasks = [
        {
            id: 1,
            definition: 'Once you have a folder, you can move into it using the cd command. cd means change directory. You invoke it specifying a folder to move into. You can specify a folder name, or an entire path.\n Inside a folder you can list all the files that the folder contains using the ls command:',
            valid_answer : ['pwd' , 'cd' , 'ls' , 'rmdir' , 'mkdir'],
            maze: 1
        }
        , 
        {
            id : 2,
            definition : 'Loremvfnvjfndvknvkf v fndvjk dfjkfndv fdvnfdvn kf',
            valid_answer: ['hey', 'efeh'],
            maze: 2
        }
    ]
    const [height, changeHeight] = useState(0);
     const triggerHeight = () => {
        console.log("triggered");
        changeHeight(height + 1);
     }
    const scrollRef= useRef();

    useEffect(() => {
        if(scrollRef.current) {
            console.log(scrollRef.current.scrollTop + " top");
            console.log(scrollRef.current.scrollHeight + " height");
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;   
        }
    }, [height]); 

    useEffect(() => {
       tasks.map((task) => {
            if(task.id == level) {
                console.log(task.id + " " + level)
                setDefinition(task.definition);
                return task;
            }
            else {
                return null;
            }
          });   
    }, [level])

    const changeLevel = (direction) => {

        switch(direction) {
            case "previous" :
                if(level - 1 > 0) {
                    setLevel(level-1);
                } break;
            case "next" : 
                if(level + 1 <= 5) {
                    setLevel(level+1);
                } break;
        }
       
    }
    return(
        <div className="play-container">
            <div className="game">
                <div className="title">
                     <div className="logo">
                        Title goes here
                     </div>
                     <div className="levels">
                        <span className="arrow" onClick={() => changeLevel("previous")}>
                            <span id="triangle-left"></span>
                        </span>
                        <span className="level">
                            <span id = "level_text">Level </span>
                            <span id ="current_level">{level} </span>
                            <span id = "level_of">of </span>
                            <span id ="last_level">5</span>
                        </span>
                        <span className="arrow"  onClick={() => changeLevel("next")}>
                            <span id="triangle-right"></span>
                        </span>
                     </div>
                </div>

                <div className="definition">
                    <p>{definition}</p>
                </div>

                <div className="terminal">
                    <div className="os">
                        <select className='select' defaultValue="Linux">
                            <option value="unix-linux">Linux</option>
                            <option value="windows">Windows</option>
                        </select>
                    </div>
                    <div className="code" ref={scrollRef}>
                        <Console height = {height} triggerHeight = {triggerHeight}/>
                
                    </div>
                 
                </div>
                <div className = "next">
                    <button className="btm-btn">
                        Next
                    </button>
                </div>
                
            </div>
            <div className  = "maze">
               {/* Maze goes here */}
            </div> 
        </div>
        
        
    )
}