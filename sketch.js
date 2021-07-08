var tree, treeImg;
var birdGroup, branchGroup;
var copper, copperImg;
var nest, nestImg;
var kenny, kennyImg;
var bg, bgImg;

function preload(){
bgImg= loadImage("Images/Bg.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  bg.addImage(bgImg)
  bg.velocityY=2;
  tree = createSprite(displayWidth/2, displayHeight, 200, displayHeight*4);
  kenny = createSprite(displayWidth/2, displayHeight,50,200)
kenny.shapeColor="orange"

}

function draw() {
  background(255,255,255);
  if(bg.y>displayHeight-300){
    bg.y=displayHeight/2;
  }  
  if (keyDown (UP_ARROW)){
    kenny.velocityY=-2
  }
  kenny.velocityY+=0.5
  if (keyDown (LEFT_ARROW)){
    kenny.velocityX=-2
  }
  if (keyDown (RIGHT_ARROW)){
    kenny.velocityX=2
  }
  drawSprites();
  SpawnBranches();
}
function SpawnBranches(){
  if (frameCount %100===0){
    var lBranch=createSprite(displayWidth/2-100,displayHeight-100,100,20)
  }
}