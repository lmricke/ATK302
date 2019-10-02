var myState=0 ;
function setup(){
  createCanvas (800, 800);
  background(100);
}

function draw (){
  fill(0);

  switch(myState){
    case 0:
    background(100);
    text("You never see elephants hiding in trees...", 100, 100) ;
    break;

    case 1:
    background(255, 0, 0);
    text('I guess they must be really good at it.', 100, 100);
    break;
  }
}
function mouseReleased(){
  myState = myState + 1;
  if (myState>1) {
    myState = 0;
  }
}
