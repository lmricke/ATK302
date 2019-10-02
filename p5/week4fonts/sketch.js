var myFont;
var x=0;


function preload() {
  myFont = loadFont('assets/bebas.otf');
}
function setup(){
    createCanvas(1000,800);
    myFont= leadFont('assets/bebas.otf')
  }

  function draw() {
    background(100);
    textFont (myFont);

  fill('red');
  text("HELLO WORLD", x, 150);
  x++ ;
  if (x>width) {
    x=0 ;


textSize(36);
text("from rose", 20, 250);
}
