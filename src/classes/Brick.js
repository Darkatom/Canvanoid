
class Brick extends Solid {

    constructor(x, y, type, stage) {
        super(x, y, 50, 20);
        this.sprite = new Sprite("./sprites/bricks.png", this.w, this.h, (type-1)*this.w, 0);

        this.life = 1;  // number of hits
        this.value = 50 + (type-1)*10;
        this.inmortal = false;

        if (type == 0) { // false bricks
            this.life = 0;
            this.value = 0;
        
        } else if (type == 9) {
            this.life = stage + 1;
            this.value = (stage + 1)*50;

        } else if (type == 10) {
            this.inmortal = true;
        }
    }

    collided(dir, ball) {
        super.collided(dir, ball);
        if (!this.inmortal)
            this.life--;       
    }

}