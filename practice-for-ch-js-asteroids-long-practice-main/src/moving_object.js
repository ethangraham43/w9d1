

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

MovingObject.prototype.move = function () {
    // let posX = this.pos[0];
    // let posY = this.pos[1];
    let velX = this.vel[0];
    let velY = this.vel[1];

    this.pos[0] += velX;
    this.pos[1] += velY;

    // return this;
}


module.exports = MovingObject;

