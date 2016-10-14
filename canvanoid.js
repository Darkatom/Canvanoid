function main() {	
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	draw();

	then = now;

	
	if (board.clear) {
		stageNumber++;
		reset();
	} else if (balls.length <= 0) {
		lives--;
		score = 0;
		if (lives <= 0) showMessage( "GAME OVER!" );
			       else reset();
	} 

	if (lives > 0)
		if (stageNumber >= stages.length) showMessage( "OMG YOU WON OMG!" );
		else requestAnimationFrame(main);
};

function showMessage( msg ) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.font = "50px Georgia";
	ctx.fillText( msg , board.x + board.w/2 - 150, board.y + board.h/2 - 100);
	ctx.font = "30px Georgia";
	ctx.fillText("Score: "+ score, board.x + board.w/2 - 70, board.y + board.h/2 - 50);
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

// -- EXECUTION -- //

function require() {
	var requiring = [ "utils.js", "tests.js", 
				 	  "./classes/Ball.js", "./classes/Solid.js", "./classes/Brick.js", "./classes/Board.js"
				    ];

    for (var s of requiring) {
		console.log(s);
		var imported = document.createElement('script');
		imported.type = "text/javascript";
		imported.src = s;
		document.head.appendChild(imported);
	}
}

function reset() {	
	canvas = document.getElementById('canvas')
    canvas.width = window.innerWidth - 100; 
    canvas.height = window.innerHeight - 100; 

	ctx = canvas.getContext('2d');

	board = new Board(stages[stageNumber]);

	balls = [ new Ball(board.x + board.w/2, board.y + board.h/2 + 100) ];

	vaus = new Vaus();
	vaus.start();

	state = "playing";
}

function update(dt) {		
	for (var b of balls) {
		b.update(dt);
		if (b.y >= vaus.y + vaus.h) {
			balls.splice(balls.indexOf(b), 1);
			b = null;
		}
	}

	board.update(dt);
	vaus.update(dt);
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	board.draw();

	for (var b of balls) 
		b.draw();

	vaus.draw();
	ctx.font = "20px Georgia";
	ctx.fillText("Score: "+ score, board.x + board.w - 100, board.y + board.h + 30);
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	for (var i = 0; i < lives; i++) {
		lifeSprite.render(board.x + 10 + i*lifeSprite.w + i*5, 
		                  board.y + board.h + 10 + lifeSprite.h, 
		                  lifeSprite.w, lifeSprite.h);
	}
}