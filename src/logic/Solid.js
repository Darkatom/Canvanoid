import Ball from "./Ball.js";
import Sprite from "./../interface/Sprite.js";

export default class Solid {
    constructor(x, y, w, h) {
        this.position = {x: x, y: y}; 
		this.width = w;
		this.height = h; 
        this.sprite = null;
    }

    setPosition(x, y) {
        this.position.x = x;
        this.position.y = y;
    }

    draw(ctx) {
        if (this.sprite == null)
	        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);	
        else
            this.sprite.render(ctx, this.position.x, this.position.y, this.width, this.height);
    }

    update(balls) {
        for (var b of balls) {  // look for collisions
            var dir = this.collision(b);
            if (dir != null)
                this.collided(dir, b);
        }
    }

    collided( dir, ball ) {
        switch(dir) {
            case "bottom":
                ball.setDirection(ball.movementVector.x, -ball.movementVector.y);   // change movement vertically
                ball.setPosition(ball.position.x, this.position.y + this.height + ball.radius);   // put ball bottom from solid
                break;

            case "top":
                ball.setDirection(ball.movementVector.x, -ball.movementVector.y);   // change movement vertically
                ball.setPosition(ball.position.x, this.position.y - ball.radius);   // put ball top from solid
                break;

            case "left":
                ball.setDirection(-ball.movementVector.x, ball.movementVector.y);   // change movement horizontally
                ball.setPosition(this.position.x - ball.radius, ball.position.y);   // put ball left from solid
                break;

            case "right":
                ball.setDirection(-ball.movementVector.x, ball.movementVector.y);   // change movement horizontally
                ball.setPosition(this.position.x + this.width + ball.radius, ball.position.y);   // put ball right from solid
                break;
        }

    }

    collision( ball ) {   
        if ((ball.position.x + ball.radius >= this.position.x && ball.position.x - ball.radius <= this.position.x + this.width) && // horizontal collision
            (ball.position.y + ball.radius >= this.position.y && ball.position.y - ball.radius <= this.position.y + this.height))   // vertical collision
        {
             if (ball.lastPosition.y - ball.radius > this.position.y + this.height) {  // hit bottom
                return "bottom";

            } else if (ball.lastPosition.y + ball.radius < this.position.y) {  // hit top
                return "top";

            } else if (ball.lastPosition.x + ball.radius < this.position.x) {  // hit left
                return "left";

            } else if (ball.lastPosition.x - ball.radius > this.position.x + this.width) {  // hit right
                return "right";       
            }

        }
        
        return null;        
    }
}