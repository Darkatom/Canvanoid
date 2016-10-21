import Sprite from "./../interface/Sprite.js";

export default class Ball {  
    constructor(x, y) {
        this.position = { x: x, y: y }; 
        this.lastPosition = { x: x, y: y }; 
        this.radius = 8;
        this.speed = 200;
        this.movementVector = { x: Math.random(1, 3) - 2, 
                                y: Math.random(1, 3) - 2 };
                        
        this.sprite = new Sprite("./sprites/ball.png", 0, 0, 16, 16);
    }

    setPosition(x, y) {
        this.position.x = x;
        this.position.y = y;
    }

    setLastPosition(x, y) {
        this.lastPosition.x = x;
        this.lastPosition.y = y;
    }

    setDirection(x, y) {
        this.movementVector.x = x;
        this.movementVector.y = y;
    }

    draw (ctx) {
        if (this.sprite == null){
            //ctx.strokeRect(b.x - b.radius, b.y - b.radius, b.radius*2, b.radius*2);	
            ctx.beginPath();
            ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2, true);
            ctx.stroke();
        } else {
            this.sprite.render(ctx, this.position.x - this.radius, this.position.y - this.radius, this.radius*2, this.radius*2);
        }
    }

    update(dt) {    // dt = delta time
        this.move(dt);
    }

    move(dt) {
        this.setLastPosition(this.position.x, this.position.y);
        this.setPosition(this.position.x + this.movementVector.x*this.speed*dt,
                         this.position.y + this.movementVector.y*this.speed*dt);
    }

} 