import Panel from './Panel.js';
import Sprite from './Sprite.js';

export default class Controls {

    constructor(x, y, ctx) {
        this.position = { x: 0, y: 0 }; 
        this.aligned = "center";

        this.ctx = ctx;
        this.size = "20";
        this.font = "Georgia";
        this.enabled = true;
        
        this.keys = new Sprite("control_sprites", 0, 0, 100, 50);
        this.arrows = new Sprite("control_sprites", 100, 0, 100, 50);
        this.pause = new Sprite("control_sprites", 200, 0, 150, 50);
        this.soundOn = new Sprite("control_sprites", 350, 0, 50, 50);
        this.soundOff = new Sprite("control_sprites", 400, 0, 50, 50);

        this.keysPosition = { x: 0, y: 0, scale: 0.5};
        this.arrowsPosition = { x: 0, y: 0, scale: 0.5 };
        this.pausePosition = { x: 0, y: 0, scale: 0.5 };
        this.soundPosition = {x: 0, y: 0, scale: 0.8};

        this.moveText = new Panel(0, 0, this.ctx);
        this.moveText.setMessage("Move the Vaus with the keys");
        this.moveText.setSize("15");
        this.moveText.setAlign("left");
        this.moveText.setEnabled(true);
        
        this.clickText = new Panel(0, 0, this.ctx);
        this.clickText.setMessage("or click and drag it!");
        this.clickText.setSize("15");
        this.clickText.setAlign("left");
        this.clickText.setEnabled(true);
        
        this.pauseText = new Panel(0, 0, this.ctx);
        this.pauseText.setMessage("Pause the game!");
        this.pauseText.setSize("15");
        this.pauseText.setAlign("left");
        this.pauseText.setEnabled(true);

        this.soundText = new Panel(0, 0, this.ctx);
        this.soundText.setMessage("Press M to toggle sound!");
        this.soundText.setSize("15");
        this.soundText.setAlign("left");
        this.soundText.setEnabled(true);
        
        this.setPosition(x, y);
    }

    setPosition(x, y) {
        this.position.x = x;
        this.position.y = y;        
        
        this.keysPosition.x = this.position.x;
        this.keysPosition.y = this.position.y;

        this.arrowsPosition.x = this.keysPosition.x;
        this.arrowsPosition.y = this.keysPosition.y + this.keys.quad.height*this.keysPosition.scale;

        this.pausePosition.x = this.arrowsPosition.x
                               + this.keys.quad.width*this.keysPosition.scale + this.arrows.quad.width*this.arrowsPosition.scale
                               + Math.max(this.moveText.getWidth(), this.clickText.getWidth()) + 30;

        this.pausePosition.y = this.position.y;

        this.soundPosition.x = this.pausePosition.x + this.pause.quad.width*this.pausePosition.scale/2 - this.soundOn.quad.width*this.soundPosition.scale/2;
        this.soundPosition.y = this.pausePosition.y + this.soundOn.quad.height*this.soundPosition.scale;


        this.moveText.setPosition(this.keysPosition.x + this.keys.quad.width*this.keysPosition.scale + 20,
                                   this.keysPosition.y + this.keys.quad.height*this.keysPosition.scale/2 + 3);
        
        this.clickText.setPosition(this.arrowsPosition.x + this.arrows.quad.width*this.arrowsPosition.scale + 20,
                                   this.arrowsPosition.y + this.arrows.quad.height*this.arrowsPosition.scale/2 + 3);
                                   
        this.pauseText.setPosition(this.pausePosition.x + this.pause.quad.width*this.pausePosition.scale + 20,
                                   this.pausePosition.y + this.pause.quad.height*this.pausePosition.scale/2 + 3);
                                   
        this.soundText.setPosition(this.soundPosition.x + this.soundOn.quad.width*this.soundPosition.scale + 20,
                                   this.soundPosition.y + this.soundOn.quad.height*this.soundPosition.scale/2 + 3);
    }

    setEnabled(value) {
        this.enabled = value;
        this.moveText.setEnabled(value);
        this.clickText.setEnabled(value);
        this.pauseText.setEnabled(value);
        this.soundText.setEnabled(value);
    }

    draw(muted) {
        if (!this.enabled) return;

		this.keys.render(this.ctx, this.keysPosition.x, this.keysPosition.y, this.keys.quad.width*this.keysPosition.scale, this.keys.quad.height*this.keysPosition.scale);
        this.arrows.render(this.ctx, this.arrowsPosition.x, this.arrowsPosition.y, this.arrows.quad.width*this.arrowsPosition.scale, this.arrows.quad.height*this.arrowsPosition.scale);
        this.pause.render(this.ctx, this.pausePosition.x, this.pausePosition.y, this.pause.quad.width*this.pausePosition.scale, this.pause.quad.height*this.pausePosition.scale);
        
        if (!muted) this.soundOn.render(this.ctx, this.soundPosition.x, this.soundPosition.y, this.soundOn.quad.width*this.soundPosition.scale, this.soundOn.quad.height*this.soundPosition.scale);
        else       this.soundOff.render(this.ctx, this.soundPosition.x, this.soundPosition.y, this.soundOff.quad.width*this.soundPosition.scale, this.soundOff.quad.height*this.soundPosition.scale);
        
        this.moveText.draw();
        this.clickText.draw();
        this.pauseText.draw();
        this.soundText.draw();
    }

}
