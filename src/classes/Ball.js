
class Ball {  
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.last = { x: x, y: y};
        this.radius = 8;
        this.speed = 200;
        this.vector = { x: Math.random(1, 3) - 2, 
                        y: Math.random(1, 3) - 2 };

                        
        this.sprite = new Sprite("./sprites/ball.png", this.radius*2,  this.radius*2, 0, 0);
    }

    draw (ctx) {
        if (this.sprite == null){
            //ctx.strokeRect(b.x - b.radius, b.y - b.radius, b.radius*2, b.radius*2);	
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
            ctx.stroke();
        } else {
            this.sprite.render(ctx, this.x - this.radius, this.y - this.radius, this.radius*2, this.radius*2);
        }
    }

    update( dt ) {
        this.move(dt);
    }

    move(dt) {
        this.last.x = this.x;
        this.last.y = this.y;
        this.x += this.vector.x*this.speed*dt;
        this.y += this.vector.y*this.speed*dt;
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    setDirection(x, y) {
        this.vector.x = x;
        this.vector.y = y;
    }

    changeDirection( direction ) { 
        if (direction == "vertical")
            this.vector.y = -this.vector.y;
        else
            this.vector.x = -this.vector.x;
    }

} 