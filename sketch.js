var ground;
var monkey , monkey_running
var banana,bananaGroup,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey=createSprite(80,315,10,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  
}


function draw() {
  background("pink");
  
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: ",+score,500,50);
 
   
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text ("Survival Time: "+survivalTime,100,50);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY=-12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  food();
  obstacles();
  
  drawSprites();
  
  if (monkey.isTouching(obstacle)){
    banana.velocityX=0;
    obstacle.velocityX=0;
    ground.veocityX=0;
  }
}


function food(){
  if (frameCount % 80 === 0){
  banana=createSprite(400,200,10,10);
    banana.addImage("banana",bananaImage);
    banana.velocityX=-8;
    banana.scale=0.1;
    banana.lifetime=300;
    FoodGroup.add(banana);
}
}

function obstacles(){
  if (frameCount % 300 === 0){
    obstacle=createSprite(400,306,10,10);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.velocityX=-6;
    obstacle.scale=0.2;
    obstacle.lifetime=300;
    obstacleGroup.add(obstacle);
  }
}
  
  