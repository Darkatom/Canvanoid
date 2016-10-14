class Panel {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.msg = "";
        this.size = "50";
        this.font = "Georgia";

        this.enabled = false;
    }

    setEnabled(value) {
        this.enabled = value;
    }

    setMessage(text) {
        this.msg = text;
    }

    draw(ctx) {
        if (!this.enabled) return;

		ctx.font = this.size + "px " + this.font;
		ctx.fillText(this.msg, this.x, this.y);
		ctx.strokeRect(0, 0, canvas.width, canvas.height);
    }

}