let myFont;
let textShapes1 = [];
let textShapes2 = [];

function preload() {
  myFont = loadFont("ZtNeztoDEMO-Light.ttf");
}

function setup() {
  createCanvas(400, 400);
  background("#0d0d0d"); // Changed background color to a different dark shade
  noStroke(); // Remove borders for shapes

  // Define the text and positions
  let txt1 = 'BATH SPA';
  let txt2 = 'UNIVERSITY';
  let txt1Size = 60;
  let txt2Size = 50;
  let txt1Y = 175;
  let txt2Y = 250;

  // Generate points for the text
  let textPoints1 = myFont.textToPoints(txt1, 60, txt1Y, txt1Size, { sampleFactor: 0.25 });
  let textPoints2 = myFont.textToPoints(txt2, 60, txt2Y, txt2Size, { sampleFactor: 0.25 });

  // Create shapes for the first text
  textPoints1.forEach(point => {
    textShapes1.push(createShape(point.x, point.y));
  });

  // Create shapes for the second text
  textPoints2.forEach(point => {
    textShapes2.push(createShape(point.x, point.y));
  });
}

function draw() {
  // Draw shapes for the first text
  textShapes1.forEach(shape => {
    renderShape(shape);
  });

  // Draw shapes for the second text
  textShapes2.forEach(shape => {
    renderShape(shape);
  });
}

// Function to create a random shape object
function createShape(x, y) {
  let type = floor(random(3)); // Select shape type
  let size = random(1, 5); // Randomize shape size
  let col = color(random(255), random(255), random(255)); // Randomize shape color

  return { x: x, y: y, type: type, size: size, col: col };
}

// Function to render a shape on the canvas
function renderShape(shape) {
  fill(shape.col);

  switch (shape.type) {
    case 0:
      ellipse(shape.x, shape.y, shape.size, shape.size);
      break;
    case 1:
      rect(shape.x, shape.y, shape.size, shape.size);
      break;
    case 2:
      let halfSize = shape.size / 2;
      triangle(shape.x, shape.y - halfSize, shape.x - halfSize, shape.y + halfSize, shape.x + halfSize, shape.y + halfSize);
      break;
    // Additional shape cases can be added here
  }
}
