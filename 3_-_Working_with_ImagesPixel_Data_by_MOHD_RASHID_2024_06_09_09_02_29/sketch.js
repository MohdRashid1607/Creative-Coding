var img, x, y;

// To retrieve the file, we use function preload()
function preload() {
  img = loadImage("space.jpeg"); // image file is stored in variable img
}

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke(); // it removes the border of the shape
}

function draw() {
  background(0);
  x = mouseX;  // it gets x-axis value from position of the mouse
  y = mouseY;  // it gets y-axis value from position of the mouse
  img.resize(400, 400); // it fits image to given screen
  image(img, 0, 0); // position of the image
  var c = get(x, y); // it gets color data from mouse

  // Reduce brightness to make the star darker
  c = color(red(c) * 0.5, green(c) * 0.5, blue(c) * 0.5);
  fill(c); // fills the color of the shape depending on where mouse points to particular color of the image

  // Draw star at the cursor position
  drawStar(x, y, 10, 20, 5); // inner radius 10, outer radius 20, 5 points
}

function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
