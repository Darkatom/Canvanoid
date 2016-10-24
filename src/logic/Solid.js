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
		// Management of the ball after collision
		
		switch(dir) {
			case "top":
				if (ball.position.x >= this.position.x + this.width/3 && 	// Is ball at the center of the solid?
				    ball.position.x <= this.position.x + 2*this.width/3) {
						ball.setDirection(ball.movementVector.x, -ball.movementVector.y);   // change movement vertically

				} else {
					var dirX = 0;
					var dirY = 0;
					var angle = 0;
					if (ball.position.x + ball.radius <= this.position.x + ball.radius ) { // Left edge of the solid?
						angle = 205; // degrees

					} else if (ball.position.x - ball.radius >= this.position.x + this.width - ball.radius ) { // Right edge of the solid?
						angle = -25; // degrees			
						
					} else { // The ball hit a side (between the center and the edges)
						if (ball.position.x > this.position.x + this.width/2 ) // right side
							angle = 315; // degrees	
							
						else	// left side
							angle = 225; // degrees	
					}
					
					angle = angle*Math.PI/180; // radians
					dirX = Math.cos(angle);	
					dirY = Math.sin(angle);
					ball.setDirection(dirX, dirY);
				}
				ball.setPosition(ball.position.x, this.position.y - ball.radius);   // put ball top from solid
				break;


			case "bottom":
				if (ball.position.x >= this.position.x + this.width/3 && 	// Is ball at the center of the solid?
				    ball.position.x <= this.position.x + 2*this.width/3) {
						ball.setDirection(ball.movementVector.x, -ball.movementVector.y);   // change movement vertically

				} else {
					var dirX = 0;
					var dirY = 0;
					var angle = 0;
					if (ball.position.x + ball.radius <= this.position.x + ball.radius ) { // Left edge of the solid?
						angle = 155; // degrees

					} else if (ball.position.x - ball.radius >= this.position.x + this.width - ball.radius ) { // Right edge of the solid?
						angle = 25;	 // degrees			
						
					} else { // The ball hit a side (between the center and the edges)
						if (ball.position.x > this.position.x + this.width/2 ) // right side
							angle = 45; // degrees	
						else	// left side
							angle = 135; // degrees	
					}

					angle = angle*Math.PI/180; // radians
					dirX = Math.cos(angle);	
					dirY = Math.sin(angle);
					ball.setDirection(dirX, dirY);
				}
				ball.setPosition(ball.position.x, this.position.y + this.height + ball.radius);   // put ball bottom from solid
				break;

			case "left":	
				if 	(ball.position.y + ball.radius > this.position.y + ball.radius && 
					 ball.position.y - ball.radius < this.position.y + this.height - ball.radius ) {
					ball.setDirection(-ball.movementVector.x, ball.movementVector.y);   // change movement horizontally

				} else {
					var dirX = 0;
					var dirY = 0;
					var angle = 0;
					if (ball.position.y + ball.radius <= this.position.y + ball.radius ) { // Upper edge of the solid?
						angle = 205; // degrees

					} else if (ball.position.y - ball.radius >= this.position.y + this.height - ball.radius ) { // Lower edge of the solid?
						angle = 155;  // degrees			
						
					} 
					
					angle = angle*Math.PI/180; // radians
					dirX = Math.cos(angle);	
					dirY = Math.sin(angle);
					ball.setDirection(dirX, dirY);			
				}

				ball.setPosition(this.position.x - ball.radius, ball.position.y);   // put ball left from solid
				break;

			case "right":	
				if (ball.position.y + ball.radius > this.position.y + ball.radius && 
					ball.position.y - ball.radius < this.position.y + this.height - ball.radius ) {
					ball.setDirection(-ball.movementVector.x, ball.movementVector.y);   // change movement horizontally

				} else {		
					var dirX = 0;
					var dirY = 0;
					var angle = 0;
					if (ball.position.y + ball.radius <= this.position.y + ball.radius ) { // Upper edge of the solid?
						angle = -25; // degrees

					} else if (ball.position.y - ball.radius >= this.position.y + this.height - ball.radius ) { // Lower edge of the solid?
						angle = 25;  // degrees			
						
					}
					
					angle = angle*Math.PI/180; // radians
					dirX = Math.cos(angle);	
					dirY = Math.sin(angle);
					ball.setDirection(dirX, dirY);			
				}
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
