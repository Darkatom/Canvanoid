import Solid from "./../../classes/Solid.js";
import Ball from "./../../classes/Ball.js";

var assert = require('assert');

console.log("- Testing Solid -");
describe('Solid', function() {
  describe('#collision()', function() {
    it('Should return "top" when the ball collides the top', function() {
      var solid = new Solid(100, 100, 20, 20);
      var ball = new Ball(0, 0);
      ball.x = solid.x + solid.w/2;
      ball.y = solid.y - ball.radius;
      assert.equal("top", solid.collision(ball));
    });

    it('Should return "bottom" when the ball collides the bottom', function() {
      var solid = new Solid(100, 100, 20, 20);
      var ball = new Ball(0, 0);
      ball.x = solid.x + solid.w/2;
      ball.y = solid.y + solid.h + ball.radius;
      assert.equal("bottom", solid.collision(ball));
    });
    
    it('Should return "left" when the ball collides the left', function() {
      var solid = new Solid(100, 100, 20, 20);
      var ball = new Ball(0, 0);
      ball.x = solid.x - ball.radius;
      ball.y = solid.y + solid.h/2;
      assert.equal("left", solid.collision(ball));
    });
    
    it('Should return "right" when the ball collides the right', function() {
      var solid = new Solid(100, 100, 20, 20);
      var ball = new Ball(0, 0);
      ball.x = solid.x + solid.w + ball.radius;
      ball.y = solid.y + solid.h/2;
      assert.equal("right", solid.collision(ball));
    });
    
    it('Should return null when the ball does not collide', function() {
      var solid = new Solid(100, 100, 20, 20);
      var ball = new Ball(0, 0);
      assert.equal(null, solid.collision(ball));
    });
  });

  describe('#collided()', function() {
    it('Passed "top" value, the new ball position should be on top of the solid', function() {
      var solid = new Solid(100, 100, 20, 20);
      var ball = new Ball(0, 0);
      solid.collided("top", ball);
      assert.equal("top", solid.collision(ball));
    });
    
    it('Passed "bottom" value, the new ball position should be beneath of the solid', function() {
      var solid = new Solid(100, 100, 20, 20);
      var ball = new Ball(0, 0);
      solid.collided("bottom", ball);
      assert.equal("bottom", solid.collision(ball));
    });
    
    it('Passed "left" value, the new ball position should be to the left of the solid', function() {
      var solid = new Solid(100, 100, 20, 20);
      var ball = new Ball(0, 0);
      solid.collided("left", ball);
      assert.equal("left", solid.collision(ball));
    });
    
    it('Passed "right" value, the new ball position should be to the right of the solid', function() {
      var solid = new Solid(100, 100, 20, 20);
      var ball = new Ball(0, 0);
      solid.collided("right", ball);
      assert.equal("right", solid.collision(ball));
    });
  });
});