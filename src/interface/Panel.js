export default class Panel {
    constructor(x, y) {
        this.position = { x: x, y: y }; 

        this.msg = "";
        this.size = "50";
        this.font = "Georgia";

        this.enabled = false;
    }

    setPosition(x, y) {
        this.position.x = x;
        this.position.y = y;
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
		ctx.fillText(this.msg, this.position.x, this.position.y);
    }

}