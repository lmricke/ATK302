var myFont;


function preload() {
  myFont = loadFont('assets/bebas.otf');
}
function setup(){
    createCanvas(1000,800);
  }

  function draw() {
  fill('#ED225D');
  textFont (myFont);
  textSize(36);
  text('HELLO WORLD', 10, 50);
  }
