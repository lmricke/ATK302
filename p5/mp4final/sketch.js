var cars = [];
var frogPos;
var myState = 0;
var myTimer = 10000;
var myBugColor = 1;
var bugsEaten = 0;
var startMillis = 0;
//var y = 100;
//let f;
//function preload(){
//  f = loadFont('assets/Hollows.ttf');
//}


function setup() {
 frameRate(60);
    createCanvas(800, 800);
    for (var i = 0; i < 40; i++) {
        cars.push(new Car());
    }

    SpaceShip = loadImage("assets/spaceship.png");
    Bug1 = loadImage("assets/enemy1.png");
    Bug2 = loadImage("assets/enemy2.png");
    Bug3 = loadImage("assets/enemy3.png");

    frogPos = createVector(width / 2, height - 80);
    rectMode(CENTER);
    ellipseMode(CENTER);
}

function draw() {
    background(100);

    switch (myState) {
        case 0:  // splash screen
            splashScreen();
            break;

        case 1: // the game state
            gameState();
            break;

        case 2: // the win state
            winState();
            break;

        case 3: // the lose state
            loseState();
            break;

    }
    map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

 // image(bunnyImage, 0, 0, 500, 500);

    	ellipse(0, 0, 200, 200) ;
  pop();

  frogPos.x = xPosition;
  frogPos.y = yPosition;

    // Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});
}

// car class!!
function Car() {
    // attributes
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);

    // methods
    this.display = function () {
        fill(this.r, this.g, this.b);
        //image (Bug1, this.pos.x, this.pos.y, 100, 50) ;

        if (myBugColor === 1) {
            image(Bug1, this.pos.x, this.pos.y, 100, 50);
        }

        if (myBugColor === 2) {
            image(Bug2, this.pos.x, this.pos.y, 100, 50);
        }

        if (myBugColor === 3) {
            image(Bug3, this.pos.x, this.pos.y, 100, 50);
        }

        myBugColor++;
        if (myBugColor > 3) {
            myBugColor = 1;
        }

        //rect(this.pos.x, this.pos.y, 100, 50);
    };

    this.drive = function () {
        this.pos.add(this.vel);

        if (this.pos.x > width) this.pos.x = 0;
        if (this.x > width) this.x = 0;
        if (this.pos.x < 0) this.pos.x = width;
        if (this.pos.y > height) this.pos.y = 0;
        if (this.pos.y < 0) this.pos.y = height;

    };

}
function mouseReleased() {
  myState++ ;
  if (myState=0) {
    myState = 1;
  }
}

function checkForKeys() {
    if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
    if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
    if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
    if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;
}

function keyPressed() {
    if (keyCode === ENTER) {
        startMillis = millis();
        myState = 1;
    } else if (keyCode === ESCAPE) {
        myState = 0;
    }
}

function splashScreen() {
    background(255, 0, 0);
    //textFont("Hallows", 40);
    textSize(70);
    text('SPACEBUGZ', 250, 145)
    rect(400,400,450,110)
    fill(255, 252, 71)
    textSize(45);
    text('Press ENTER to Play', 185, 400);
    textSize(20);
    text('Eat 25 bugs in 10 seconds to win!', 255, 430);
    fill(0);
    image(Bug1, 515, 200, 170, 100);
    image(Bug2, 315, 200, 170, 100);
    image(Bug3, 115, 200, 170, 100);
    image(SpaceShip, 306, 500, 190, 200);

}

function gameState() {
  //bg = loadImage('assets/night.jpg');

    for (var i = 0; i < cars.length; i++) {
        cars[i].display();
        cars[i].drive();
        if (cars[i].pos.dist(frogPos) < 70) {
            cars.splice(i, 1);
            bugsEaten++;
        }
    }

    // draw the frog
    fill('green');
    image(SpaceShip, frogPos.x, frogPos.y);
    checkForKeys();

    if (millis() >= startMillis + myTimer)
    {
      myState = 3;
    }

    if (bugsEaten >= 25)
    {
      myState = 2 ;
    }
    fill(255, 252, 71);
    textSize(20);
    text('Bugs eaten: ' + bugsEaten, 600, 780)

} //endgamestate

function winState() {

  background(0,0,255);
rect(400,400,1100,100);
  fill(255, 252, 71);
  textSize(50);
  text('YOU WIN!', 270, 400);
  fill(255, 252, 71);
  textSize(20);
  text('Pres "Esc" to return to Menu', 260, 430);
  fill(255,0,0);

  resetNewGame();
}

function loseState() {
    background(0);

    fill(0, 255, 0);
    textSize(50);
    text('YOU LOSE', 250, 400);
    fill(0, 255, 0);
    textSize(20);
    text('Pres "Esc" to return to Menu', 253, 450);
    resetNewGame();
}

function resetNewGame () {
    //Reset the cars and the spaceship to starting positions

    bugsEaten = 0;
   cars.length = 0;
    for (i = 0; i < 40; i++) {
        cars.push(new Car());
    }

    frogPos = createVector(width / 2, height - 80);
}
