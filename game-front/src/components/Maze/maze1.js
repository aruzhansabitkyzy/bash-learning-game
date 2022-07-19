import './maze.css';
import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import mazes from './Mazes.js';
import Player from '../Maze/Player';
import {Console} from '../Terminal/Console';
const player = new Player();
export const Maze1 = (props) => {
    const mazeArray  = mazes;
    const roadHeight =15;
    const roadWidth = 30;
    const renderMaze = (context) => {
        for(let i=0;i<mazeArray.length;i++) {
            for(let j=0;j<mazeArray[i].length;j++) {
                context.beginPath();
                context.rect(j*roadWidth,i*roadHeight,roadWidth, roadHeight);
                context.fillStyle = mazeArray[i][j] === 0 ? 'white' : '#e66767';
                context.fill();
                context.closePath();
            }
        }
        
    }
    const canvasRef= useRef(null);
        useLayoutEffect(() => {
            const animate = () => {
                requestAnimationFrame(animate);
            }
        })
         
        const updatePos = (context) => {
            player.update(props.consoleInput, props.def);
            player.draw(context);
        }
    
    useEffect(() => {  
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        renderMaze(context);
        updatePos(context)
    }, [props.entered]); 
    
    useEffect(()=> {
        console.log(player.state.xoffset  + " x before and y " +  player.state.yoffset);
       player.state = {
        ...player.state, 
        xoffset:  player.state.xoffset = 15,
        yoffset: player.state.yoffset = 15 * 9.5,
        counter : player.state.counter = 0
       }
       console.log(player.state.xoffset + " x after and y " + player.state.yoffset);
    }, [props.level])
    
    
    return(
            <div id="mazeContainer">
                    {/* <img src={require("../../icons/ghost-removebg-preview.png")} width="30px" height="30px"/> */}
                  <canvas style={{position: "relative"}} ref={canvasRef} id="mazeCanvas" className="border" width="300px" height="150px">
                  </canvas>
                  {/* <div style = {{position: "absolute" , top: 10}}>Hello</div> */}
            </div>

    )
}