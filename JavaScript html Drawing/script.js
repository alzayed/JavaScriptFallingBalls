var x;
var y;
var radius;
var dx;
var dy;
var circleArray = [];
var colors = ['white', 'blue', 'green', 'red', 'black', 'yellow', 'orange'];
var color;
var mouse = {
    x: undefined,
    y: undefined
}
var maxRadius = 100;
var minRadius = 30;
var maxAlert = 3;
var alertCounter = 0;

var myButton = document.getElementById("myButton");
var myCanvas = document.getElementById("myCanvas");
var c = myCanvas.getContext('2d');

window.addEventListener('load', function() {
    myCanvas.width = innerWidth;
    myCanvas.height = innerHeight;
    animate();
});
window.addEventListener('resize', function() {
    myCanvas.width = innerWidth;
    myCanvas.height = innerHeight;
    init();
});

window.addEventListener('mousemove', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
});

function init() {
    circleArray = [];
    for (var i = 0; i < 500; i++) {
        randomizeIt();
        circleArray.push(new Circle(x, y, radius, dx, dy, color));
    }
}

function randomizeIt() {
    radius = Math.random() * 50;
    x = Math.random() * (innerWidth - radius * 2) + radius;
    y = Math.random() * (innerHeight - radius * 2) + radius;
    dx = (Math.random() - 0.5) * 3;
    dy = (Math.random() - 0.5) * 3;
    color = colors[Math.floor(Math.random() * colors.length)];
}

function Circle(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.minRadius = radius;

    this.draw = function () {
        if (this.radius < 0 && alertCounter < maxAlert) {
            alertCounter++;
            alert(this.radius);
        }

        try {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            c.fill();
            c.fillStyle = color;
            c.stroke();
        } catch (er) {
            if (alertCounter < maxAlert) {
                alert(er);
            }
        }

    }

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
    
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // Interactive
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 
            && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                if (this.radius < maxRadius) {
                    this.radius += 3;
                }
        } else if (this.radius > this.minRadius && this.radius > 3) {
            this.radius -= 3;
        }

        this.draw();
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}


init();