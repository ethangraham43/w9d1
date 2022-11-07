

function MovingObject(pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
};

MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color
    ctx.beginPath()

    ctx.arc(
        this.pos[0], 
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI
    )

    ctx.fill();

};


module.exports = MovingObject;

