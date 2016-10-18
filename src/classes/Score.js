import Panel from './Panel.js';

export default class Score extends Panel {

    constructor(x, y) {
        super(x, y);
        this.size = "20";
        this.font = "Georgia";
        this.enabled = true;
        
        this.value = 0;
    }

    draw(ctx) {
        this.setMessage("Score: " + this.value);
        super.draw(ctx);
    }

}