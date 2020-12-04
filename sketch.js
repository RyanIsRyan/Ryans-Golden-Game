var player;
var gameState;
var START=0;
var PLAY=1;
var sbutton;
var arcadefont,s;

function preload(){
 arcadefont=loadFont("ARCADE.TTF");
  loadFont("ARCADE.TTF");
  s=loadImage("startg.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  gameState=START;
  
  sbutton=createSprite(displayWidth/2,displayHeight/2+100,200,100);
  sbutton.shapeColor="white";
  sbutton.addImage(s);
  sbutton.scale=0.7
  
}

function draw() {
 

  background(46, 176, 80);
  textFont(arcadefont)
  textSize(50)
  fill('black')
   text("The Quest to  Beat Global Warming",displayWidth/2-400,displayHeight/2-200);
    if(gameState===START){
      if(mousePressedOver(sbutton)){
        gameState++;
        console.log(gameState);
      }
    }
    if(gameState===PLAY){
      sbutton.visible=0
    }
    
  drawSprites();
}