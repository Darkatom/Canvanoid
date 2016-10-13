function main() {				
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	draw();

	then = now;

	requestAnimationFrame(main);
};

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
};

function update(dt) {		
	for (var b of balls)
		b.update(dt);

	board.update(dt);
	vaus.update(dt);
};

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	board.draw();

	for (var b of balls) 
		b.draw();

	vaus.draw();
	ctx.font = "20px Georgia";
	ctx.fillText("Score: "+ score, board.x + board.w - 100, board.y + board.h + 30);
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
};