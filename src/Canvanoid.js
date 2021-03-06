import stages from './stages.js';
import Sprite from './classes/Sprite.js';
import Ball from './classes/Ball.js';
import Board from './classes/Board.js';
import Brick from './classes/Brick.js';
import Vaus from './classes/Vaus.js';
import State from './classes/State.js';
import Panel from './classes/Panel.js';
import Score from './classes/Score.js';

export default class Canvanoid {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.time = { now: null,
					  then: null,
					  delta: null }

	    this.messagePanel = null;
		this.score = null;

		this.state = null; 
		this.board = null;
		this.balls = null;
		this.vaus = null; 
	}
	
	start() {	
		this.state = new State();
		
		this.board = new Board();
		this.board.setStage(this.state.stage);

		this.balls = [ new Ball(this.board.x + this.board.w/2, this.board.y + this.board.h/2 + 100) ];
		this.vaus = new Vaus(this.board.x + this.board.w/2 - 50, 
              				 this.board.y + this.board.h - 50);
		this.vaus.start();

		this.score = new Score(this.board.x + this.board.w - 100, 
		                       this.board.y + this.board.h + 30);
		
		this.messagePanel = new Panel( this.board.x + this.board.w/2 - 150, 
							           this.board.y + this.board.h/2 - 100);

		this.time.then = Date.now();
		this.loop();
	}

	reset() {
		this.balls = [ new Ball(this.board.x + this.board.w/2, this.board.y + this.board.h/2 + 100) ];
		this.vaus.x = this.board.x + this.board.w/2 - 50; 
        this.vaus.y = this.board.y + this.board.h - 50;
	}

	loop() {	
		this.time.now = Date.now();
		this.time.delta = (this.time.now - this.time.then)/1000;

		this.update(this.time.delta);
		this.draw();

		this.time.then = this.time.now;
		
		window.requestAnimationFrame(this.loop.bind(this));
	}

	update(dt) {
		if (this.state.lives <= 0)	return;

		for (var b of this.balls) {
			b.update(dt);
			if (b.y >= this.vaus.y + this.vaus.h) {
				this.balls.splice(this.balls.indexOf(b), 1);
				b = null;
			}
		}

		this.board.update(this);
		this.vaus.update(this);

		if (this.board.clear) {
			this.reset();
			this.state.nextStage();

		} else if (this.balls.length <= 0) {
			this.reset();
			this.state.resetStage();
		} 

		if (this.state.lives > 0) {
			if (this.state.stage >= stages.length) {
				this.state.wonGame();
			}
		} else {
			this.state.endGame();
		}
		
		this.applyState();
	}

	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		
		if (this.state.msg == null) {
			this.board.draw(this.ctx);

			for (var b of this.balls) 
				b.draw(this.ctx);

			this.vaus.draw(this.ctx);

			this.drawLives();
		} else {
			this.messagePanel.draw(this.ctx);
		}
		
		this.score.draw(this.ctx);
		this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
	}

	drawLives() {
		for (var i = 0; i < this.state.lives; i++) {
			this.vaus.sprite.render(this.ctx,
									this.board.x + 10 + i*this.vaus.sprite.w/3 + i*5, 
									this.board.y + this.board.h + 10 + this.vaus.sprite.h/2, 
									this.vaus.sprite.w/3, this.vaus.sprite.h/2);
		}
	}

	showMessage(msg) {
		this.score.x = this.board.x + this.board.w/2 - 70;
		this.score.y = this.board.y + this.board.h/2 - 50;
		this.size = "30";
		this.score.draw(this.ctx);
		this.messagePanel.setMessage(msg);
		this.messagePanel.setEnabled(true);
	}

	applyState() {
		this.board.setStage(this.state.stage);
		this.score.value = this.state.score;

		if (this.state.msg != null) {
			this.showMessage(this.state.msg);
		} else { 
			this.messagePanel.setEnabled(false);
			this.score.x = this.board.x + this.board.w - 100; 
			this.score.y = this.board.y + this.board.h + 30;
		}
	}
}

module.exports = Canvanoid;