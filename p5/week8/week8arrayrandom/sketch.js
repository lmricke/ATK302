var animals = ['Shark', 'Monkey', 'Lizard', 'Bird', 'Elephant', 'Deer', 'Owl'] ;
var aRandomAnimal = '' ;

function setup() {
  createCanvas(800, 800) ;
  textAlign(CENTER, CENTER) ;
}

function draw() {
  background(250, 0, 0) ;
  textSize(48);
  text(aRandomAnimal, width/2, height/2) ;
}

function mouseClicked() {

  var i = floor(random(animals.length)) ;  // floor changes the random to an integer

  aRandomAnimal = animals[i] ;


}
