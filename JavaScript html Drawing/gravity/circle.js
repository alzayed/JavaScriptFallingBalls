function Circle(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
    }

    this.update = function() {
        if (this.y + this.radius > canv.height) {
            this.dy = -this.dy * gravityFriction;
        } else {
            this.dy += gravity;
        }
        if (this.x + this.radius > canv.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        this.dx = this.dx * xFriction;
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}