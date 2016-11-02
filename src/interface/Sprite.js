export default class Sprite {
    constructor(spriteName, x, y, w, h) {
        this.img = new Image();
        this.img.src = "./dist/assets/sprites/" + spriteName + ".png";
        this.quad = { x: x == null ? 0 : x, // Quad to be drawn from the sprite sheet
                      y: y == null ? 0 : y, 
                      width: w, 
                      height: h }; 
    }

    render(ctx, x, y, w, h) {
        ctx.drawImage(this.img,
                      this.quad.x, this.quad.y, this.quad.width, this.quad.height,
                      x, y, w, h);
    }

}
