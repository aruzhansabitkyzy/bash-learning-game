export class Player {
    constructor(xPos, yPos) {
        this.position = {
            x : xPos,
            y : yPos
        }
        this.velocity = {
            xVel : 10,
            yVel : 10
        }
        this.width = 30;
        this.height = 20;
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
    update(context, consoleInput) {
        
    }
    
    // animate() {
    //     requestAnimationFrame(animate);
    // }
}
