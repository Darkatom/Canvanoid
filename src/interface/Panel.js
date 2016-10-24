export default class Panel {
    constructor(x, y, ctx) {
        this.initialPosition = { x: x, y: y }; 
        this.position = { x: x, y: y }; 
        this.aligned = "center";

        this.ctx = ctx;
        this.msg = "";
        this.size = "50";
        this.font = "Georgia";

        this.enabled = false;
    }

    setPosition(x, y) {
        this.initialPosition.x = x;
        this.initialPosition.y = y;
        this.alignText();
    }

    setAlign(aligned) {
        this.aligned = aligned;
        this.alignText();
    }

    setSize(size) {
        this.size = size;
        this.alignText();
    }

    setEnabled(value) {
        this.enabled = value;
    }

    setMessage(text) {
        this.msg = text;
        this.alignText();
    }

    alignText() {
        if (this.msg == null) return;
        
        this.ctx.font = this.size + "px " + this.font;
        var textWidth = parseInt(this.ctx.measureText(this.msg).width);

        switch (this.aligned) {
            case "center":
                this.position.x = this.initialPosition.x - textWidth/2;
                this.position.y = this.initialPosition.y;
                break;
            case "left":
                this.position.x = this.initialPosition.x;
                this.position.y = this.initialPosition.y;
                break;
            case "right":
                this.position.x = this.initialPosition.x - textWidth;
                this.position.y = this.initialPosition.y;
                break;
        }

        if (this.position.x < 0) 
            this.position.x = 0;
    }

    draw() {
        if (!this.enabled) return;

		this.ctx.font = this.size + "px " + this.font;
		this.ctx.fillText(this.msg, this.position.x, this.position.y);
    }

}
