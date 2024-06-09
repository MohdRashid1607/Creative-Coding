function setup() {
  createCanvas(600, 600);
  background(6, 4, 82); // Dark blue background for space
  smooth();
}

function draw() {
  noStroke();

  // Draw the moon
  fill(232, 232, 218);
  ellipse(300, 775, 700, 700);

  // Draw craters
  fill(113, 113, 112, 100);
  ellipse(170, 575, 190, 140);
  ellipse(255, 550, 90, 70);
  ellipse(455, 522, 100, 85);

  // Draw small stars
  fill(255);
  ellipse(30, 450, 10, 10);
  ellipse(50, 300, 10, 10);
  ellipse(100, 375, 20, 20);
  ellipse(140, 300, 5, 5);
  ellipse(50, 185, 10, 10);
  ellipse(20, 75, 20, 20);
  ellipse(130, 40, 10, 10);
  ellipse(230, 75, 5, 5);
  ellipse(400, 100, 10, 10);
  ellipse(450, 40, 20, 20);
  ellipse(550, 150, 10, 10);
  ellipse(450, 300, 5, 5);
  ellipse(500, 215, 20, 20);
  ellipse(550, 350, 10, 10);
  ellipse(515, 450, 20, 20);
  ellipse(575, 25, 10, 10);

  // Draw planets
  drawPlanet(100, 100, 50, [255, 0, 0]);  // Red planet
  drawPlanet(500, 200, 70, [0, 255, 255]); // Cyan planet
  drawPlanet(400, 50, 40, [255, 165, 0]); // Orange planet

  // Draw UFO in the background
  drawUFO(400, 100);

  // Draw the alien body
  fill(0, 255, 127); // Greenish color
  ellipse(300, 300, 150, 200); // Body

  // Draw the alien head
  ellipse(300, 200, 120, 120); // Head

  // Draw the alien eyes
  fill(255); // White for the eyes
  ellipse(270, 180, 30, 50); // Left eye
  ellipse(330, 180, 30, 50); // Right eye
  fill(0); // Black for the pupils
  ellipse(270, 180, 10, 20); // Left pupil
  ellipse(330, 180, 10, 20); // Right pupil

  // Draw the alien mouth
  noFill();
  stroke(0); // Black color
  strokeWeight(2);
  arc(300, 230, 60, 30, 0, PI); // Mouth

  // Draw the alien antennae
  stroke(0, 255, 127);
  strokeWeight(4);
  line(270, 140, 240, 80); // Left antenna
  line(330, 140, 360, 80); // Right antenna
  fill(0, 255, 127); // Greenish color
  ellipse(240, 80, 20, 20); // Left antenna tip
  ellipse(360, 80, 20, 20); // Right antenna tip

  // Draw the alien arms
  noStroke();
  fill(0, 255, 127);
  ellipse(190, 300, 40, 100); // Left arm
  ellipse(410, 300, 40, 100); // Right arm

  // Draw the alien legs
  ellipse(260, 450, 50, 100); // Left leg
  ellipse(340, 450, 50, 100); // Right leg
}

function drawPlanet(x, y, size, color) {
  fill(color);
  ellipse(x, y, size, size);
}

function drawUFO(x, y) {
  fill(169, 169, 169); // Grey color for UFO
  ellipse(x, y, 200, 80); // UFO body
  fill(255, 255, 0);
  ellipse(x, y, 120, 40); // UFO dome
  fill(0, 255, 127);
  ellipse(x, y - 40, 40, 40); // Alien head in UFO
  fill(255); // White for eyes
  ellipse(x - 10, y - 40, 10, 20); // Left eye
  ellipse(x + 10, y - 40, 10, 20); // Right eye
  fill(0); // Black for pupils
  ellipse(x - 10, y - 40, 5, 10); // Left pupil
  ellipse(x + 10, y - 40, 5, 10); // Right pupil
}
