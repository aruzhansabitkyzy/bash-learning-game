import './play.css';
import {useState, useEffect, useRef, render} from 'react';
import {Console} from '../Terminal/Console';
import { DisplayOutput } from '../Terminal/DisplayOutput';
import { Maze1 } from '../Maze/maze1';
import {Commands} from './commands';
import {useOnEnter} from '../Terminal/useOnEnter';
import Player from '../Maze/Player';


export const Play = (props) => {
    const [level, setLevel] = useState(1);
    const [def, setDef] = useState({});
    
    // const [commands, setCommands] = useState({commands :{}});
    // const [task, setTask] = useState({task : {}});
    const tasks = [
        {
            id: 1,
            title : "Hey! Welcome to “GameName”! Have fun learning terminal commands!",
            commands: [
                ["cd", "change directory. This command allows users to change from one directory to another or move from one folder to another."],
                ["pwd","prints the current working directory"],
                ["ls","lists all files in the current directory except for hidden files"],
                ["mkdir","allows users to create or make new directories.  mkdir stands for make directory"],
                ["rmdir","removes each directory specified on the command line, if they are empty."]
            ],
            task_title : "In the first level you should :",
            task : [
                "show your current path",
                "go to folder Desktop",
                "list all folder on Desktop",
                "remove the first folder on Desktop",
                "go to the second folder",
                'create a new folder called “Finish”'
            ],
            valid_answer : ['pwd' , 'cd Desktop' , 'ls' , 'rmdir first' , 'cd second', 'mkdir Finish'],
            maze: 1
        },
        {
            id: 2,
            title : "Hey! Welcome to “GameName”! Have fun learning terminal commands!",
            commands: [
                ["cd", "change directory. This command allows users to change from one directory to another or move from one folder to another."],
                ["pwd","prints the current working directory"],
                ["ls","lists all files in the current directory except for hidden files"],
                ["mkdir","allows users to create or make new directories.  mkdir stands for make directory"],
                ["rmdir","removes each directory specified on the command line, if they are empty."]
            ],
            task_title : "In the second level you should :",
            task : [
                "show your current path",
                "go to folder Desktop",
                "list all folder on Desktop",
                "remove the first folder on Desktop",
                "go to the second folder",
                'create a new folder called “Finish”'
            ],
            valid_answer : ['pwd' , 'cd' , 'ls' , 'rmdir' , 'mkdir'],
            maze: 1
        }
    ]
    const [height, changeHeight] = useState(0);
     const triggerHeight = () => {
        changeHeight(height + 1);
     }
    const scrollRef= useRef();

    useEffect(() => {
        if(scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;   
        }
    }, [height]); 

    useEffect(() => { 
       tasks.map((task) => {
            if(task.id == level) { 
                setDef(task);
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
    const comm = Commands(def);
    const cList = comm[0][0];
        let title = cList?.definition.title;
        let task_title = cList?.definition.task_title;
        let commands = cList?.definition.commands;
        let task = cList?.definition.task;
        let valid_answer = cList?.definition.valid_answer;
    
    return(
        <div className="play-container">
            <div className="game">
                <div className="title">
                     <div className="logo">
                        Game name goes here
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
                        <div className = "def_title">
                           {title}
                        </div>
                        <div className = "def_commands">
                            {commands?.map((command) => (
                                <div className="all_commands" key ={command}><span className="command_name">{command[0]} </span><span className="command_desc">{command[1]}</span></div>
                            ))}
                        </div>
                    
                       
                        <div className = "def_task_title">
                            {task_title}
                        </div>
                        <ul className = "def_task">
                            {task?.map((t, key) => (
                                <li className="task_desc" key = {t}>{t}</li>
                            ))}
                        </ul>
                     
              
                </div>

                <div className="terminal">
                    <div className="os">
                        <select className='select' defaultValue="Linux">
                            <option value="unix-linux">Linux</option>
                            <option value="windows">Windows</option>
                        </select>
                    </div>
                    <div className="code" ref={scrollRef}>
                        <Console height = {height} triggerHeight = {triggerHeight} consoleInput = {props.consoleInput} updateConsoleInput = {props.updateConsoleInput} entered = {props.entered} setEntered = {props.setEntered}/>
                    </div>
                 
                </div>
                <div className = "next">
                    <button className="btm-btn" onClick= {() => changeLevel("next")}>
                        Next
                    </button>
                </div>
                
            </div>
            <div className  = "maze">
                <div className = "maze-inner">
                <Maze1 consoleInput = {props.consoleInput} updateConsoleInput = {props.updateConsoleInput} entered = {props.entered} setEntered = {props.setEntered} def ={def} level = {level}/>
                </div>
            </div> 
        </div>
        
        
    );
  }