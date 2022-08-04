import {useEffect, useState} from 'react';

export const useOnEnter = (props) => { 
     
    const commands = {

        cd: "Directory has been changed",
        ls: "The list of directories"
    }
    const triggerOnEnter = () => {
        props.setEntered(!props.entered);
        console.log("trigger");
    }
    const [consoleOutput, updateConsoleOutput]  = useState([]); 
    const onEnter = (value, key) => { 
         if(key === "Enter") { 
            triggerOnEnter();
            const newConsoleLine = commands[value] || "Invalid Command"; 
             updateConsoleOutput([...consoleOutput, `${value}:${newConsoleLine}`]);
             
             props.updateConsoleInput(value);
             console.log(props.consoleInput +" hey"); 
             props.triggerHeight(); 
            // const newConsoleInput = [...consoleInput];
            // newConsoleInput.push(value);
            // updateInputConsole(newConsoleInput);

            // const newConsoleOutput = [...consoleOutput];
            // newConsoleOutput.push(newConsoleLine);
            // updateConsoleOutput(newConsoleOutput); 
        } 
       
    }
    return [consoleOutput, onEnter];
}