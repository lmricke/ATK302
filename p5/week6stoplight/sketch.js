var myState = 0;
var myTimer = 0;
function setup() {
  // put setup code here
  createCanvas(800,800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {

  switch(myState){
    case 0:
    background("white");
    fill("gray");
    rect(width / 2, height / 2, 150, 400);

    fill("green")
    ellipse(width / 2, height / 2, 100,100);
    myTimer++ ;
    if (myTimer >=200) {
      myTimer = 0 ;
      myState = 1;
    }
    break;

    case 1:
    background("white")
    background("white");
    fill("gray");
    rect(width / 2, height / 2, 150, 400);

    fill("yellow")
    ellipse(width / 2, height / 2, 100,100);
    myTimer++
    if (myTimer >=20000) {
      myTimer = 0 ;
      myState = 2;
    }
    break;

    case 2:
    background("white")
    background("white");
    fill("gray");
    rect(width / 2, height / 2, 150, 400);

    fill("red")
    ellipse(width / 2, height / 2, 100,100);
    myTimer++
    if (myTimer >=200) {
      myTimer = 0 ;
      myState = 0;
    }
    break;
  }
}
