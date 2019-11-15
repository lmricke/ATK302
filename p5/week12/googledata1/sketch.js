var namesArray = [];

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1V2yePz_Xd6yUMYzY-e5lGTQ908RT66Of-M2Y4EBR8DE'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
 namesArray.push(new Circle(data[i].Fruit)) ;  // this is the name of your column in your sheet
   }

}


function draw() {
  background('red');

  // // iterate through the namesArray and display the objects!
  for (let i = 0 ; i < namesArray.length ; i++) {
    namesArray[i].display() ;
  }

}


// my circle class
function Circle(myFruit) {
  this.pos = createVector(random(width), random(height));
  this.name = myFruit ;  // you could change the attribute of name to season if you want, or you can just keep it
//  this.shape = myShape;



  this.display = function() {


  rect(this.pos.x, this.pos.y, 100, 100);

  text(this.name, this.pos.x, this.pos.y,) ;
  }
}
