function setup() {
  createCanvas(1080, 720);

}

function draw() {
  // put drawing code here
  background(0, 157, 255);
  noStroke();

fill('yellow');
circle(250, 250, 250, 360, 81, 360);
text(mouseX +','+ mouseY, 100, 100)

fill(255,255,255);
  arc(479, 300, 200, 150, PI, TWO_PI);

  fill(255,255,255);
    arc(600, 300, 150, 100, PI, TWO_PI);

    fill(255,255,255);
      arc(400, 300, 100, 50, PI, TWO_PI);

      function mousereleased(){
        console.log(mouseX+','+ mouseY);
      }
  fill(143, 82, 7);
  rect(800, 500, 30, 500);

  fill('green');
  circle(744, 441, 200, 200, 200, 360);

  fill('green');
  circle(878, 438, 200, 200, 200, 360);

  fill('green');
  circle(811, 300, 150, 150, 150, 360);

  fill('green');
  circle(883, 333, 100, 100, 150, 360);

  fill('green');
  circle(714, 356, 100, 100, 150, 360);

  fill('green');
  circle(812, 520, 75, 75, 75, 360);
  //fill(204);
  //quad(189, 18, 216, 18, 216, 360, 144, 360);

  //fill(255);
  //ellipse(252, 144, 72, 72);

  //fill(204);
  //triangle(288, 18, 351, 360, 288, 360);

  //fill(255);
  //arc(479, 300, 280, 280, PI, TWO_PI);
}
