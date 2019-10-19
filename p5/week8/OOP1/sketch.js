var myCar; // Declare object

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn an object
  myCar = new Car();

}

function draw() {
  background(100);

  // do some actions on the object
  myCar.move();
  myCar.display();


}



// Car class
function Car() {

  // constructor and attributes
  this.xPos = 100;

  // methods
  this.move = function() {
    this.xPos = this.xPos + 1;
  }

  this.display = function() {
    rect(this.xPos, 100, 20, 50);
  }

}
