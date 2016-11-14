import Canvanoid from "./../../Canvanoid.js";
import Board from "./../../logic/Board.js";
import Ball from "./../../logic/Ball.js";
import Brick from "./../../logic/Brick.js";
import State from "./../../logic/State.js";
import {expect} from 'chai';

var should = require('chai').should();
var assert = require('assert');


console.log("- Testing Board Functions -");
describe('Board', function() {
  describe('#-> Collision detection.', function() {
    var board = new Board();
    var ball = new Ball(0, 0);

    it('Ball collides the top', function() {
      ball.setPosition(board.position.x + board.width/2, 
                        board.position.y - ball.radius);
      ball.setDirection(0, -1);
      //assert.equal("top", board.collision(ball));
      board.collision(ball).should.equal("top");
    });

    it('Ball collides the bottom', function() {
      ball.setPosition(board.position.x + board.width/2, 
                        board.position.y + board.height + ball.radius);
      ball.setDirection(0, 1);
      //assert.equal("bottom", board.collision(ball));
      board.collision(ball).should.equal("bottom");
    });
        
    it('Ball collides the left', function() {
      ball.setPosition(board.position.x - ball.radius, 
                       board.position.y + board.height/2);
      ball.setDirection(-1, 0);
      //assert.equal("left", board.collision(ball));
      board.collision(ball).should.equal("left");
    });
        
    it('Ball collides the right', function() {
      ball.setPosition(board.position.x + board.width + ball.radius, 
                       board.position.y + board.height/2);
      ball.setDirection(1, 0);
      //assert.equal("right", board.collision(ball));
      board.collision(ball).should.equal("right");
    });
        
    it('Ball does not collide', function() {
      ball.setPosition(board.position.x + board.width/2, 
                       board.position.y + board.height/2);
      //assert.equal(null, board.collision(ball));
      should.not.exist(board.collision(ball));
    });
  });

  describe('#-> Collision handling.', function() {
    var board = new Board();
    var ball = new Ball(0, 0);

    it("Ball is repositioned at board's top, and does no longer collide", function() {
      ball.setPosition(board.position.x + board.width/2, 
                        board.position.y - ball.radius);
      ball.setDirection(0, -1);
      board.collided("top", ball);
      //assert.equal(null, board.collision(ball));
      should.not.exist(board.collision(ball));
    });
    
    it("Ball is repositioned at board's bottom, and does no longer collide", function() {
      ball.setPosition(board.position.x + board.width/2, 
                        board.position.y + board.height + ball.radius);
      ball.setDirection(0, 1);
      board.collided("bottom", ball);
      //assert.equal(null, board.collision(ball));
      should.not.exist(board.collision(ball));
    });
    
    it("Ball is repositioned at board's left, and does no longer collide", function() {
      ball.setPosition(board.position.x, 
                        board.position.y + board.height/2);
      ball.setDirection(-1, 0);
      board.collided("left", ball);
      //assert.equal(null, board.collision(ball));
      should.not.exist(board.collision(ball));
    });
    
    it("Ball is repositioned at board's right, and does no longer collide", function() {
      ball.setPosition(board.position.x + board.width + ball.radius, 
                        board.position.y + board.height/2);
      ball.setDirection(1, 0);
      board.collided("right", ball);
      //assert.equal(null, board.collision(ball));
      should.not.exist(board.collision(ball));
    });
  });
    
  describe('#-> Brick handling.', function() {
    var canvas = null;
    var canvasMock = null; 
    var game = null;
    var balls = null;

    beforeEach(function() {
      // canvas = {getContext: function(){}};
      // canvasMock = sinon.mock(canvas);
      // canvasMock.expects("getContext").once().throws();
      game = new Canvanoid(document.createElement("canvas"));
      game.board = new Board(); 
      game.balls = [ new Ball(0, 0)];
    });

    afterEach(function() {
      // canvasMock.verify();
    });

    it('Board is clear with no bricks', function() {
      game.board.bricks = [];
      game.board.update(game);
      //assert.equal(true, game.board.clear);
      expect(game.board.clear).to.equal(true);
    });

    it('Board is not clear if there are bricks', function() {
      game.state = new State();
      game.board.setStage(0);
      game.board.update(game);

      //assert.equal(false, game.board.clear);
      expect(game.board.clear).to.equal(false);
    });

    it('Brick is deleted if it has no life left', function() {
      var brick = new Brick(game.board.position.x + game.board.width/2, 
                            game.board.position.y + game.board.height/2, 
                            50, 20, 1, 1);
      var score = brick.value;

      brick.life = 0;
      game.board.bricks = [brick];
      game.state = new State();
      game.balls = [ new Ball(brick.position.x, brick.position.y) ];

      game.board.update(game);

      //assert.equal(-1, game.board.bricks.indexOf(brick));
      expect(game.board.bricks.indexOf(brick)).to.equal(-1);
    });

    it('If brick is deleted, its value is added to score', function() {
      var brick = new Brick(game.board.position.x + game.board.width/2, 
                            game.board.position.y + game.board.height/2, 
                            50, 20, 1, 1);
      var score = brick.value;

      brick.life = 0;
      game.board.bricks = [brick];
      game.balls = [ new Ball(brick.position.x, brick.position.y) ];
      game.state = new State();

      game.board.update(game);
      
      //assert.equal(score, game.state.score);
      expect(game.state.score).to.equal(score);
    });
  });
});