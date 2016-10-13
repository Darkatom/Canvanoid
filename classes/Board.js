class Board extends Solid {
	constructor(bricks) {
        var selfW = 600;
        var selfH = 600;
		super(canvas.width/2 - selfW/2, 
              canvas.height/2 - selfH/2, 
              selfW, selfH);

        this.bricks = [];

        var fakeBrick = new Brick(0,0,0);

        var initY = this.y + 10;
        var countY = 0;
        var gap = 5;
        for (var line of bricks) {
            var initX = this.x + this.w/2 - (line.length*fakeBrick.w)/2 - (line.length*gap)/2; // width of a brick is 40, line.length*40/2
            var countX = 0;
            for (var life of line) {
                this.bricks.push( new Brick(initX + fakeBrick.w*countX + gap*countX, initY + fakeBrick.h*countY + gap*countY, life) );
                countX++;
            }
            countY++;
        }
	}

    draw() {
        super.draw();        
        for (var br of this.bricks) 
            br.draw();
    }

    update() {
        for (var b of balls)
            this.collision(b);
        
        for (var br of this.bricks) {
            br.update();
            if (br.life <= 0) {
                this.bricks.splice(this.bricks.indexOf(br), 1);
                br = null;
            } 
        }
    }

	collision( ball ) {
        if (ball.vector.y > 0) { // comes from up
            if (ball.y + ball.radius >= this.y + this.h ) { // south wall
                ball.changeDirection("vertical");
                ball.setPosition(ball.x, this.y + this.h - ball.radius);
            }
            
        } else if (ball.vector.y < 0) { // comes from down
            if (ball.y - ball.radius <= this.y) {	// north wall
                ball.changeDirection("vertical");
                ball.setPosition(ball.x, this.y + ball.radius);
            }
        }

        if (ball.vector.x > 0) { // comes from left
            if (ball.x + ball.radius >= this.x + this.w ) { // east wall
                ball.changeDirection("horizontal");
                ball.setPosition(this.x + this.w - ball.radius, ball.y);
            }

        } else if (ball.vector.x < 0) { // comes from right
            if (ball.x - ball.radius <= this.x) { // west wall
                ball.changeDirection("horizontal");
                ball.setPosition(this.x + ball.radius, ball.y);
            }
        }
	}
}