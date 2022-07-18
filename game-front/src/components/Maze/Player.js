class Player {
   
    constructor(props) {
        
        this.state = {
            xoffset : 15,
            yoffset : 15 * 9.5,
            counter : 0
        }; 
        
        // this.position = {
        //     x : posx,
        //     y : posy
        // }
        // this.velocity = {
        //     xVel : 10,
        //     yVel : 10
        // }
        this.width = 30;
        this.height = 20;
        // this.setPosX = setPosX; 
        // this.setPosY = setPosY;
    }   
    draw(context) { 
        context.beginPath();
        context.arc(this.state.xoffset, this.state.yoffset, 5,  0, Math.PI * 2);
        context.fillStyle="#394eb8";
        context.fill();
        
        // const image = new Image();
        // console.log(context.drawImage + " player");
        // image.src= 'https://img.icons8.com/doodle/344/stan-marsh.png';
        // image.onload  = () => {
        //     context.drawImage(image, this.position.x , this.position.y, this.width, this.height);
        // }
    } 
    
    update(consoleInput, def) {  
        const answers = def?.valid_answer;
        if(answers) {
          
                    if(answers[this.state.counter] === consoleInput) {
                        this.state = {
                            ...this.state,
                            counter : this.state.counter + 1
                        }
                        console.log(this.state.counter);
                        this.move();
                    }
        }
    }

    move() {
        switch(this.state.counter) {
            case 1:    this.state = {
                            ...this.state,
                            xoffset: this.state.xoffset + 75,
                        };
                        break;
            case 2:     this.state = {
                            ...this.state,
                            yoffset: this.state.yoffset - 75
                        };
                        break;
            case 3:    this.state = {
                            ...this.state,
                            xoffset: this.state.xoffset + 65
                        };
                        break;
            case 4:  this.state = {
                        ...this.state,
                        xoffset: this.state.xoffset + 20,
                        yoffset: this.state.yoffset + 50
                    };
                    break;
            case 5: this.state = {
                        ...this.state,
                        xoffset: this.state.xoffset + 75
                    };
                    break;
            case 6: this.state = {
                        ...this.state,
                        xoffset: this.state.xoffset + 30,
                        yoffset: this.state.yoffset - 105
                    };
                    console.log(this.state.counter + " moved");
                    break;
        }
    }

}

export default Player