import stages from './../stages.js';
import Solid from "./Solid.js";
import Brick from "./Brick.js";
import Ball from "./Ball.js";
import Sprite from "./Sprite.js";

export default class Board extends Solid {
	constructor() {
        var fakeBrick = new Brick(0,0,0,0);
        var selfW = fakeBrick.width * 13;
        var selfH = 600;
		super(canvas.width/2 - selfW/2, 
              canvas.height/2 - selfH/2, 
              selfW, selfH);

        this.stage = -1;
        this.bricks = null;

        this.sprite = new Sprite("./sprites/congruent_outline.png", 0, 0, 300, 300);
        this.clear = false; // true when all bricks, except inmortal ones, have been destroyed.
	}

    setStage ( stage ) {
        if (this.stage != stage) {
            this.stage = stage;
            
            var fakeBrick = new Brick(0,0,0,0);
            this.bricks = [];
            
            var map = stages[this.stage];
            for (var row = 0; row < map.length; row++) 
                for (var column = 0; column < map[row].length; column++)
                    this.bricks.push( new Brick(this.position.x + fakeBrick.width*column, 
                                                this.position.y + fakeBrick.height*row, 
                                                map[row][column], this.stage) 
                                    );
            
        }
    }

    draw(ctx) {
        super.draw(ctx);        
        for (var br of this.bricks) 
            br.draw(ctx);
    }

    update( game ) {
        super.update(game.balls);
        
        this.clear = true;
        for (var br of this.bricks) {
            br.update(game.balls);
            this.clear = this.clear && br.inmortal; // if only inmortal bricks remain, the stage is cleared.
            if (br.life <= 0) {
                this.bricks.splice(this.bricks.indexOf(br), 1);
                game.state.score += br.value;
                br = null;
            } 
        }
    }

	collision( ball ) {
        if (ball.movementVector.y > 0) { // comes from up
            if (ball.position.y + ball.radius >= this.position.y + this.height ) { // south wall
                ball.setDirection(ball.movementVector.x, -ball.movementVector.y);  // change movement vertically
                ball.setPosition(ball.position.x, this.position.y + this.height - ball.radius);
            }
            
        } else if (ball.movementVector.y < 0) { // comes from down
            if (ball.position.y - ball.radius <= this.position.y) {	// north wall                
                ball.setDirection(ball.movementVector.x, -ball.movementVector.y);  // change movement vertically   
                ball.setPosition(ball.position.x, this.position.y + ball.radius);
            }
        }

        if (ball.movementVector.x > 0) { // comes from left
            if (ball.position.x + ball.radius >= this.position.x + this.width ) { // east wall                
                ball.setDirection(-ball.movementVector.x, ball.movementVector.y);   // change movement horizontally
                ball.setPosition(this.position.x + this.width - ball.radius, ball.position.y);
            }

        } else if (ball.movementVector.x < 0) { // comes from right
            if (ball.position.x - ball.radius <= this.position.x) { // west wall                
                ball.setDirection(-ball.movementVector.x, ball.movementVector.y);   // change movement horizontally
                ball.setPosition(this.position.x + ball.radius, ball.position.y);
            }
        }

        return null;
	}
}
