
class Vaus extends Solid {

    constructor() {
        super(board.x + board.w/2 - 50, 
              board.y + board.h - 50, 
              100, 20);
        this.sprite = new Sprite("./sprites/Vaus.png", this.w, this.h, 0, 0);

        this.speed = 500;
        this.vector = { x: 0, y:0 };

    }

    start() {        
        w.onkeydown = function (e) {
            if (e.key == "a" ) { // left key
                vaus.vector.x = -1;
            } else if (e.key == "d") { // right key
                vaus.vector.x = 1;
            }
		};     

        w.onkeyup = function (e) {
                vaus.vector.x = 0;
		};
    }

    update(dt) {
        super.update();
        this.move(dt);
    }

  /*  collided( dir, ball ) {
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

    move(dt) {
        this.x += this.vector.x*this.speed*dt;
        this.y += this.vector.y*this.speed*dt;

        if (this.x + this.w >= board.x + board.w)
            this.x = board.x + board.w - this.w;
        else if (this.x <= board.x)
            this.x = board.x;
    }


}