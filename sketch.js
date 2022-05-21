var trex, ground;
var trexAnimation, groundImage;
var IG;
var cloudImage, cloud;
var obs1,obs2,obs3,obs4,obs5,obs6,obstacle;

function preload(){

  trexAnimation = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png");

  cloudImage = loadImage("cloud.png")

  obs1 = loadImage("obstacle1.png");
  obs2 = loadImage("obstacle2.png");
  obs3 = loadImage("obstacle3.png");
  obs4 = loadImage("obstacle4.png");
  obs5 = loadImage("obstacle5.png");
  obs6 = loadImage("obstacle6.png");
}


function setup(){
createCanvas(600,200);

IG = createSprite(300,135,600,5);
IG.visible = false;

trex = createSprite(50,100,50,20);
trex.addAnimation("trexanimation", trexAnimation);
trex.scale = 0.5;

ground = createSprite(300,130,600,5);
ground.addImage(groundImage);
ground.x = ground.width/2;
}


function draw(){
background("cyan");

console.log(trex.y);

ground.velocityX = -5;

if(ground.x<0){
  ground.x = ground.width/2;
}

if(keyDown ("space") && trex.y >= 109){
  trex.velocityY = -10;
}

trex.velocityY = trex.velocityY + 0.5;
trex.collide(IG);

randomClouds();
randomObstacles();
drawSprites();
}

function randomClouds() {
 if(frameCount % 70 == 0){
   cloud = createSprite(600,110);
   cloud.addImage(cloudImage);
   cloud.velocityX = -2;
   cloud.y = random(2, 110);
   trex.depth = cloud.depth+1;
 }
}

function randomObstacles(){
  if (frameCount % 60 === 0){
    obstacle = createSprite(600,115);
    obstacle.velocityX = -6;
    obstacle.scale = 0.5;
    obstacle.liftime = 100;

    var r = Math.round(random(1,6));
    
    switch(r){
      case 1: obstacle.addImage(obs1);
      break;
      case 2: obstacle.addImage(obs2);
      break;
      case 3: obstacle.addImage(obs3);
      break;
      case 4: obstacle.addImage(obs4);
      break;
      case 5: obstacle.addImage(obs5);
      break;
      case 6: obstacle.addImage(obs6);
      break;

      default:break;
    }
  }
}