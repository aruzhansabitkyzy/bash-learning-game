import { Component } from "react";

class Player{
    constructor(posx, posy) {
        
        this.position = {
            x : posx,
            y : posy
        }
        this.velocity = {
            xVel : 10,
            yVel : 10
        }
        this.width = 30;
        this.height = 20;
        // this.setPosX = setPosX; 
        // this.setPosY = setPosY;
    }

    draw(context) { 
        context.beginPath();
        context.arc(this.position.x, this.position.y, 5,  0, Math.PI * 2);
        context.fillStyle="#394eb8";
        context.fill();
     
        
        // const image = new Image();
        // console.log(context.drawImage + " player");
        // image.src= 'https://img.icons8.com/doodle/344/stan-marsh.png';
        // image.onload  = () => {
        //     context.drawImage(image, this.position.x , this.position.y, this.width, this.height);
        // }
        console.log("done");
    }
    update(consoleInput, setPosX, setPosY) {
        console.log(consoleInput + "is input");
        if(consoleInput === 'pwd') {
            // console.log(this.props);

            setPosX( 75);
            // px +=  75;
            // console.log(px, py);
            // this.position.x = px;
            // this.position.y = py;
            // console.log(this.position.x + " , " + this.position.y);
        }
        else if(consoleInput === 'cd Desktop') { 
            setPosY(-75);
            // py -= 75;
            // this.position.x = px;
            // this.position.y = py;
            // console.log(px, py);
            // console.log(this.position.x + " , " + this.position.y);
        }
        else if(consoleInput === 'ls') {
            setPosX(65);
        }
    }
    
    // animate() {
    //     requestAnimationFrame(animate);
    // }
}

export default Player