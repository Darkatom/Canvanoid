export default class State {

    constructor() {
        this.stage = 0;      
        this.lives = 3;
        this.score = 0;
        this.msg = null;
    }

    nextStage() {
        this.stage++;
	}

    resetStage() {
        this.lives--;
        if (this.lives > 0)
            this.score = 0;
    }

    wonGame() {
        this.msg = "OMG YOU WON OMG!";
    }

	endGame() {
        this.msg = "GAME OVER";
	}
}
