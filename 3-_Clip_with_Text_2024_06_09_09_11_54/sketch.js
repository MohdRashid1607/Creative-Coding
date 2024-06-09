function setup() {
  createCanvas(400, 400);
  background(0, 0, 50); // Set background color to dark blue

  let cnv3 = createGraphics(width, height); // creating sub canvas to create text inside the shape
  cnv3.noStroke(); // it removes the border of the shape
  cnv3.fill(255, 255, 0); // color of the shape (yellow)
  
  // Calculate center position for the shape
  let centerX = width / 2;
  let centerY = height / 2;

  // Make the rhombus shape bigger
  let rhombusSize = 200; // Size of the rhombus
  cnv3.beginShape();
  cnv3.vertex(centerX - rhombusSize / 2, centerY);         // Left point
  cnv3.vertex(centerX, centerY - rhombusSize / 2);          // Top point
  cnv3.vertex(centerX + rhombusSize / 2, centerY);         // Right point
  cnv3.vertex(centerX, centerY + rhombusSize / 2);          // Bottom point
  cnv3.endShape(CLOSE);

  cnv3.erase(); // it erases the text part in the shape
  cnv3.fill(0, 0, 0); // set text color to black
  cnv3.textSize(20); // font size
  cnv3.textAlign(CENTER, CENTER); // center the text
  cnv3.text('This is', centerX, centerY - 20); // inserts the text and sets the position of the text 
  cnv3.textSize(20); // font size
  cnv3.text('Clip with Text', centerX, centerY + 20); // inserts the text and sets the position of the text 
  cnv3.noErase();

  image(cnv3, 0, 0); // inserts sub canvas inside the main canvas and sets position of sub canvas 
}
