var canv = document.getElementById("canvas");
var c = canv.getContext("2d");
var circle;
var circleArray = [];
var gravity = 1;
var gravityFriction = 0.85;
var xFriction = 0.995;
var x;
var y;
var colors = ['red', 'blue', 'white', 'green', 'yellow', 'pink'];
var color;
var dx;
var dy;
var frame;

function animate() {
    frame = requestAnimationFrame(animate);
    c.clearRect(0, 0, canv.width, canv.height);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

function init() {
    cancelAnimationFrame(frame);
    circleArray = [];
    resizeCanvas();
    for (var i = 0; i < 300; i++) {
        randomizeIt();
        circleArray.push(new Circle(x, y, radius, dx, gravity, color));
    }
    animate();
}

init();