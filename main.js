
video = "";
status="";
objects=[];
item=document.getElementById("texts").text;
function preload(){

  video = createVideo('video.mp4');
  video.hide();
}
function setup(){
canvas= createCanvas(480,300);
canvas.center();

}
function draw(){
    image(video,0,0,480,300);
    if(status !=""){
      object.detect(video,gotResults);
      for(i=0; i<objects.length; i++){
document.getElementById("detectedd").innerHTML="objects detected";
document.getElementById("detected").innerHTML="number of objects detected are" +objects.length;
fill("blue");
percent=floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke("aqua");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
if(item=objects[i].label){
  document.getElementById("status").innerHTML="Your object is found";
}else{
  document.getElementById("status").innerHTML="Your object is not found";
}
      }
    }
}
function start(){
    object= ml5.objectDetector('cocossd',modelloaded);
        document.getElementById("detectedd").innerHTML="detecting objects";

}
function modelloaded(){
console.log("MODEL LOADED!!!");
status=true;
video.loop();
video.speed(1);
video.volume(0);
}
function gotResults(error,results){
if(error){
  console.error();
}else{
  console.log(results);
  objects=results;
}
}