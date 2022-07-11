var PLAY =1;
var END =0;
var gameState =PLAY;

var obstaclesGroup,asteroideImage,saturnoImage;

var cohete;

var background;

var score =0;

var gameOver;

function preload(){
  cohete_navegando = loadImage("./kisspng-rocket-cartoon-spacecraft-clip-art-running-rocket-cliparts-5a897aa728f6d3.4343723615189592711678.jpg");
  
  backgroundImage = loadImage("./fondo exterior.jpg");

  asteroideImage = loadImage("./asteroide.png");
  saturnoImage = loadImage("./saturno.png");

  gameOverImage = loadImage("./gameover.png");
}

function setup() {
  createCanvas(400,400);

  cohete = createSprite(250,100,50,30);
  cohete.addImage("kisspng-rocket-cartoon-spacecraft-clip-art-running-rocket-cliparts-5a897aa728f6d3.4343723615189592711678.jpg");
  cohete.velocityY = 0.08;

  background = createSprite(400,400);
  background.addImage("fondo exterior.jpg");
  background.velocityY = 4;

}

function draw() {
 if (gameState===PLAY) {
  background(0);
  cohete.x = World.mouseX;

  edges = createEdgeSprites();
  cohete.collide(edges);

  if (background.y > height){
    background.y = height/2;
  }

  createAsteroide();
  createSaturno();

  if (asteroideG.isTouching(cohete)) {
    gameState=END;
  }

  if (saturnoImage.isTouching(cohete)) {
    gameState=END;
  }

  drawSprites();
  textSize(25);
  textFill(260);
  text("score"+ score,30,370);
 }
}
