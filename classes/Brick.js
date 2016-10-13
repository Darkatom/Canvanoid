
class Brick extends Solid {

    constructor(x, y, life) {
        super(x, y, 50, 20);
        this.life = life;  // number of hits
    }


    collided(dir, ball) {
        super.collided(dir, ball);
        this.life--;       
    }

}