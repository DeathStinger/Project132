img ="";
status ="";
function preload() {
  img=loadImage('desk.jpeg'); 
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
  fill('#FF0000');
  text("Chair",30,180);
  noFill();
  stroke("#FF0000");
rect(30,180,190,220);
   fill('#FF0000');
   text("Desk",140,120)
   noFill();
   stroke("#FF0000");
   rect(140,115,490,290);
}
function play() {
window.location = "index.html"
}