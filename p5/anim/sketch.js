var x = 0;



function setup() {
  createCanvas(200, 200) ;
}

function draw() {
  background (100);

  rect(x, 100, 10, 10);
  x+=5; // x=x+5
if (x> width) {
  x=0;
}
}
