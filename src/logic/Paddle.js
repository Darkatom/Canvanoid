import Solid from "./Solid.js";
import Board from "./Board.js";
import Ball from "./Ball.js";
import Sprite from "./../interface/Sprite.js";

export default class Paddle extends Solid {
    constructor(x, y) {
        super(x, y, 100, 20, "solid");
        this.sprite = new Sprite("Vaus", 0, 0, this.width, this.height);

        this.speed = 500;
        this.movementVector = { x: 0, y:0 };

        this.click = false;
    }

    setDirection(x, y) {
        this.movementVector.x = x;
        this.movementVector.y = y;
    }

    update(game) {
        super.update(game.balls, game.muted);
        this.move(game.time.delta, game.board);
    }

    move(dt, board) {
        var x = this.position.x + this.movementVector.x*this.speed*dt;
        var y = this.position.y + this.movementVector.y*this.speed*dt;

        if (x + this.width >= board.position.x + board.width)
            x = board.position.x + board.width - this.width;
        
        else if (x <= board.position.x)
            x = board.position.x;

        this.setPosition(x, y);
    }


}
