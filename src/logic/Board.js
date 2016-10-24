import stages from './../assets/stages.js';
import Solid from "./Solid.js";
import Brick from "./Brick.js";
import Ball from "./Ball.js";
import Sprite from "./../interface/Sprite.js";

export default class Board extends Solid {
	constructor() {
		super(0, 0, 650, 600);

        this.stage = -1;
        this.bricks = null;

        this.sprite = new Sprite("./sprites/congruent_outline.png", 0, 0, 300, 300);
        this.clear = false; // true when all bricks, except inmortal ones, have been destroyed.
	}

    setStage ( stage ) {
        if (this.stage != stage) {
            this.stage = stage;
            
            var brickWidth = 50;
            var brikHeight = 20;
            this.bricks = [];
            
            var map = stages[this.stage];
            for (var row = 0; row < map.length; row++) 
                for (var column = 0; column < map[row].length; column++)
                    this.bricks.push( new Brick(this.position.x + brickWidth*column, 
                                                this.position.y + brikHeight*row, 
                                                brickWidth, brikHeight,
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
            if (ball.position.y + ball.radius >= this.position.y + this.height ) // south wall
                return "bottom";
                        
        } else if (ball.movementVector.y < 0) { // comes from down
            if (ball.position.y - ball.radius <= this.position.y) // north wall    
                return "top";          
        }

        if (ball.movementVector.x > 0) { // comes from left
            if (ball.position.x + ball.radius >= this.position.x + this.width ) // east wall    
                return "right";   
            
        } else if (ball.movementVector.x < 0) { // comes from right
            if (ball.position.x - ball.radius <= this.position.x) // west wall  
                return "left";           
        }

        return null;
	}

	collided( dir, ball ) {
		// Management of the ball after collision
		
		switch(dir) {
			case "top":  
                ball.setDirection(ball.movementVector.x, -ball.movementVector.y);  // change movement vertically   
                ball.setPosition(ball.position.x, this.position.y + ball.radius);
				break;

			case "bottom":
                ball.setDirection(ball.movementVector.x, -ball.movementVector.y);  // change movement vertically
                ball.setPosition(ball.position.x, this.position.y + this.height - ball.radius);
				break;

			case "left":	
                ball.setDirection(-ball.movementVector.x, ball.movementVector.y);   // change movement horizontally
                ball.setPosition(this.position.x + this.width - ball.radius, ball.position.y);
				break;

			case "right":	
                ball.setDirection(-ball.movementVector.x, ball.movementVector.y);   // change movement horizontally
                ball.setPosition(this.position.x + ball.radius, ball.position.y);
				break;
		}

	}
}
