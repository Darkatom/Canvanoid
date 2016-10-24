import Solid from "./../../logic/Solid.js";
import Ball from "./../../logic/Ball.js";

var assert = require('assert');

console.log("- Testing Solid Functions -");
describe('Solid', function() {
  describe('#-> Collision detection.', function() {
    var solid = new Solid(100, 100, 20, 20);
    var ball = new Ball(0, 0);

    it('Ball collides the top', function() {
      ball.setPosition(solid.position.x + solid.width/2, solid.position.y);
      ball.setLastPosition(ball.position.x, ball.position.y - solid.height/2);

      assert.equal("top", solid.collision(ball));
    });

    it('Ball collides the bottom', function() {
      ball.setPosition(solid.position.x + solid.width/2, solid.position.y + solid.height);
      ball.setLastPosition(ball.position.x, ball.position.y + solid.height/2);

      assert.equal("bottom", solid.collision(ball));
    });
    
    it('Ball collides the left', function() {
      ball.setPosition(solid.position.x, solid.position.y + solid.height/2);
      ball.setLastPosition(ball.position.x - solid.width/2, ball.position.y);

      assert.equal("left", solid.collision(ball));
    });
    
    it('Ball collides the right', function() {
      ball.setPosition(solid.position.x + solid.width, solid.position.y + solid.height/2);
      ball.setLastPosition(ball.position.x + solid.width/2, ball.position.y);
      assert.equal("right", solid.collision(ball));
    });
    
    it('Ball does not collide', function() {
      ball.setPosition(0, 0);
      ball.setLastPosition(0, 0);
      assert.equal(null, solid.collision(ball));
    });
  });

  describe('#-> Collision handling.', function() {
    var solid = new Solid(100, 100, 20, 20);
    var ball = new Ball(0, 0);

    it("Ball is repositioned at solid's top, demonstrated because it collides", function() {
      ball.setPosition(solid.position.x + solid.width/2, solid.position.y);
      ball.setLastPosition(ball.position.x, ball.position.y - solid.height/2);
      solid.collided("top", ball);
      assert.equal("top", solid.collision(ball));
    });
    
    it("Ball is repositioned at solid's bottom, demonstrated because it collides", function() {
      ball.setPosition(solid.position.x + solid.width/2, solid.position.y + solid.height);
      ball.setLastPosition(ball.position.x, ball.position.y + solid.height/2);
      solid.collided("bottom", ball);
      assert.equal("bottom", solid.collision(ball));
    });
    
    it("Ball is repositioned at solid's left, demonstrated because it collides", function() {
      ball.setPosition(solid.position.x, solid.position.y + solid.height/2);
      ball.setLastPosition(ball.position.x - solid.width/2, ball.position.y);
      solid.collided("left", ball);
      assert.equal("left", solid.collision(ball));
    });
    
    it("Ball is repositioned at solid's right, demonstrated because it collides", function() {
      ball.setPosition(solid.position.x + solid.width, solid.position.y + solid.height/2);
      ball.setLastPosition(ball.position.x + solid.width/2, ball.position.y);
      solid.collided("right", ball);
      assert.equal("right", solid.collision(ball));
    });
  });
});