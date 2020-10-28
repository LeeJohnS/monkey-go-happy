
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var fruitGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}
function setup() {
  createCanvas(600, 500)
  

  monkey = createSprite(50,180,20,50);
  
  monkey.addAnimation("running", monkey_running);

  monkey.scale = 0.1;
  
  ground = createSprite(300,490,600,20);
  ground.x = ground.width /2;
  
  
  
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true
  
  score = 0;
  
  fruitGroup= createGroup(); 
}

function draw() {
   if(monkey.isTouching (fruitGroup)){
    fruitGroup.destroyEach()
   }
  background(180);
  if(keyDown("space")&& monkey.y === 449.3){
     monkey.velocityY = -10;
     }
  //adding the gravity
  monkey.velocityY = monkey.velocityY +0.5
  monkey.collide(ground);
  
  console.log(monkey.y);
  
 spawnObstacles();
  spawnrfruits()
  drawSprites();
  
}

function spawnObstacles(){
  
   if(frameCount%100==0){
  obstacle = createSprite(480,460,10,10);
  obstacle.velocityX = -5;
     obstacle.addImage (obstacleImage)
    obstacle.scale = 0.1
}
  
}

function spawnrfruits(){
  
   if(frameCount%50==0){
  fruit = createSprite(480,300,10,10);
  fruit.velocityX = -5;
     var r= Math.round(random(1,4));
       fruit.addImage (bananaImage)
    fruit.scale = 0.1
   }
}

















