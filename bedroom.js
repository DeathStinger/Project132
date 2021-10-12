img ="";
  status ="";
  function preload() {
    img=loadImage('bedroom.jpg'); 
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
     text("Bed",150,125)
     noFill();
     stroke("#FF7000");
     rect(130,110,340,200);
     
     fill('#FF7000');
text("Lamp",25,115)
noFill();
stroke("#FF7000");
rect(25,130,80,90);
}
   
  
  
  
  function play() {
  window.location = "index.html";
  }
