function setup() {
  createCanvas(720, 400);
   background(0);
   noStroke();

   fill(204);
   triangle(18, 18, 18, 360, 81, 360);

   fill ( 255, 83, 13 ) ; 
   rect(0, 0, 100, 200);

   fill(204);
   quad(189, 18, 216, 18, 216, 360, 144, 360);

   fill(255);
   ellipse(252, 144, 72, 72);

   fill(204);
   triangle(288, 18, 351, 360, 288, 360);

   fill(255);
   arc(479, 300, 280, 280, PI, TWO_PI);
}

function draw() {
  // put drawing code here
}
