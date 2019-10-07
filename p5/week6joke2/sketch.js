
var myState = 0;
var myTimer = 0;
function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {

  switch(myState){
    case 0:
    background("tiel")
    text("You can't run through a camp site...", 100, 200);
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
    text("You can only ran because it's past tents.", 100, 200);
    break;

    case 2:
    background("pink")
    myTimer++
    if (myTimer >=200) {
      myTimer = 0 ;
      myState = 0;
    }
    text(":(", 100, 200);
    break;
  }
}
