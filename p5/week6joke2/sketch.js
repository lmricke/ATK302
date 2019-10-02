
var myState = 0;
var myTimer = 0;
function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {

  switch(myState){
    case 0:
    background("white")
    text("peaches are suede", 100, 200);
    myTimer++ ;
    if (myTimer >=200) {
      myTimer = 0 ;
      myState = 1;
    }
    break;

    case 1:
    background("yellow")
    myTimer++
    if (myTimer >=200) {
      myTimer = 0 ;
      myState = 2;
    }
    text("apples", 100, 200);
    break;

    case 2:
    background("pink")
    myTimer++
    if (myTimer >=200) {
      myTimer = 0 ;
      myState = 0;
    }
    text("-stole from someboty's twitter", 100, 200);
    break;
  }
}
