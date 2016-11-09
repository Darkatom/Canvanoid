import Canvanoid from "./../../Canvanoid.js";
import Board from "./../../logic/Board.js";
import Ball from "./../../logic/Ball.js";
import Paddle from "./../../logic/Paddle.js";
import State from "./../../logic/State.js";
import stages from './../../assets/stages.js';

var expect = require('chai').expect;
var assert = require('assert');



console.log("- Testing Canvanoid Functions -");
describe('Canvanoid', function() {
    describe('#-> Ball handling', function() {
        
        var canvas = null;
        var canvasMock = null; 
        var game = null;
        var balls = null;

        beforeEach(function() {
            //canvas = {getContext: function(){}};
            //canvasMock = sinon.mock(canvas);
            //canvasMock.expects("getContext").once().throws();
            game = new Canvanoid(document.createElement("canvas"));
            game.vaus = new Paddle(150, 150);

            balls = [new Ball(game.vaus.position.x + game.vaus.width/2,     // Over the paddle
                              game.vaus.position.y - game.vaus.height),
                     new Ball(game.vaus.position.x + game.vaus.width/2,     // Beneath the paddle
                              game.vaus.position.y + game.vaus.height*2)];            
        });

        afterEach(function() {
            // canvasMock.verify();
        });
        

        it('Balls beneath the paddle are deleted', function() {
            game.balls = [];
            game.balls.push(balls[1]);
            game.updateBalls(0);
            
            //assert.equal(-1, game.balls.indexOf(balls[1]));
            expect(game.balls.indexOf(balls[1])).to.equal(-1);
        });

        it('Balls over the paddle are NOT deleted', function() {
            game.balls = [];
            game.balls.push(balls[0]);
            game.updateBalls(0);

            //assert.equal(0, game.balls.indexOf(balls[0]));
            expect(game.balls.indexOf(balls[0])).to.equal(0);
        });
    });
    
    describe('#-> State handling', function() {
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
            game.vaus = new Paddle(0,0);
            game.state = new State();
            game.state.initGame();
        });

        afterEach(function() {
            // canvasMock.verify();
        });


        it('Next stage when board is clear', function() {

            game.board.clear = true;
            game.balls = [ new Ball(0, 0) ];
            var currentStage = game.state.stage;

            game.updateState();

            //assert.equal(currentStage + 1, game.state.stage);
            expect(game.state.stage).to.equal(currentStage + 1);
        });

        it('Stage reseted when all balls are lost and a life is lost (but there are still lives left)', function() {
            game.board.clear = false;
            game.balls = [];
            var currentStage = game.state.stage;
            var currentLives = game.state.lives;

            game.updateState();

            //assert.equal(currentLives - 1, game.state.lives);
            expect(game.state.lives).to.equal(currentLives - 1);
        });

        it('Game over (all balls lost & no lives left)', function() {
            game.balls = [];
            game.state.lives = 0;

            var fakeState = new State();
            fakeState.endGame();
            var stateMSG = fakeState.msg;

            game.updateState();
            
            //assert.equal(stateMSG, game.state.msg); 
            expect(game.state.msg).to.equal(stateMSG);
        });

        it('Game won (last stage reached & at least one life left)', function() {
            game.balls = [ new Ball(0, 0) ];
            game.state.lives = 1;
            game.state.stage = stages.length + 1;

            var fakeState = new State();
            fakeState.wonGame();
            var stateMSG = fakeState.msg;

            game.updateState();
            
            //assert.equal(stateMSG, game.state.msg); 
            expect(game.state.msg).to.equal(stateMSG);
        });
    });
});