var song1;


function preload() {
  song1 = loadSound('assets/songname.mp3');
  }

  function setup() {
    createCanvas(720,200);
    background(225, 0, 0);
    song1.play(); //this is what starts the loadSound

  }

  function draw(){}
