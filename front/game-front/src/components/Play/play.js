import './play.css';
import {useState, useEffect, useRef, render} from 'react';
import {Console} from '../Terminal/Console';
import Confetti from 'react-confetti';
import { DisplayOutput } from '../Terminal/DisplayOutput';
import {Commands} from './commands';
import {useOnEnter} from '../Terminal/useOnEnter';
import {Routes, Route} from 'react-router-dom';
import useDidMountedEffect from './useDidMountedEffect';
import {Popup} from './popup';
import {useWindowSize} from 'react-use';

export const Play = (props) => {
    const [level, setLevel] = useState(1);
    const [def, setDef] = useState({});
    const [show, setShow] = useState(false);
    const [showPopup, setPopup] = useState(false)
    const [consoleInput, setConsoleInput] = useState([]);
    const {w, h} = useWindowSize();
    // const [commands, setCommands] = useState({commands :{}});
    // const [task, setTask] = useState({task : {}});
    const tasks = [
        {
            id: 1,
            title : "Hey! Welcome to “ShelLite”! Have fun learning terminal commands!",
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
                "go to Desktop",
                "list all folder on Desktop",
                "remove the first folder “Start” on Desktop",
                "go to the second folder “project”",
                'create a new folder called “Finish”'
            ],
            valid_answer : ['pwd' , 'cd Desktop' , 'ls' , 'rmdir Start' , 'cd project', 'mkdir Finish'],
        },
        {
            id: 2,
            title : "Congratulations, you passed the first level! Are you ready to challenge yourself even more? Good luck!",
            commands: [
                ["cp", " copies a file. Hint: cp oldFile newFile"],
                ["open","opens a file. (open . ) opens a current directory. the same command can be used to run the application     Hint: open file"],
                ["touch"," creates a new file"],
                ["gzip","- compresses the file and append a .gz extension to it. but the original file will be deleted. To prevent this, you can use the `-c` option and use output redirection to write the output to the `filename.gz` Hint: gzip -c filename.txt > filename.txt.gz"],
                ["gunzip","decompresses the file.         Hint: gunzip filename.gz ."]
            ],
            task_title : "In the second level you should :",
            task : [
                "create a new file called “Vegetables”",
                "copy the contents of file “Fruits” to “Vegetables”",
                "open the file “Vegetables”",
                "compress the folder “Vegetables” ",
                "decompress the just compressed folder to the file with the same name as gzip file",
            ],
            valid_answer : ['touch vegetables.txt' , 'copy fruits.txt vegetables.txt' , 'open vegetables.txt' , 'cd food.txt' , 'gzip -c  vegetables > vegetables.gz', 'gunzip vegetables.gz'],
        },
        {
            id: 3,
            title : "",
            commands: [
                ["cat", "prints a file's content to the standard output: Hint: cat <file>"],
                ["diff"," is a handy command. Suppose you have 2 files, which contain almost the same information, but you can't find the difference between the two. diff will process the files and will tell you what's the difference.   Usage : diff <firstFile> <secondFile>"],
                ["less"," It shows you the content stored inside a file, in a nice and interactive UI. Once you are inside a less session, you can quit by pressing q. Usage: less <filename>.   "],
                ["sort","The sort command helps you sort them by name. Usage: sort <filename> "],
                ["mv","Once you have a file, you can move it around using the mvcommand. You specify the file current path, and its new path. This is how you rename files and folders. Usage: mv <firstFile> <secondFile>"] 
            ],
            task_title : "In the third level you should :",
            task : [
                "show contents of file backend-project",
                "display the difference of files back-res and back-new ",
                "rename the file back-res to back-old",
                "sort back-old and back-new separately",
                "show the contents of back-new",
                "quit the command less"
            ],
            valid_answer : ['cat backend-project' , 'diff back-res back-new' , 'mv back-res back-old' , 'sort back-old' , 'sort back-new', 'less back-new', 'q'],
        },
        {
            id: 4,
            title : "Congratulations, you passed the first level! Are you ready to challenge yourself even more? Good luck!",
            commands: [
                ["sudo", "Sudo stands for **SuperUser DO** and is used to access restricted files and operations. To make it work, use `sudo` before a restricted command. Sudo is commonly used to run a command as root.You can run `sudo -i` to start a shell as root. Also `sudo -k` — (kill)ends the current sudo privileges. You can use `sudo` to run commands as any user. `root` is the default, but use the `-u` option to specify another user: `sudo -u <username>`"], 
                ["who","displays all users logged in to the system. The special who am i command will list the current terminal session details "],
            ],
            task_title : "In the forth level you should :",
            task : [
                "start a shell as a root",
                "log in with username “admin” ",
                "end the current sudo privileges",
                "show all users logged in",
                "show current terminal session details",
            ],
            valid_answer : ['sudo -i' , 'sudo -u admin' , 'sudo -k' , 'who' , 'who am i'],
        },
        {
            id: 5,
            title : "",
            commands: [
                ["ping", "pings a specific network host, on the local network or on the Internet. Usage : ping <hostname> where <host>could be a domain name, or an IP address."],
                ["traceroute","gather all the information while the packet travels. Usage : traceroute <host>"],
                ["clear","clears all the previous commands that were run in the current terminal."],
                ["history","You can display all the history using this command"],
            ],
            task_title : "In the fifth level you should :",
            task : [
                "gather information about google.com while the packet travels",
                "ping to ip 10.58.216.164",
                "check the history",
                "clear the terminal",
            ],
            valid_answer : ['traceroute google.com' , 'ping 10.58.216.164' , 'history' , 'clear'],
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
    useDidMountedEffect(()=> {
        console.log("run")
           setTimeout(()=> {
               setShow(false)
           }, 2000)
        
    }, [show]) 
    const changeLevel = (direction) => {
        
        switch(direction) {
            case "previous" :
                if(level - 1 > 0) {
                    setLevel(level-1);
                } break;
            case "next" : 
                if(level + 1 <= 5) { 
                    if(tasks[level -1].valid_answer[tasks[level-1].valid_answer.length - 1] == consoleInput.slice(0,-1)) {
                        setLevel(level+1)
                        setShow(true)
                        setPopup(true)
                        console.log(level) 
                    } 
                    else {
                        setShow(false)
                    }
                } break
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
                <div className="task">
                    <div className="title">
                        <div className="logo">
                            ShelLite
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
                </div>
                <div className="terminal_cont">
                
                    <div className="terminal">
                        <div className="os">
                            <select className='select' defaultValue="Linux">
                                <option value="unix-linux">Linux</option>
                                <option value="windows">Windows</option>
                            </select>
                        </div> 
                        <div className="code" ref={scrollRef}>
                            <Console height = {height} triggerHeight = {triggerHeight} consoleInput = {consoleInput} setConsoleInput={setConsoleInput} updateConsoleInput = {props.updateConsoleInput} entered = {props.entered} setEntered = {props.setEntered} tasks= {tasks} level = {level}/>
                        </div>
                    
                    </div>
                    <div className = "next">
                        <button className="btm-btn" onClick= {() => changeLevel("next")}>
                            Next
                        </button>
                    </div>
                </div>
                
                  { level &&  show ? <Confetti
                    width = {w} 
                    height = {h}
                    tweenDuration={1000}
                    numberOfPieces={100}
                    /> 
                     : "" 
                  } 
                  {show ? <Popup showPopup = {showPopup} setPopup = {setPopup}/> : ""}
            </div>
            {/* <div className  = "maze">
                <div className = "maze-inner">
                <Maze1 consoleInput = {props.consoleInput} updateConsoleInput = {props.updateConsoleInput} entered = {props.entered} setEntered = {props.setEntered} def ={def} level = {level}/>
                </div>
            </div>  */}
        </div>
    );
  }