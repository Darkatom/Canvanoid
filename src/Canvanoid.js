import Ball from './logic/Ball.js';
import Board from './logic/Board.js';
import Brick from './logic/Brick.js';
import Paddle from './logic/Paddle.js';
import State from './logic/State.js';
import Sprite from './interface/Sprite.js';
import Panel from './interface/Panel.js';
import Score from './interface/Score.js';
import stages from './assets/stages.js';


const _SMALL_FONT_SIZE = "18";
const _BIG_FONT_SIZE = "20";
const _LARGE_FONT_SIZE = "30";


export default class Canvanoid {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.time = { now: null,
					        then: null,
					        delta: null }

    this.messagePanel = null;
		this.instructionsPanel = null;
		this.scorePanel = null;

		this.state = null; 
		this.board = null;
		this.balls = null;
		this.vaus = null; 
		this.pause = null;
	}
	
	start() {	
		// Game Elements
		this.state = new State();
		this.board = new Board();
		this.board.setStage(this.state.stage);

		this.balls = [];
		this.vaus = new Paddle();

		// Interface Elements
		this.messagePanel = new Panel(0, 0, this.ctx);
		this.instructionsPanel = new Panel(0, 0, this.ctx);
		this.scorePanel = new Score(0, 0, this.ctx);
	
		// Game Starting State		
		this.setGameObjects_StartPositions();
		this.setPanels_StartPositions();
		this.setupEvents();

		this.pause = true;
		this.state.initGame();
		this.applyState();

		this.time.then = Date.now();
		this.loop();
	}
 
	setGameObjects_StartPositions() {
		this.balls = [ new Ball(this.board.position.x + this.board.width/2, 
							              this.board.position.y + this.board.height/2 + 100)];

		this.vaus.setPosition(this.board.position.x + this.board.width/2 - 50,
							            this.board.position.y + this.board.height - 50);
	}

	setPanels_StartPositions() {
		this.messagePanel.setPosition(this.board.position.x + this.board.width/2, this.board.position.y + this.board.height/2);
		
		this.instructionsPanel.setPosition(this.messagePanel.initialPosition.x, this.messagePanel.initialPosition.y + 50);
		this.instructionsPanel.setSize(_SMALL_FONT_SIZE);

		this.scorePanel.setPosition(this.board.position.x + this.board.width - 100, this.board.position.y + this.board.height + 30);
		this.scorePanel.setAlign("left");
		this.scorePanel.setSize(_BIG_FONT_SIZE);
	}

	setupEvents() {
		this.setupKeyboardEvents();
		this.setupMouseEvents();
	}

	setupKeyboardEvents() {
  	window.onkeydown = (e)=>{
      if (e.keyCode == 32){
        if (this.state.lives <= 0 || this.state.stage >= stages.length)
          this.start();
        else {
          this.pause = !this.pause;
          this.state.pauseGame(this.pause);
          this.applyState();
        }
      } else if (e.key == "a" || e.key == "A" || e.keyCode == 37) { // left key
        this.vaus.setDirection(-1, 0);
      } else if (e.key == "d" || e.key == "D" || e.keyCode == 39) { // right key
        this.vaus.setDirection(1, 0);
      }
    };     

    window.onkeyup = (e)=>{
      this.vaus.setDirection(0, 0);
    };

    window.onmousedown = (e)=> {
      this.vaus.click = true;
    };
	}

	setupMouseEvents() {
    window.onmousemove = (e)=> {
      if (this.vaus.click)
        this.vaus.setPosition(e.offsetX - this.vaus.width/2, this.vaus.position.y);
    };

    window.onmouseup = (e)=>{
      this.vaus.click = false;
    };
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
		if (this.state.lives <= 0) return;
		
		if (this.pause) return;

		this.updateBalls(dt);
		this.board.update(this);
		this.vaus.update(this);	

		this.updateState();
		this.applyState();
	}

	updateBalls(dt) {
		for (var b of this.balls) {
			b.update(dt);
			if (b.position.y >= this.vaus.position.y + this.vaus.height) {
				this.balls.splice(this.balls.indexOf(b), 1);
				b = null;
			}
		}
	}

	updateState() {		
		if (this.board.clear) {
			this.setGameObjects_StartPositions();
			this.state.nextStage();

		} else if (this.balls.length <= 0) {
			this.setGameObjects_StartPositions();
			this.state.resetStage();
		} 

		if (this.state.lives > 0) {
			if (this.state.stage >= stages.length)
				this.state.wonGame();
		} else {
			this.state.endGame();
		}
	}

	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		if (this.state.msg == null && this.state.instr == null) {
			this.board.draw(this.ctx);

			for (var b of this.balls) 
				b.draw(this.ctx);

			this.vaus.draw(this.ctx);

			this.drawLives();
		} else {
			if (this.state.msg != null) this.messagePanel.draw(this.ctx);
			if (this.state.instr != null) this.instructionsPanel.draw(this.ctx);
			this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
		}
		
		this.scorePanel.draw(this.ctx);
	}

	drawLives() {
		for (var i = 0; i < this.state.lives; i++) {
			this.vaus.sprite.render(this.ctx,
									this.board.position.x + 10 + i*this.vaus.width/3 + i*5, 
									this.board.position.y + this.board.height + 10 + this.vaus.height/2, 
									this.vaus.width/3, this.vaus.height/2);
		}
	}

	showMessage(msg, instr) {
		this.scorePanel.setPosition(this.instructionsPanel.initialPosition.x, this.instructionsPanel.initialPosition.y + 50);
		this.scorePanel.setSize(_LARGE_FONT_SIZE);
		this.scorePanel.setAlign("center");
		this.scorePanel.draw(this.ctx);
		this.scorePanel.setEnabled(!this.pause);

		this.messagePanel.setMessage(msg);
		this.messagePanel.setEnabled(true);

		this.instructionsPanel.setMessage(instr);
		this.instructionsPanel.setEnabled(true);
	}

	applyState() {
		this.board.setStage(this.state.stage);
		this.scorePanel.value = this.state.score;

		if (this.state.msg != null) {
			this.showMessage(this.state.msg, this.state.instr);

		} else { 
			this.scorePanel.setPosition(this.board.position.x + this.board.width - 100, this.board.position.y + this.board.height + 30);
			this.scorePanel.setAlign("left");
			this.scorePanel.setSize(_BIG_FONT_SIZE);
			this.scorePanel.setEnabled(true);

			this.messagePanel.setEnabled(false);
			this.instructionsPanel.setEnabled(false);
		}
	}
}

module.exports = Canvanoid;