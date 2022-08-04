import {useEffect, useState} from 'react';


export const useOnEnter = (props) => { 
     
    const [count, setCount] = useState(0);
    const [consoleOutput, updateConsoleOutput]  = useState([]); 
    useEffect(() => {
        if(Object.keys(props.consoleInput).length != 0) {
        let newConsoleLine = props.consoleInput.includes("1") == 1 ? "Correct" : "Incorrect";
        if(newConsoleLine === "Correct") {
            setCount(count+1)
        } 
        updateConsoleOutput([...consoleOutput, `${props.consoleInput.slice(0, -1)}:${newConsoleLine}`]);
        props.triggerHeight(); 
    }
    }, [props.consoleInput]) 

    const onEnter = (value, key) => { 
         if(key === "Enter") { 
            if(value == props.tasks[props.level - 1].valid_answer[count]) {
                props.setConsoleInput(value + "1")
            } 
            else {
                props.setConsoleInput(value)
            }
           
        } 
       
    }
    return [consoleOutput, onEnter];
}