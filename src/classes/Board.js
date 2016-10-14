class Board extends Solid {
	constructor() {
        var fakeBrick = new Brick(0,0,0);
        var selfW = fakeBrick.w * 13;
        var selfH = 600;
		super(canvas.width/2 - selfW/2, 
              canvas.height/2 - selfH/2, 
              selfW, selfH);

        this.stage = -1;
        this.bricks = null;

        this.sprite = new Sprite("./sprites/congruent_outline.png", 300, 300, 0, 0);
        this.clear = false; // when all bricks, except golden, have been destroyed.
	}

    setStage ( stage ) {
        if (this.stage != stage) {
            this.stage = stage;
            
            var fakeBrick = new Brick(0,0,0,0);
            this.bricks = [];
            
            var map = stages[this.stage];
            for (var row = 0; row < map.length; row++) 
                for (var column = 0; column < map[row].length; column++)
                    this.bricks.push( new Brick(this.x + fakeBrick.w*column, this.y + fakeBrick.h*row, 
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

        return null;
	}
}