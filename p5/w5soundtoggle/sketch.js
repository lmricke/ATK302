var song1;


function preload() {
  song1 = loadSound('assets/LoveParanoia.mp3');
  }

  function setup() {
    createCanvas(800,800);
    background(225, 0, 0);
    song1.play(); //this is what starts the loadSound

  }

  function draw(){

  }
function mouseReleased(){
  if (song1.isPlaying()){
    song1.pause() ;
  } else {
    song1.play();
  }
  }

}
  // song1.pause( ; song1.isPlaying();
