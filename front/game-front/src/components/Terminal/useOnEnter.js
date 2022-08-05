import {useEffect, useState} from 'react';


export const useOnEnter = (props) => { 
     
    const [count, setCount] = useState(0);
    const [consoleOutput, updateConsoleOutput]  = useState([]); 
    useEffect(() => {
        if(Object.keys(props.consoleInput).length != 0) {
            console.log(props.consoleInput + "  consoleinput")
        let newConsoleLine = props.consoleInput.includes("1") == 1 ? "Correct" : "Incorrect";
        if(newConsoleLine === "Correct") {
            console.log(newConsoleLine);
            setCount(count+1)
        } 
        updateConsoleOutput([...consoleOutput, `${props.consoleInput.slice(0, -1)}:${newConsoleLine}`]);
        props.triggerHeight(); 
    }
    }, [props.consoleInput]) 

    useEffect(() => {
         updateConsoleOutput([])
         setCount(0)
    }, [props.level])

    const onEnter = (value, key) => { 
         if(key === "Enter") { 
            console.log(value)
            console.log("level " + props.level)
            console.log(props.tasks[props.level - 1].valid_answer + "  each answer")
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