class Score {

    constructor(x, y) {
        this.value = 0;
        this.x = x;
        this.y = y;
        this.size = "20";
        this.font = "Georgia";
    }

    draw(ctx) {
		ctx.font = this.size + "px " + this.font;
		ctx.fillText("Score: "+ this.value, this.x, this.y);
		ctx.strokeRect(0, 0, canvas.width, canvas.height);
    }

}