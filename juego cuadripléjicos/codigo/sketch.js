var PLAY=1;
var END=0;
var gameState=1;

var ball, player, background, soccergoal;
var ballimg, playerimg, backgroundimg, soccergoalimg, GOOOLIMG;
var score=o

function preload(){
backgroundimg=loadimage("background.png");
ballimg=loadimage("ball.png");
playerimg=loadimage("player.png");
soccergoalimg=loadimage("soccer goal.png");
GOOOLIMG=loadimage("GOOOL.png");
}

function setup() {
    createCanvas(400,400);

    scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImg);
  scene.scale = 2.5

  player=createsprite(40,50,20,20)
  player.addimage(playerimg);
  player.scale=1 

  player.setCollider("circle",0,0,40,40);

  ball=createsprite(50,50,10,10);
  ball.addimage(ballimg);
  ball.scale = 0.5

  soccergoal=createsprite(40,50,20,20)
  soccergoal.addimage(soccergoalimg);
  soccergoal.scale=1.5

  ballgroup=creategroup();
  playergroup=creategroup();
}

function draw() {
 background(0) 

player(40,50,20,20);

player.y = world.mouseY;
player.x = world.mouseX;

if(ballgroup.istouching(soccergoal)){
  ballGroup.destroyEach();
  playergroup.destroyEach();
  score=score+2;
}

let ball = {
  x: 200,
  y: 200,
  radius: 10,
  isHolding: false,
  velocityX: 0,
  velocityY: 0
}

drawSprites();

textSize(25);
text("Puntuación : "+ score,250,50);
}
