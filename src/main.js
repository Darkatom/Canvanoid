import Canvanoid from './Canvanoid.js';

window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || 
						       window.msRequestAnimationFrame || window.mozRequestAnimationFrame;
					
var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var game = new Canvanoid(canvas); 	
game.start();
