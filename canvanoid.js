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
	board = new Board([ [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
						[1, 1, 1, 1, 1, 1, 1, 1, 1],
						[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
						[1, 1, 1, 1, 1, 1, 1, 1, 1],
						[2, 2, 2, 2, 2, 2, 2, 2, 2, 2]]);

	balls = [ new Ball(board.x + board.w/2, board.y + board.h/2) ];


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
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
	
	for (var b of balls) 
		b.draw();

	board.draw();
	vaus.draw();
};