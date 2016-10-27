import Solid from "./../../logic/Solid.js";
import Ball from "./../../logic/Ball.js";

var assert = require('assert');

console.log("- Testing Solid Functions -");
describe('Solid', function() {
  describe('#-> Collision detection.', function() {
    var solid = new Solid(100, 100, 50, 50);
    var ball = new Ball(0, 0);
    
    it('Ball does not collide', function() {
      ball.setPosition(0, 0);
      ball.setLastPosition(0, 0);
      assert.equal(null, solid.collision(ball));
    });

    // - BASIC COLLISIONS - //

    it('Basic: Ball collides the top', function() {
      ball.setPosition(solid.position.x + solid.width/2, solid.position.y);
      ball.setLastPosition(ball.position.x, ball.position.y - solid.height/2);

      assert.equal("top", solid.collision(ball));
    });

    it('Basic: Ball collides the bottom', function() {
      ball.setPosition(solid.position.x + solid.width/2, solid.position.y + solid.height);
      ball.setLastPosition(ball.position.x, ball.position.y + solid.height/2);

      assert.equal("bottom", solid.collision(ball));
    });
    
    it('Basic: Ball collides the left', function() {
      ball.setPosition(solid.position.x, solid.position.y + solid.height/2);
      ball.setLastPosition(ball.position.x - solid.width/2, ball.position.y);

      assert.equal("left", solid.collision(ball));
    });
    
    it('Basic: Ball collides the right', function() {
      ball.setPosition(solid.position.x + solid.width, solid.position.y + solid.height/2);
      ball.setLastPosition(ball.position.x + solid.width/2, ball.position.y);
      assert.equal("right", solid.collision(ball));
    });



    // - INTERSECTION COLLISIONS - //

    // We will turn the ball radius to 0 to test proper lines.
    ball.radius = 0;

    // Top
    it('Intersection: Top to Bottom Vertical - Top collision', function() {
      ball.setPosition(solid.position.x + solid.width/2, solid.position.y + solid.height + 50); // B: Beneath the solid
      ball.setLastPosition(solid.position.x + solid.width/2, solid.position.y - solid.height/2);  // A: Over the solid

      assert.equal("top", solid.collision(ball));
    });

    it('Intersection: Top to Bottom Diagonal - Top collision', function() {
      ball.setPosition(solid.position.x + solid.width - 5, solid.position.y + solid.height + 50); // B: Beneath the solid
      ball.setLastPosition(solid.position.x + solid.width/2, solid.position.y - solid.height/2);  // A: Over the solid

      assert.equal("top", solid.collision(ball));
    });

    it('Intersection: Top to Left - Top collision', function() {
      ball.setPosition(solid.position.x - 5, solid.position.y + solid.height/2);  // B: Left of the solid
      ball.setLastPosition(solid.position.x + solid.width/2, solid.position.y - 5);  // A: Over the solid

      assert.equal("top", solid.collision(ball));
    });

    it('Intersection: Top to Right - Top collision', function() {
      ball.setPosition(solid.position.x + solid.width + 5, solid.position.y + solid.height/2);  // B: Right of the solid
      ball.setLastPosition(solid.position.x + solid.width/2, solid.position.y - 5);  // A: Over the solid

      assert.equal("top", solid.collision(ball));
    });

   
    // Bottom
    it('Intersection: Bottom to Top Vertical - Bottom collision', function() {
      ball.setPosition(solid.position.x + solid.width/2, solid.position.y - solid.height/2); // B: Over the solid
      ball.setLastPosition(solid.position.x + solid.width/2, solid.position.y + solid.height + 5);  // A: Beneath the solid

      assert.equal("bottom", solid.collision(ball));
    });

    it('Intersection: Bottom to Top Diagonal - Bottom collision', function() {
      ball.setPosition(solid.position.x + 5, solid.position.y - solid.height/2); // B: Over the solid
      ball.setLastPosition(solid.position.x + solid.width/2, solid.position.y + solid.height + 5);  // A: Beneath the solid

      assert.equal("bottom", solid.collision(ball));
    });

    it('Intersection: Bottom to Left - Bottom collision', function() {
      ball.setPosition(solid.position.x - 5, solid.position.y + solid.height/2);  // B: Left of the solid
      ball.setLastPosition(solid.position.x + solid.width/2, solid.position.y + solid.height + 5);  // A: Beneath the solid

      assert.equal("bottom", solid.collision(ball));
    });

    it('Intersection: Bottom to Right - Bottom collision', function() {
      ball.setPosition(solid.position.x + solid.width + 5, solid.position.y + solid.height/2);  // B: Right of the solid
      ball.setLastPosition(solid.position.x + solid.width/2, solid.position.y + solid.height + 5);  // A: Beneath the solid

      assert.equal("bottom", solid.collision(ball));
    });


    // Left
    it('Intersection: Left to Right Horizontal - Left collision', function() {
      ball.setPosition(solid.position.x + solid.width + 5, solid.position.y + solid.height/2); // B: Right of the solid
      ball.setLastPosition(solid.position.x - 5, solid.position.y + solid.height/2);  // A: Left of the solid

      assert.equal("left", solid.collision(ball));
    });

    it('Intersection: Left to Right Diagonal - Left collision', function() {
      ball.setPosition(solid.position.x + solid.width + 5, solid.position.y + solid.height - 5); // B: Right of the solid
      ball.setLastPosition(solid.position.x - 5, solid.position.y + solid.height/2);  // A: Left of the solid

      assert.equal("left", solid.collision(ball));
    });

    it('Intersection: Left to Top - Left collision', function() {
      ball.setPosition(solid.position.x + solid.width/2, solid.position.y - 5);  // B: Over the solid
      ball.setLastPosition(solid.position.x - 5, solid.position.y + solid.height/2);  // A: Left of the solid

      assert.equal("left", solid.collision(ball));
    });

    it('Intersection: Left to Bottom - Left collision', function() {
      ball.setPosition(solid.position.x + solid.width/2, solid.position.y + solid.height + 5);  // B: Beneath the solid
      ball.setLastPosition(solid.position.x - 5, solid.position.y + solid.height/2);  // A: Left of the solid

      assert.equal("left", solid.collision(ball));
    });
    

    // Right
    it('Intersection: Right to Left Horizontal - Left collision', function() {
      ball.setPosition(solid.position.x - 5, solid.position.y + solid.height/2); // B: Left of the solid
      ball.setLastPosition(solid.position.x + solid.width + 5, solid.position.y + solid.height/2);  // A: Right of the solid

      assert.equal("right", solid.collision(ball));
    });

    it('Intersection: Right to Left Diagonal - Left collision', function() {
      ball.setPosition(solid.position.x - 5, solid.position.y + solid.height - 5); // B: Left of the solid
      ball.setLastPosition(solid.position.x + solid.width + 5, solid.position.y + solid.height/2);  // A: Right of the solid

      assert.equal("right", solid.collision(ball));
    });

    it('Intersection: Right to Top - Left collision', function() {
      ball.setPosition(solid.position.x + solid.width/2, solid.position.y - 5);  // B: Over the solid
      ball.setLastPosition(solid.position.x + solid.width + 5, solid.position.y + solid.height/2);  // A: Right of the solid

      assert.equal("right", solid.collision(ball));
    });

    it('Intersection: Right to Bottom - Left collision', function() {
      ball.setPosition(solid.position.x + solid.width/2, solid.position.y + solid.height + 5);  // B: Beneath the solid
      ball.setLastPosition(solid.position.x + solid.width + 5, solid.position.y + solid.height/2);  // A: Right of the solid

      assert.equal("right", solid.collision(ball));
    });


  });

  describe('#-> Collision handling - Collision and relocation.', function() {
    var solid = new Solid(100, 100, 50, 50);
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