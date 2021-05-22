
var snow,snowImg;
var snow2,snow2Img;
var backgroundImg;

function preload(){
  backgroundImg = loadImage("snow2.jpg");
  snowImg=loadImage("snow4.webp");
  snow2Img=loadImage("snow5.webp")
}
function setup() {
createCanvas(1000,600);








}


function draw() {
  background(backgroundImg);  
  drawSprites();
  snow();
}

 function snow(){
   if(World.frameCount%80===0){
    position = Math.round(random(100,20));
    snow=createSprite(300,200)
    snow.addImage(snowImg);
    snow.scale=0.2;
    snow.velocityY=-8;
    snow.setLifetime=150
    
   }
 }
   