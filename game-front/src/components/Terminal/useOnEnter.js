import {useState} from 'react';

export const useOnEnter = (props) => { 
    const commands = {
        help: "help entry",
        quit: "quitting"
    }
    const [consoleOutput, updateConsoleOutput]  = useState([]);
    // const [consoleInput, updateInputConsole] = useState([]);
    

    console.log(consoleOutput);
    const onEnter = (value, key) => {
       
         if(key === "Enter") {
            const newConsoleLine = commands[value] || "Invalid Command";
             updateConsoleOutput([...consoleOutput, `${value}:${newConsoleLine}`]);
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