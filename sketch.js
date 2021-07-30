var backGround,backGroundImage;
var bow,bowImage,redImage, blueImage,greenImage,pinkImage;



function preload(){
  backGroundImage = loadImage("background0.png")
  
  bowImage = loadImage("bow0.png")
  
  redImage = loadImage("red_balloon0.png")
  
  blueImage = loadImage("blue_balloon0.png")
  
  greenImage = loadImage("green_balloon0.png")
  
  pinkImage = loadImage("pink_balloon0.png")
  
}

function setup() {
  createCanvas(400, 400);
  
  backGround = createSprite(0,0,400,400);        
  
  backGround.addImage("backGround",backGroundImage);
  backGround.scale = 2.5;
  //backGround.x = backGround.width/2;
  backGround.velocityX = -2;
  
  bow = createSprite(350,250,20,50);
  bow.addImage("bow",bowImage);
  
  blueballoon();
  greenballoon();
  redballoon();
  pinkballoon();
  
  
}


function draw() {
  
  if (backGround.x < 0) {
  backGround.x = backGround.width / 2;
}
  
  bow.y = World.mouseY 
  
  drawSprites();
  
}

function greenballoon(){

for (var i = 50; i<400; i=i+80) { 
  var green =   createSprite(50,i,10,40);           green.addImage("green",greenImage)
  green.scale = 0.1; } 
}

function blueballoon(){
for (var i = 100; i<305; i=i+60) { 
  var blue = createSprite(150,i,10,40);              blue.addImage("blue",blueImage) 
  blue.scale = 0.1; }
}

function redballoon(){
for (var i = 100; i<380; i=i+70) { 
  var red = createSprite(100,i,10,40);              red.addImage("red",redImage) 
  red.scale = 0.1; }
}

function pinkballoon(){
for (var i = 150; i<240; i=i+60) { 
  var pink = createSprite(200,i,10,40);              pink.addImage("pink",pinkImage) 
  pink.scale = 1; }
}








