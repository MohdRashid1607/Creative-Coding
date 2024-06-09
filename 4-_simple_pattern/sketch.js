function setup() {
  createCanvas(400, 400);
  background(255); // Set background color to white

  let spacing = 40; // Spacing between shapes
  let radius = 20; // Radius of circles
  let lineWidth = 2; // Width of lines

  // Draw circles and lines in a grid pattern
  for (let x = spacing; x < width; x += spacing) {
    for (let y = spacing; y < height; y += spacing) {
      // Draw circles
      fill(255, 0, 0); // Red circles
      ellipse(x, y, radius * 2);

      // Draw lines
      stroke(0, 0, 255); // Blue lines
      strokeWeight(lineWidth);
      line(x - radius, y, x + radius, y);
      line(x, y - radius, x, y + radius);
    }
  }
}
