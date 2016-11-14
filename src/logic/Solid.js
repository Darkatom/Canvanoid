import Ball from "./Ball.js";
import Sprite from "./../interface/Sprite.js";

export default class Solid {
  constructor(x, y, w, h) {
    this.position = {x: x, y: y}; 
    this.width = w;
    this.height = h; 
    this.sprite = null;
  }

  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  draw(ctx) {
    if (this.sprite == null)
      ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);	
    else
      this.sprite.render(ctx, this.position.x, this.position.y, this.width, this.height);
  }

  update(balls) {
    for (var b of balls) {  // look for collisions
      var dir = this.collision(b);
      if (dir != null)
        this.collided(dir, b);
    }
  }

  collided( dir, ball ) { // Management of the ball after collision
    switch(dir) {
      case "top":
        if (ball.position.x >= this.position.x + this.width/3 && 	// Is ball at the center of the solid?
          ball.position.x <= this.position.x + 2*this.width/3) {
          ball.setDirection(ball.movementVector.x, -ball.movementVector.y);   // change movement vertically

        } else {
          var dirX = 0;
          var dirY = 0;
          var angle = 0;
          if (ball.position.x + ball.radius <= this.position.x + ball.radius ) { // Left edge of the solid?
            angle = 205; // degrees

          } else if (ball.position.x - ball.radius >= this.position.x + this.width - ball.radius ) { // Right edge of the solid?
            angle = -25; // degrees			

          } else { // The ball hit a side (between the center and the edges)
            if (ball.position.x > this.position.x + this.width/2 ) // right side
              angle = 315; // degrees	
            else	// left side
              angle = 225; // degrees	
          }
          angle = angle*Math.PI/180; // radians
          dirX = Math.cos(angle);	
          dirY = Math.sin(angle);
          ball.setDirection(dirX, dirY);
        }
        ball.setPosition(ball.position.x, this.position.y - ball.radius);   // put ball top from solid
        break;


    case "bottom":
      if (ball.position.x >= this.position.x + this.width/3 && 	// Is ball at the center of the solid?
        ball.position.x <= this.position.x + 2*this.width/3) {
        ball.setDirection(ball.movementVector.x, -ball.movementVector.y);   // change movement vertically

      } else {
        var dirX = 0;
        var dirY = 0;
        var angle = 0;
        if (ball.position.x + ball.radius <= this.position.x + ball.radius ) { // Left edge of the solid?
        angle = 155; // degrees

      } else if (ball.position.x - ball.radius >= this.position.x + this.width - ball.radius ) { // Right edge of the solid?
        angle = 25;	 // degrees			

      } else { // The ball hit a side (between the center and the edges)

        if (ball.position.x > this.position.x + this.width/2 ) // right side
          angle = 45; // degrees	
        else	// left side
          angle = 135; // degrees	
        }

        angle = angle*Math.PI/180; // radians
        dirX = Math.cos(angle);	
        dirY = Math.sin(angle);
        ball.setDirection(dirX, dirY);
      }
      ball.setPosition(ball.position.x, this.position.y + this.height + ball.radius);   // put ball bottom from solid
      break;

    case "left":	
      if 	(ball.position.y + ball.radius > this.position.y + ball.radius && 
        ball.position.y - ball.radius < this.position.y + this.height - ball.radius ) {
        ball.setDirection(-ball.movementVector.x, ball.movementVector.y);   // change movement horizontally

      } else {
        var dirX = 0;
        var dirY = 0;
        var angle = 0;

        if (ball.position.y + ball.radius <= this.position.y + ball.radius ) { // Upper edge of the solid?
          angle = 205; // degrees
        } else if (ball.position.y - ball.radius >= this.position.y + this.height - ball.radius ) { // Lower edge of the solid?
          angle = 155;  // degrees			
        } 

        angle = angle*Math.PI/180; // radians
        dirX = Math.cos(angle);	
        dirY = Math.sin(angle);
        ball.setDirection(dirX, dirY);			
      }

      ball.setPosition(this.position.x - ball.radius, ball.position.y);   // put ball left from solid
      break;

    case "right":	
      if (ball.position.y + ball.radius > this.position.y + ball.radius && 
        ball.position.y - ball.radius < this.position.y + this.height - ball.radius ) {
        ball.setDirection(-ball.movementVector.x, ball.movementVector.y);   // change movement horizontally

      } else {		
        var dirX = 0;
        var dirY = 0;
        var angle = 0;

        if (ball.position.y + ball.radius <= this.position.y + ball.radius ) { // Upper edge of the solid?
          angle = -25; // degrees
        } else if (ball.position.y - ball.radius >= this.position.y + this.height - ball.radius ) { // Lower edge of the solid?
          angle = 25;  // degrees			
        }

        angle = angle*Math.PI/180; // radians
        dirX = Math.cos(angle);	
        dirY = Math.sin(angle);
        ball.setDirection(dirX, dirY);			
      }
      ball.setPosition(this.position.x + this.width + ball.radius, ball.position.y);   // put ball right from solid
      break;
    }

  }

  collision( ball ) {   
    if ((ball.position.x + ball.radius >= this.position.x && ball.position.x - ball.radius <= this.position.x + this.width) && // horizontal collision
        (ball.position.y + ball.radius >= this.position.y && ball.position.y - ball.radius <= this.position.y + this.height))   // vertical collision
    {
      if (ball.lastPosition.y - ball.radius > this.position.y + this.height) {  // hit bottom
        return "bottom";

      } else if (ball.lastPosition.y + ball.radius < this.position.y) {  // hit top
        return "top";

      } else if (ball.lastPosition.x + ball.radius < this.position.x) {  // hit left
        return "left";

      } else if (ball.lastPosition.x - ball.radius > this.position.x + this.width) {  // hit right
        return "right";	   
      }

    } else {	
      var ball_movLine = {A: ball.lastPosition, B: ball.position};
      var top_line =  {A: {x: this.position.x, 			  y: this.position.y}, 
      B: {x: this.position.x + this.width, y: this.position.y}};

      var left_line = {A: {x: this.position.x, y: this.position.y}, 
      B: {x: this.position.x, y: this.position.y + this.height}};

      var right_line = {A: {x: this.position.x + this.width, y: this.position.y}, 
      B: {x: this.position.x + this.width, y: this.position.y + this.height}};

      var bottom_line = {A: {x: this.position.x, 			 	 y: this.position.y + this.height}, 
      B: {x: this.position.x + this.width,  y: this.position.y + this.height}};

      var top_collision = this.intersection(ball_movLine, top_line);
      var bottom_collision = this.intersection(ball_movLine, bottom_line);
      var left_collision = this.intersection(ball_movLine, left_line);
      var right_collision = this.intersection(ball_movLine, right_line);

      if ((ball.lastPosition.y + ball.radius < this.position.y) && (top_collision != null))  {  // comes from top
        ball.setPosition(top_collision.x, top_collision.y);
        return "top";

      } else if ((ball.lastPosition.y - ball.radius > this.position.y + this.height) && (bottom_collision != null)) {  // comes from bottom
        ball.setPosition(bottom_collision.x, bottom_collision.y);
        return "bottom";

      } else if ((ball.lastPosition.x + ball.radius < this.position.x) && (left_collision != null)) {  // comes from left
        ball.setPosition(left_collision.x, left_collision.y);
        return "left";

      } else if ((ball.lastPosition.x - ball.radius > this.position.x + this.width) && (right_collision != null)) {  // comes from right
        ball.setPosition(right_collision.x, right_collision.y);
        return "right";	   
      }
    }

    return null;		
  }

  intersection(L1, L2) {
    // http://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect
    // Line 1: A -> B
    //		   A = p, 	B = p + r
    // Line 2: C -> D
    //		   C = q, 	D = q + s

    var p = L1.A;	// Initial point
    var r = { x: (L1.B.x - L1.A.x), y: (L1.B.y - L1.A.y) };	// r = B - A = (p + r) - p

    var q = L2.A;	
    var s = { x: (L2.B.x - L2.A.x), y: (L2.B.y - L2.A.y) };	

    // X is the intersection of A->B and C->D. X == p + tr == q + us
    // t = (q-p)x s/(r x s)			u = (p - q) x s / (s x r)		** x it's the cross product
    var QP = { x: (q.x - p.x), y: (q.y - p.y)};	// var PQ = { x: (p.x - q.x), y: (p.y - q.y)}
    var RS = this.crossProduct(r, s); 				// var SR = crossProduct(s, r)

    if (RS == 0) {
      if (this.crossProduct(QP, r) == 0) {	// Co-linear
        var QSP = { x: (q.x + s.x - p.x), y: (q.y + s.y - p.y)};
        var t0 = this.dotProduct(QP, r) / this.dotProduct(r, r);
        var t1 = this.dotProduct(QSP, r) / this.dotProduct(r, r);

        var I = null;		
        if (t0 < 1 && 0 < t1) // overlap = a.start < b.end && b.start < a.end;
          I = { x: L2.A.x, y: L2.A.y };					
        else if (t1 < 1 && 0 < t0)
          I = { x: L2.B.x, y: L2.B.y  };	

        return I;				
      }

      return null;	// Parallel		
    }

    // t = (q-p)x s/(r x s)			u = (p-q) x r / (s x r)		** x it's the cross product
    var t = this.crossProduct(QP, s) / RS;

    var PQ = { x: (p.x - q.x), y: (p.y - q.y)};
    var u = this.crossProduct(PQ, r) / this.crossProduct(s, r);

    if (0 < t && t < 1 && 0 < u && u < 1) {	// 0 <= t, u <= 1 ==> Intersection
      var I = { x: p.x + t*r.x, y:  p.y + t*r.y};	
      return I;				
    }

    return null;
  }	

  onSegment(A, B, C) {
    var AC = { x: (A.x - C.x), y: (A.y - C.y)};
    var CB = { x: (C.x - B.x), y: (C.y - B.y)};
    var AB = { x: (A.x - B.x), y: (A.y - B.y)};

    return (AC.x + CB.x == AB.x) && (AC.y + CB.y == AB.y);
  }

  dotProduct(U, V) {
    return (U.x*V.x) + (V.y*U.y);
  }

  crossProduct(U, V) {
    return (U.x*V.y) - (V.x*U.y);
  }

}
