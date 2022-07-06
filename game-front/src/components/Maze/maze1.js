import './maze.css';
import {useEffect, useRef, useState} from 'react';
import mazes from './Mazes.js';

export const Maze1 = () => {
    const mazeArray  = mazes;
    const roadHeight =15;
    const roadWidth = 30;
    const renderMaze = (context) => {
        for(let i=0;i<mazeArray.length;i++) {
            for(let j=0;j<mazeArray[i].length;j++) {
                context.beginPath();
                context.rect(j*roadWidth,i*roadHeight,roadWidth, roadHeight);
                context.fillStyle = mazeArray[i][j] === 0 ? 'grey' : 'green';
                context.fill();
                context.closePath();
            }
        }
    }
    const canvasRef= useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        renderMaze(context);
        const image = new Image();
        image.src='../../icons/ghost-removebg-preview.png';
        image.onload = () => {
           context.drawImage(image, 0,0);
        }
    }, [renderMaze]);


    return(
                <div id="mazeContainer">
                      {/* <img src={require("../../icons/ghost-removebg-preview.png")} width="30px" height="30px"/> */}
                  <canvas ref={canvasRef} id="mazeCanvas" class="border" >
                  
                  </canvas>
                </div>

    )
}