function setup() {


}
function draw() {
  createCanvas(1500, 890);
if(mouseIsPressed){
  background(42,172,242)
} else {
   background(0, 255, 238);
 }
   noStroke();

   fill( 201, 110, 4)
   rect(0, 270, 1500, 800)

fill(61, 61, 60)
rect(0, 335, 200, 80)
if(mouseIsPressed){
  fill("orange")
  ellipse(1300, 150, 200,200)
} else {
fill("yellow")
ellipse(1300, 50, 200,200)
}
if (mouseIsPressed){
fill("red");
 arc(390, 417, 550, 550, PI, TWO_PI);
} else {
   fill(212, 134, 240);
   arc(390, 417, 550, 550, PI, TWO_PI);
 }
if (mouseIsPressed) {
   fill(9, 47, 99);
   arc(479, 400, 280, 280, PI, TWO_PI);
  } else {
     fill(50);
     rect(340, 395, 280, 5)
}
if(mouseIsPressed){
  fill("white")
   ellipse(350, 244, 50, 50)
 } else {
   fill(64, 47, 29)
   ellipse(350, 244, 50, 50)
 }

if(mouseIsPressed){
   fill("white")
    ellipse(570, 244, 40, 40)
  } else {
   fill(64, 47, 29)
   ellipse(570, 244, 40, 40)
}
   fill('green')
   rect(1200, 600, 10, 200)
   fill('green')
   rect(1230, 655, 15, 150)
   fill('green')
   rect(1255, 660, 10, 130)
}
