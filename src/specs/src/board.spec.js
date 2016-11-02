import Canvanoid from "./../../Canvanoid.js";
import Board from "./../../logic/Board.js";
import Ball from "./../../logic/Ball.js";
import Brick from "./../../logic/Brick.js";
import State from "./../../logic/State.js";

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
            assert.equal("top", board.collision(ball));
        });

        it('Ball collides the bottom', function() {
            ball.setPosition(board.position.x + board.width/2, 
                             board.position.y + board.height + ball.radius);
            ball.setDirection(0, 1);
            assert.equal("bottom", board.collision(ball));
        });
            
        it('Ball collides the left', function() {
            ball.setPosition(board.position.x - ball.radius, 
                             board.position.y + board.height/2);
            ball.setDirection(-1, 0);
            assert.equal("left", board.collision(ball));
        });
            
        it('Ball collides the right', function() {
            ball.setPosition(board.position.x + board.width + ball.radius, 
                             board.position.y + board.height/2);
            ball.setDirection(1, 0);
            assert.equal("right", board.collision(ball));
        });
            
        it('Ball does not collide', function() {
            ball.setPosition(board.position.x + board.width/2, 
                             board.position.y + board.height/2);
            assert.equal(null, board.collision(ball));
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
            assert.equal(null, board.collision(ball));
        });
        
        it("Ball is repositioned at board's bottom, and does no longer collide", function() {
            ball.setPosition(board.position.x + board.width/2, 
                             board.position.y + board.height + ball.radius);
            ball.setDirection(0, 1);
            board.collided("bottom", ball);
            assert.equal(null, board.collision(ball));
        });
        
        it("Ball is repositioned at board's left, and does no longer collide", function() {
            ball.setPosition(board.position.x - ball.radius, 
                             board.position.y + board.height/2);
            ball.setDirection(-1, 0);
            board.collided("left", ball);
            assert.equal(null, board.collision(ball));
        });
        
        it("Ball is repositioned at board's right, and does no longer collide", function() {
            ball.setPosition(board.position.x + board.width + ball.radius, 
                             board.position.y + board.height/2);
            ball.setDirection(1, 0);
            board.collided("right", ball);
            assert.equal(null, board.collision(ball));
        });
    });
    
    describe('#-> Brick handling.', function() {
        var game = new Canvanoid();
        game.board = new Board(); 
        game.balls = [ new Ball(0, 0)];

        it('Board is clear with no bricks', function() {
            game.board.bricks = [];
            game.board.update(game);
            assert.equal(true, game.board.clear);
        });

        it('Board is not clear if there are bricks', function() {
            game.state = new State();
            game.board.setStage(0);
            game.board.update(game);

            assert.equal(false, game.board.clear);
        });

        it('Brick is deleted if it has no life left', function() {
            var brick = new Brick(game.board.position.x + game.board.width/2, 
                                  game.board.position.y + game.board.height/2, 
                                  50, 20, 1, 1);
            var score = brick.value;

            game.board.bricks = [brick];
            game.state = new State();
            game.balls = [ new Ball(brick.position.x, brick.position.y) ];

            game.board.update(game);

            assert.equal(-1, game.board.bricks.indexOf(brick));
        });

        it('If brick is deleted, its value is added to score', function() {
            var brick = new Brick(game.board.position.x + game.board.width/2, 
                                  game.board.position.y + game.board.height/2, 
                                  50, 20, 1, 1);
            var score = brick.value;

            game.board.bricks = [brick];
            game.balls = [ new Ball(brick.position.x, brick.position.y) ];
            game.state = new State();

            game.board.update(game);
            
            console.log(score);
            console.log(game.state.score);

            assert.equal(score, game.state.score);
        });
    });
});