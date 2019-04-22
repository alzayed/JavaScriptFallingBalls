window.addEventListener('load', function() {
    resizeCanvas();
});

window.addEventListener('resize', function() {
    resizeCanvas();
});

window.addEventListener('click', function() {
    init();
});

function resizeCanvas() {
    canv.width = innerWidth;
    canv.height = innerHeight;
}

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function randomizeIt() {
    dx = randomRange(-7,7);
    radius = randomRange(10, 50);
    x = randomRange(0, canv.width);
    y = randomRange(0, canv.height / 5 * 4);
    color = randomColor(colors);
}


