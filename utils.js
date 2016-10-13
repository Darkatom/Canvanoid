

function circleOnLine_Collision( circle, line ) {
	// circle: x, y, radius
	// line: point A(x, y) -> point B (x, y)

	// Triangle: A -> B -> C, with angles alpha, beta, gamma.
	//    B
	// c / \ a
	//  A - C
	//    b

	// To calculate collision, we will use the circle to form a triangle.
	//    Circle
	// c /  | a
	//  A - B
	//    b

	var lineDis = { x: line.B.x - line.A.x, 
					y: line.B.y - line.A.y};
	var c = { x: circle.x - line.A.x, 
			  y: circle.y - line.A.y}; 

	var alpha =	angle(lineDis, c);	// angle between line and c
	var beta = Math.PI - Math.PI/2 - alpha;

	var a = { x: c.x*Math.sin(alpha)/Math.sin(Math.PI/2),
			  y: c.y*Math.sin(alpha)/Math.sin(Math.PI/2) };

	var disLineCircle = Math.sqrt(Math.pow(a.x,2) + Math.pow(a.y, 2));

	if (disLineCircle > circle.radius)
		return null;

	var b = { x: a.x*Math.sin(beta)/Math.sin(alpha),
			  y: a.y*Math.sin(beta)/Math.sin(alpha) };

	var collisionPoint = { x: line.A.x + b.x, y: line.A.y + b.y};

	return collisionPoint;
}

function normalLine ( line ) {
	// L: A -> B
	
	var d = distance(line.A, line.B);
	var midPoint = { x: (line.A.x + line.B.x)/2,  y: (line.A.y + line.B.y)/2 };
	
	//var slope = (line.b.y - line.a.y) / (line.b.x - line.a.x);
	var negativeSlope = (-1) * (line.B.x - line.A.x) / (line.B.y - line.A.y);
	
	// y = mx + b		
	// --> m = slope // We'll use the negative slope
	// --> x, y = initial point // We'll use the midPoint
	// --> b = our target  -> b = y - mx
	
	var B = midPoint.y - negativeSlope*midPoint.x;
	
	// y = mx + b		
	// x = (y - b)/m	
	
	var line = { A: {x: (midPoint.x - d/2), 
					 y: (midPoint.x - d/2)*negativeSlope + B} ,
				 B: {x: (midPoint.x + d/2), 
					 y: (midPoint.x + d/2)*negativeSlope + B} 
				};
	return line;
}

function distance( P1, P2 ) {
	return Math.sqrt(Math.pow(P2.x - P1.x, 2) + Math.pow(P2.y - P1.y, 2));
}

function angle(dis1, dis2) {
	// dis x and y of line
	// returns angle between lines
	var upper = dis1.x * dis2.x + dis1.y * dis2.y;
	var lower = Math.sqrt(Math.pow(dis1.x,2) + Math.pow(dis1.y,2)) * Math.sqrt(Math.pow(dis2.x,2) + Math.pow(dis2.y,2));
	return Math.acos(upper/lower);
}