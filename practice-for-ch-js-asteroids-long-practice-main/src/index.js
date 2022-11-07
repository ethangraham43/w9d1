console.log("We out here")

const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

const mo = new MovingObject(
    [30, 30],
    [10, 10],
    20,
    "#00FF00"
);

// debugger;

document.addEventListener("DOMContentLoaded", function() {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 500;
    canvasEl.height = 500;

    const ctx = canvasEl.getContext("2d");
    mo.draw(ctx)
})
