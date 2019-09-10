function setup() {
  createCanvas(1080, 720);
   background(0);
   noStroke();

   fill(255);
   ellipse(540, 360, 150, 150);

   fill(255);
   ellipse (100, 100, 75, 75);

   fill(255);
   ellipse (100, 170, 110, 110);

   fill(255);
   ellipse (100, 260, 150, 150);
}

function draw() {
      stroke(2);
    if (mouseIsPressed === true) {
      rect(mouseX, mouseY, pmouseX, pmouseY);
    }

}
