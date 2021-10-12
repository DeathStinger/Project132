img ="";
status ="";
function preload() {
  img=loadImage('bottles.jpg'); 
}

function setup() {
   canvas=createCanvas(640,480);
   canvas.center();
   objectDetector = ml5.objectDetector('cocossd',modelLoaded);
   document.getElementById("status").innerHTML ="Status : Detecting Objects";
}
function modelLoaded() {
 console.log("Model Loaded!");
 status=true;
 objectDetector.detect(img,gotResults);
}
function gotResults(error,results) {
  if (error) {
    console.log(error);
  } 
  console.log(results);
}
function draw() {
  image(img,0,0,640,420);
  fill('#FF7000');
  text("Bottle",45,75);
  noFill();
  stroke("#FF7000");
rect(40,70,130,330);

   fill('#FF7000');
   text("Bottle",110,75)
   noFill();
   stroke("#FF7000");
   rect(110,70,130,310);

   fill('#FF7000');
   text("Bottle",180,45)
   noFill();
   stroke("#FF7000");
   rect(190,40,210,375);

   fill('#FF7000');
   text("Bottle",340,75)
   noFill();
   stroke("#FF7000");
   rect(340,70,130,310);

   fill('#FF7000');
text("Bottle",450,75)
noFill();
stroke("#FF7000");
rect(450,70,130,310);
}


function play() {
window.location = "index.html";
}