let stars = [];

function setup() {
  createCanvas(400, 400);
  generateStars();
}

function draw() {
  background(10, 10, 50); // Darker night sky background

  // Draw the stars
  drawStars();

  // Draw the grass
  fill(34, 139, 34);
  rect(0, height * 3/4, width, height / 4);

  // Draw the road
  fill(50);
  rect(0, height * 7/8, width, height / 8);

  // Draw the car
  drawCar(width / 2 - 100, height * 7/8 - 60);

  // Draw the moon
  fill(255, 255, 240);
  ellipse(100, 100, 80, 80);
}

function drawCar(x, y) {
  // Car body
  fill(255, 0, 0);
  rect(x, y, 200, 50);

  // Car roof
  rect(x + 50, y - 30, 100, 30);

  // Car windows
  fill(135, 206, 250);
  rect(x + 60, y - 25, 40, 25);
  rect(x + 120, y - 25, 40, 25);

  // Car wheels
  fill(0);
  ellipse(x + 50, y + 50, 40, 40);
  ellipse(x + 150, y + 50, 40, 40);
}

function generateStars() {
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: random(width),
      y: random(height / 2),
      size: random(1, 3)
    });
  }
}

function drawStars() {
  fill(255, 255, 255);
  noStroke();
  for (let star of stars) {
    ellipse(star.x, star.y, star.size, star.size);
  }
}
