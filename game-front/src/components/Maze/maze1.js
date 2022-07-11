import './maze.css';
import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import mazes from './Mazes.js';
import {Player} from '../Maze/Player';
import {Console} from '../Terminal/Console';


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
    // const changeMotion = (event) => {
    //     console.log(event);
    // }
    useLayoutEffect(() => {
        const animate = () => {
            requestAnimationFrame(animate);
            
        }
    })
    console.log(props.consoleInput + " ci");    
    useEffect(() => {  
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        renderMaze(context);
        const player = new Player(15, roadHeight * 9.5);
        player.update(context, props.consoleInput);
        player.draw(context);
        
    }, [renderMaze]); 
    



    return(
            <div id="mazeContainer">
                    {/* <img src={require("../../icons/ghost-removebg-preview.png")} width="30px" height="30px"/> */}
                  <canvas style={{position: "relative"}} ref={canvasRef} id="mazeCanvas" className="border" width="300px" height="150px">
                  </canvas>
                  {/* <div style = {{position: "absolute" , top: 10}}>Hello</div> */}
            </div>

    )
}