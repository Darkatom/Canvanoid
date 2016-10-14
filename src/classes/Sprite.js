
class Sprite {
    constructor(src, w, h, posX, posY) {
        this.img = new Image();
        this.img.src = src;
        this.w = w;
        this.h = h;
        this.posX = posX;
        this.posY = posY;
    }

    render(ctx, x, y, w, h) {
        ctx.drawImage(this.img,
                      this.posX, this.posY,
                      this.w, this.h,
                      x, y,
                      w, h);
    }

}