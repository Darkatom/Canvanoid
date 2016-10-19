import Solid from "./Solid.js";
import Board from "./Board.js";
import Ball from "./Ball.js";
import Sprite from "./Sprite.js";

export default class Paddle extends Solid {
    constructor(x, y) {
        super(x, y, 100, 20);
        this.sprite = new Sprite("./sprites/Vaus.png", 0, 0, this.width, this.height);

        this.speed = 500;
        this.movementVector = { x: 0, y:0 };

        this.click = false;
    }

    setDirection(x, y) {
        this.movementVector.x = x;
        this.movementVector.y = y;
    }

    start() {    
        // Keyboard Input    
        window.onkeydown = (e)=>{
            if (e.key == "a" || e.key == "A" || e.keyCode == 37) { // left key
                this.setDirection(-1, 0);
            } else if (e.key == "d" || e.key == "D" || e.keyCode == 39) { // right key
                this.setDirection(1, 0);
            }
		};     

        window.onkeyup = (e)=>{
            this.setDirection(0, 0);
		};

        window.onmousedown = (e)=> {
            this.click = true;
        };

        // Mouse Input
        window.onmousemove = (e)=> {
            if (this.click)
                this.position.x = e.clientX - this.width/2;
        };
        
        window.onmouseup = (e)=>{
            this.click = false;
		};
    }

    update(game) {
        super.update(game.balls);
        this.move(game.time.delta, game.board);
    }

    move(dt, board) {
        var x = this.position.x + this.movementVector.x*this.speed*dt;
        var y = this.position.y + this.movementVector.y*this.speed*dt;

        if (x + this.width >= board.position.x + board.width)
            x = board.position.x + board.width - this.width;
        
        else if (x <= board.position.x)
            x = board.position.x;

        this.setPosition(x, y);
    }


}
