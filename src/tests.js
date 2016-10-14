
function circleOnLine_Collision_Test() {

    var line = { A: {x: 100, y: 100},
                 B: {x: 200, y: 100} };

    var circle = { x: 5,
                   y: 5,
                   radius: 5 };

    console.log(circleOnLine_Collision( circle, line )); 


    circle.x = 150;
    circle.y = 90;
    circle.radius = 10;
    console.log(circleOnLine_Collision( circle, line ));




}