var myState=0
function setup(){
  createCanvas (800, 800);
  background(100);
}

function draw (){
  fill(0);

  switch(myState){
    case 0:
    background(100);
    text("why did the ant fall off the toilet bowl?", 100, 100) ;
    break;

    case 1:
    background(255, 0, 0);
    text('because he got pissed off', 100, 100);
    break;
  }
}
function mouseReleased(){
  myState++ ;
  if (myState>2) {
    myState = 0;
  }
}
