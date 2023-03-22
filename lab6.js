function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  ellipseMode(CORNER);
  shipMoveX = 0;
  shipMoveY = 0;
  planetSpawnX = random(width);
  planetSpawnY = random(height);
  notLanded = true
  
  shipDirection = 0;
}

function draw() {
  background("darkgrey");
  
  if(dist(shipMoveX, shipMoveY, planetSpawnX, planetSpawnY) < 40){
    drawPlanet(planetSpawnX, planetSpawnY, 1, "green")
  }else {
    drawPlanet(planetSpawnX, planetSpawnY, 1, "salmon")
  }
  
  drawPlanet(planetSpawnX, planetSpawnY, 1, "salmon");
  drawShip(shipMoveX, shipMoveY, shipDirection, 1.4);
}

function drawShip(shipX, shipY, shipRotate, shipSize) {
  push();
  translate(shipX, shipY);
  rotate(shipRotate);
  scale(shipSize);
  fill("grey");
  beginShape();
  vertex(15, 0);
  vertex(5, 25);
  vertex(15, 15);
  vertex(25, 25);
  endShape(CLOSE);
  pop();
}

function drawPlanet(planetX, planetY, planetSize, planetColor) {
  
  if (notLanded===true){
    push();
  translate(planetX, planetY);
  scale(planetSize);
  fill(planetColor);
  ellipse(0, 0, 50);
  push();
  noFill();
  stroke("black");
  ellipse(-10, 10, 70, 30);
  pop();
  push();
  fill("salmon");
  noStroke();
  beginShape();
  vertex(3, 15);
  vertex(47, 15);
  vertex(44, 9);
  vertex(6, 9);
  endShape(CLOSE);
  pop();
  }
  pop();
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    shipMoveX = shipMoveX + 25;
    shipDirection = 90;
  } else if (keyCode === LEFT_ARROW) {
    shipMoveX = shipMoveX - 25;
    shipDirection = 270;
  } else if (keyCode === UP_ARROW) {
    shipMoveY = shipMoveY - 25;
    shipDirection = 0;
  } else if (keyCode === DOWN_ARROW) {
    shipMoveY = shipMoveY + 25;
    shipDirection = 180;
  }
}
