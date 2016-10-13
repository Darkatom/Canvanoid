
class Ball {  
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.last = { x: x, y: y};
        this.radius = 10;
        this.speed = 300;
        this.vector = { x: Math.random(1, 3) - 2, 
                        y: Math.random(1, 3) - 2 };
    }

    draw () {
		//ctx.strokeRect(b.x - b.radius, b.y - b.radius, b.radius*2, b.radius*2);	
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
		ctx.stroke();
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