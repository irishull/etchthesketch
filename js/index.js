'use strict';

/*
note to self
left knob: left to right

right knob: up to down
*/
var canvas = document.querySelector('#etchDraw');
var ctx = canvas.getContext('2d');
canvas.width = 550;
canvas.height = 450;

ctx.strokeStyle = '#212020';
ctx.lineJoin = 'miter';
ctx.lineCap = 'miter';
ctx.lineWidth = 3;

var isDrawing = false;
var lastX = 0;
var lastY = 0;

function draw(e) {
  if (!isDrawing) return; // stop function from running if not mouse down
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  lastX = e.offsetX;
  lastY = e.offsetY;
}

canvas.addEventListener('mousedown', function (e) {
  isDrawing = true;
  // add below line for freeform drawing
  //[lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', function () {
  return isDrawing = false;
});
canvas.addEventListener('mouseout', function () {
  return isDrawing = false;
});

// canvas.addEventListener('onkeypress', draw);