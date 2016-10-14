
class Vaus extends Solid {

    constructor(x, y) {
        super(x, y, 100, 20);
        this.sprite = new Sprite("./sprites/Vaus.png", this.w, this.h, 0, 0);

        this.speed = 500;
        this.vector = { x: 0, y:0 };

    }

    start() {        
        window.onkeydown = (e)=>{
            if (e.key == "a" ) { // left key
                this.vector.x = -1;
            } else if (e.key == "d") { // right key
                this.vector.x = 1;
            }
		};     

        window.onkeyup = (e)=>{
            this.vector.x = 0;
		};
    }

    update(game) {
        super.update(game.balls);
        this.move(game.time.delta, game.board);
    }

    /*collided( dir, ball ) {
        if (dir == "top") {



                ball.changeDirection("vertical");
                ball.setPosition(ball.x, this.y - ball.radius);

        } else if (dir == "left") {
                ball.setDirection(-ball.vector.x, -1);
                ball.setPosition(this.x - ball.radius, ball.y);

        } else if ( dir == "right") {
                ball.changeDirection("horizontal");
                ball.setDirection(-ball.vector.x, -1);
                ball.setPosition(this.x + this.w + ball.radius, ball.y);  
        }

    }*/

    move(dt, board) {
        this.x += this.vector.x*this.speed*dt;
        this.y += this.vector.y*this.speed*dt;

        if (this.x + this.w >= board.x + board.w)
            this.x = board.x + board.w - this.w;
        else if (this.x <= board.x)
            this.x = board.x;
    }


}