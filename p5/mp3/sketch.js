var cars = [];
var frogPos;
var myState = 0;
var myTimer = 10000;
var myBugColor = 1;
var carseaten = 0 ;

function setup() {

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


frogPos = createVector(width / 2, height - 80);


function draw() {
    background(100);


    switch (myState) {
        case 0:  // splash screen
            splashScreen()
            break;

        case 1: // the game state
            gameState()
            break;

        case 2: // the win state
            winState()
            break;

        case 3: // the lose state
            loseState()
            break;

    }

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

        myBugColor = myBugColor + 1;
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


function checkForKeys() {
    if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
    if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
    if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
    if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;
}

function keyPressed() {
    if (keyCode === ENTER) {
        myState = 1;
    } else if (keyCode === ESCAPE) {
        myTimer = 10000;
        myState = 0;
    }
}

function splashScreen() {
    background(255, 0, 0);
    textSize(45);
    text('Press ENTER to Play', 180, 400);
    textSize(20);
    text('Eat 25 bugs in 10 seconds to win!', 250, 430);
    fill(0);


}
function gameState() {

    for (var i = 0; i < cars.length; i++) {
        cars[i].display();
        cars[i].drive();
        if (cars[i].pos.dist(frogPos) < 70) {
            cars.splice(i, 1);
            carseaten = carseaten + 1 ;
        }
    }

    // draw the frog
    fill('green');
    image(SpaceShip, frogPos.x, frogPos.y);
    checkForKeys();

    if (millis() > myTimer) {
        myTimer = 0;
        myState = 3;
    }
    if (carseaten >= 25)
    {
      myState = 2 ;
    }

} //endgamestate

function winState() {
  background(255,0,0);
  fill(0);
  textSize(50);
  text('YOU WIN!', 250, 400);

  if (keyCode === ESCAPE) {
      myState = 0;
    }
}
function loseState() {
    background(0);
    fill(0, 255, 0);
    textSize(50);
    text('YOU LOSE', 250, 400);

    if (keyCode === ESCAPE) {
        myState = 0;
    }
}
