img ="";
status ="";
function preload() {
  img=loadImage('fruit_basket.jfif'); 
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
  text("Pineapple",230,120);
  noFill();
  stroke("#FF0000");
rect(230,120,190,220);
   fill('#FF0000');
   text("Basket",35,55)
   noFill();
   stroke("#FF0000");
   rect(35,55,530,290);
}
function play() {
window.location = "index.html"
}