export default class State {

    constructor() {
        this.stage = 0;      
        this.lives = 3;
        this.score = 0;

        this.msg = null;
        this.instr = null;
    }

    nextStage() {
        this.stage++;
	}

    resetStage() {
        this.lives--;
        if (this.lives > 0)
            this.score = 0;
    }
   
    initGame() {
        this.msg ="Let's Play!";
        this.instr = "Press Space";
    }

    pauseGame( paused ) {
        this.msg = paused ? "Paused" : null;
        this.instr = paused ? "Press Space to Play" : null;
    }

    wonGame() {
        this.msg = "OMG YOU WON OMG!";
        this.instr = "(press space to start over!)";
    }

	endGame() {
        this.msg = "GAME OVER";
        this.instr = "(press space to try again!)";
	}
}
