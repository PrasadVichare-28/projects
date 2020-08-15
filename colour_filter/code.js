var OgImage=null;
var grayImage=null;
var redImage=null;
var triImage=null;
var canvas =document.getElementById("can");

function upload()
{
  var input=document.getElementById("finput");
  OgImage=new SimpleImage(input);
  grayImage=new SimpleImage(input);
  redImage=new SimpleImage(input);
  triImage=new SimpleImage(input);
  OgImage.drawTo(canvas);
}
function dogray()
{
  if(imageIsLoaded(grayImage))
    {
      filtergray();
      grayImage.drawTo(canvas);
    }
}
function filtergray() {
  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}
function dored()
{
  if(imageIsLoaded(redImage)){
    filterred();
    redImage.drawTo(canvas);
  }
}
function filterred() {
  for (var pixel of redImage.values()) {
   var avg =(pixel.getRed()+ pixel.getGreen()+ pixel.getBlue())/3;
    if (avg <128){
        pixel.setRed(avg*2);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
    else{
         pixel.setRed(255);
        pixel.setGreen(2*avg -255);
        pixel.setBlue(2*avg -255);
    }
  }
}
function tricolor(){
  if(imageIsLoaded(triImage)){
    filtertri();
    triImage.drawTo(canvas);
  }
}
function filtertri(){
  for(var pixel of triImage.values()){
    var avg=(pixel.getBlue()+ pixel.getRed()+ pixel.getGreen())/3;
    var h=triImage.getHeight();
    var y=pixel.getY();
    if(y<(h/3)){
        if(avg< 128){
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
        }
        else{
            pixel.setRed(255);
        pixel.setGreen(1.2*avg -51);
        pixel.setBlue(2*avg -255);
        }

 }
     if((y>(h/3)) && (y<(h/3)*2)){
        if(avg<128){
         pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
        }
        else{
           pixel.setRed(2*avg -255);
        pixel.setGreen(2*avg -255);
        pixel.setBlue(255);
        }
}
     if(y>(h/3)*2){
        if(avg<128){
         pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
    }
    else{
         pixel.setRed(2*avg -255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg -255);
    }
}
}
}

function doreset() {
  if (imageIsLoaded(OgImage)) {
    OgImage.drawTo(canvas);
    grayImage = new SimpleImage(OgImage);
    redImage = new SimpleImage(OgImage);
  }
}

function imageIsLoaded(img) {
  if (img == null || !img.complete()) {
    alert("Image not loaded");
    return false;
  } else {
    return true;
  }
}
