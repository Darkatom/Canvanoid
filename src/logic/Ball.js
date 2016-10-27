import Sprite from "./../interface/Sprite.js";

export default class Ball {  
    constructor(x, y) {
        this.position = { x: x, y: y }; 
        this.lastPosition = { x: x, y: y }; 
        this.radius = 8;
        this.speed = 200;
        this.movementVector = { x: 0, y: -1 };
                        
        this.sprite = new Sprite("ball", 0, 0, 16, 16);
        this.trail = [];
    }

    setPosition(x, y) {
        this.trail.push( {x: this.position.x, y: this.position.y} );
        if (this.trail.length > 30)
            this.trail.splice(0, 1);
        this.position.x = x;
        this.position.y = y;
    }

    setLastPosition(x, y) {
        this.lastPosition.x = x;
        this.lastPosition.y = y;
    }

    setDirection(x, y) {
        var deviation = 0.01;
        var sign = Math.random() < 0.5 ? -1 : 1;

        if (x == 0) x += deviation*sign;
        if (y == 0) y += deviation*sign;      
          
        this.movementVector.x = x;
        this.movementVector.y = y;
    }

    draw (ctx) {
        for (var point of this.trail) {
            ctx.beginPath();
            ctx.arc(point.x, point.y, this.radius, 0, Math.PI*2, false);
            ctx.strokeStyle = 'rgba(255,255,255,0.2)';
            ctx.fillStyle = 'rgba(255,255,255,0.2)';
            ctx.fill();
            ctx.stroke();
        }
        ctx.strokeStyle = 'rgba(0,0,0,1)';
        ctx.fillStyle = 'rgba(0,0,0,1)';

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
