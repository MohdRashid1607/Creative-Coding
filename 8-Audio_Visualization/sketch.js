let mic, song;
let hexagons = [];
let colorOffset = 0;
let isPlaying = false;

function preload() {
  // Load the music file
  song = loadSound('Rick Astley - Never Gonna Give You Up (Official Music Video).mp3'); // Replace with the path to your music file
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(RGB, 255, 255, 255); // Use RGB color mode for cooler colors

  // Create an audio input
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);

  // Get the volume level
  let vol = mic.getLevel();

  // Add a new hexagon at the mouse position with a cool color
  let hexColor = color(0, map(vol, 0, 1, 100, 255), map(vol, 0, 1, 150, 255));
  hexagons.push(new Hexagon(mouseX, mouseY, random(10, 50), hexColor));

  // Update and display hexagons
  for (let hex of hexagons) {
    hex.update(vol);
    hex.display();
  }

  // Remove the oldest hexagon if there are too many
  if (hexagons.length > 100) {
    hexagons.shift();
  }
}

function mouseMoved() {
  // Play the song if it is not already playing
  if (!isPlaying) {
    song.loop();
    isPlaying = true;
  }
}

class Hexagon {
  constructor(x, y, size, col) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.baseSize = size;
    this.color = col;
    this.opacity = 255; // Initial opacity for fade-out effect
  }

  update(vol) {
    // Change size based on volume
    this.size = this.baseSize + vol * 100;

    // Decrease opacity over time
    this.opacity -= 5;
  }

  display() {
    fill(red(this.color), green(this.color), blue(this.color), this.opacity);
    push();
    translate(this.x, this.y);
    beginShape();
    for (let i = 0; i < 6; i++) {
      let angle = TWO_PI / 6 * i;
      let x = cos(angle) * this.size;
      let y = sin(angle) * this.size;
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
