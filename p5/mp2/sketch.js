var myState=0
function setup(){
  createCanvas (1488, 890);
  background(100);

}

function draw (){
  fill(0);

  switch(myState){
    case 0:
    background(8, 39, 74);
 noStroke();

    fill(145, 233, 255);
    rect(975, 670, 80, 85);

    fill(47, 71, 99);
    triangle(-500, 720, 900, 720, 400, 300);

    fill(68, 104, 145);
    triangle(0,-400, 0, 890, 450, 890);

    fill(131, 210, 230);
    ellipse(1200, 750, 350, 350);

    fill(252, 255, 189);
    ellipse(800, 200, 200, 200);

    fill(187, 232, 250);
    rect(0, 720, 1920, 200);

    text("oow its cold", 100, 100) ;

    break;

    case 1:
    background(29, 219, 240);

    fill(45, 227, 94);
    rect(0, 720, 1920, 200);

    fill(255);
    arc(479, 300, 280, 280, PI, TWO_PI);

    fill('brown')
    rect(100, 0, 20, 720)

    fill('yellow')
    ellipse(400, 300, 150, 150);
    text('mmmmm yes', 100, 100);

    break;

    case 2:
    background(54, 50, 135);

    fill(0, 92, 38);
    rect(0, 720, 1920, 200);

    fill('yellow')
    ellipse(400, 300, 150, 150);

    text('wowwo', 100, 100);
    break;

    case 3:
    background(128, 246, 255);
    noStroke();
    fill(219, 156, 20);
    rect(0, 720, 1920, 200);


    fill(143, 83, 0);
    triangle(2000, 720, 500, 720, 1250, 420);

    fill(171, 120, 2);
    triangle(800, 720, -600, 720, 350, 520);


    fill('yellow')
    ellipse(400, 300, 250, 250);

    text('desert or sum', 100, 100);
    break;

    case 4:
    background(68, 0, 99);

    fill(16, 51, 0);
    rect(0, 720, 1920, 200);

    fill('yellow')
    ellipse(400, 300, 150, 150);

    text('dis a spooky sky', 100, 100);
    break;
  }
}
function mouseReleased(){
  myState++ ;
  if (myState>4) {
    myState = 0;
  }
}
