let paddle;
let ball;
let bricks = [];
let rows = 5;
let cols = 10;
let brickWidth;
let brickHeight = 20;
let playing = true;

function setup() {
  createCanvas(400, 400);
  paddle = new Paddle();
  ball = new Ball();
  brickWidth = width / cols;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      bricks.push(new Brick(col * brickWidth, row * brickHeight));
    }
  }
}

function draw() {
  background(220);

  if (playing) {
    paddle.move();
    ball.move();
    ball.checkEdges();
    ball.checkPaddle(paddle);
    ball.checkBricks();

    paddle.display();
    ball.display();

    for (let brick of bricks) {
      brick.display();
    }

    if (ball.y > height) {
      playing = false;
    }
  } else {
    textSize(32);
    fill(0);
    textAlign(CENTER, CENTER);
    text('Game Over!', width / 2, height / 2);
  }
}

class Paddle {
  constructor() {
    this.width = 120;
    this.height = 20;
    this.x = (width - this.width) / 2;
    this.y = height - this.height - 10;
    this.speed = 7;
  }

  move() {
    if (keyIsDown(LEFT_ARROW) && this.x > 0) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x < width - this.width) {
      this.x += this.speed;
    }
  }

  display() {
    fill(0, 0, 255);
    rect(this.x, this.y, this.width, this.height);
  }
}

class Ball {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 20;
    this.xSpeed = 5;
    this.ySpeed = -5;
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  checkEdges() {
    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }
    if (this.y < 0) {
      this.ySpeed *= -1;
    }
  }

  checkPaddle(paddle) {
    if (this.x > paddle.x && this.x < paddle.x + paddle.width && this.y + this.size / 2 > paddle.y) {
      this.ySpeed *= -1;
      this.y = paddle.y - this.size / 2;
    }
  }

  checkBricks() {
    for (let i = bricks.length - 1; i >= 0; i--) {
      let brick = bricks[i];
      if (this.x > brick.x && this.x < brick.x + brickWidth && this.y - this.size / 2 < brick.y + brickHeight && this.y + this.size / 2 > brick.y) {
        bricks.splice(i, 1);
        this.ySpeed *= -1;
        break;
      }
    }
  }

  display() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.size);
  }
}

class Brick {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = brickWidth;
    this.height = brickHeight;
  }

  display() {
    fill(0, 255, 0);
    rect(this.x, this.y, this.width, this.height);
  }
}