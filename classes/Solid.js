class Solid {
    constructor(x, y, w, h) {
		this.x = x;
		this.y = y;	
		this.w = w;
		this.h = h; 
        this.sprite = null;
    }

    draw() {
        if (this.sprite == null)
	        ctx.strokeRect(this.x, this.y, this.w, this.h);	
        else
            this.sprite.render(this.x, this.y, this.w, this.h);
    }

    update() {
        for (var b of balls) {  // look for collisions
            var dir = this.collision(b);
            if (dir != null)
                this.collided(dir, b);
        }
    }

    collided( dir, ball ) {
        switch(dir) {
            case "bottom":
                ball.changeDirection("vertical");
                ball.setPosition(ball.x, this.y + this.h + ball.radius);
                break;

            case "top":
                ball.changeDirection("vertical");
                ball.setPosition(ball.x, this.y - ball.radius);
                break;

            case "left":
                ball.changeDirection("horizontal");
                ball.setPosition(this.x - ball.radius, ball.y);
                break;

            case "right":
                ball.changeDirection("horizontal");
                ball.setPosition(this.x + this.w + ball.radius, ball.y);  
                break;
        }

    }

    collision( ball ) {   
        if ((ball.x + ball.radius >= this.x && ball.x - ball.radius <= this.x + this.w) && // horizontal collision
            (ball.y + ball.radius >= this.y && ball.y - ball.radius <= this.y + this.h))   // vertical collision
        {
             if (ball.last.y - ball.radius > this.y + this.h) {  // hit bottom
                return "bottom";

            } else if (ball.last.y + ball.radius < this.y) {  // hit top
                return "top";

            } else if (ball.last.x + ball.radius < this.x) {  // hit left
                return "left";

            } else if (ball.last.x - ball.radius > this.x + this.w) {  // hit right
                return "right";       
            }

        }
        
        return null;        
    }
}