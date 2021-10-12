img ="";
status ="";
function preload() {
  img=loadImage('TV.jfif'); 
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
   text("Television",0,65)
   noFill();
   stroke("#FF0000");
   rect(0,65,520,370);
}
function play() {
window.location = "index.html"
}