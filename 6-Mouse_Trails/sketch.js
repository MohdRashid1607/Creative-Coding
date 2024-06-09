var d = 50;
var x, y;
var c;

function setup() {
  c = createCanvas(400, 400);
  background("#009688");
  noStroke();
  // to remove the half shape on the uppermost left side
  mouseX = -d;
  mouseY = -d;
}

function draw() {
  // it draws the shape wherever the cursor moves
  x = mouseX;
  y = mouseY;
  fill(220, 242, 241, 50); // fill the color of the shape with opacity of 50
  translate(-10, 30); // it changes the position of shape to make it center of the cursor

  // Circle shape
  ellipse(x, y, d, d);
}

function keyPressed() {
  if (keyCode == 65) { // it saves the images when key "A" or "a" is pressed
    saveCanvas(c, 'Mouse Interactive Activity', 'jpg'); // (file, filename, format)
  }
}
