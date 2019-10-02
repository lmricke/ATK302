var mic;
var vol;
var y = 0 ;

function setup() {
  createCanvas(1920, 1080);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(100);

ellipse(200, y, 100, 100) ;
  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 5) {
    // do something
    y++ ;
  }
if (y > 1080){
  background(0,255,0);
}

  textSize(18);
  text("Click the screen first.  My volume is " + vol, 80, 400);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
