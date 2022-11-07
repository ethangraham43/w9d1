const Util = require('./util.js')
const MovingObject = require('./moving_object.js')

Util.inherits(Asteroid, MovingObject)

class Asteroid {
  constructor(pos) {
    this.COLOR = "blue";
    this.RADIUS = 30;
    super(pos, this.RADIUS )
  }



};

