var gamestate = "marine"
var b1,b2,b3,b4,b5,b6,b7,b8;
var hunter,b12;
var bird,h1,egdes,bullet,bulletShoot = true;
var bgimg,birdDie;
var bsound,bgsound;
var score = 0;
var bg;
var f1,f2,f3,f4,f5,f6;
var elephant,monkey,monkey2,woodCutter;

function preload(){
 b1 =loadAnimation("img/imageedit_1_3094278262.png",
 "img/imageedit_1_8267895522.png",
 "img/imageedit_2_5400486280.png",
 "img/imageedit_2_7878072299.png",
 "img/imageedit_2_8848784644.png",
 "img/imageedit_2_9161853774.png",
 "img/imageedit_3_3245469046.png",
 "img/imageedit_4_8259477976.png");
 h1 =loadImage("img/imageedit_1_4929864270.png");
 b12 = loadImage("img/bullet.png")

 birdDie = loadImage("img/imageedit_4_8259477976.png");
 bsound = loadSound("img/gun-gunshot-01.mp3");
 bgsound = loadSound("img/rainforest noises-1938133500.mp3");
 f1 = loadImage("forest fire/water plastic/fish 1.jpeg");
 f2 = loadImage("forest fire/water plastic/fish 2.jpeg");
 f3 = loadImage("forest fire/water plastic/fish 3.jpeg");
 f4 = loadImage("forest fire/water plastic/fish 4.jpeg");
 f5 = loadImage("forest fire/water plastic/fish 5.jpeg");
 f6 = loadImage("forest fire/water plastic/fish 6.jpeg");
 elephant = loadImage("forest fire/deforestation/sad elphant.jpeg");
 monkey = loadImage("forest fire/deforestation/sad monkey.jpeg");
 monkey2 = loadImage("forest fire/deforestation/sad monkey 2.jpeg");
 woodCutter = loadImage("forest fire/deforestation/wood cutter.jpeg");
}

function setup() {
  createCanvas(800,400);
  bgsound.play(); 
  bird = createSprite(600, 200, 50, 50);
  bird.addAnimation("bb1",b1);
  bird.scale = 0.7;
  //bird.debug = true;
  hunter = createSprite(400,350,50,50);
  hunter.addImage("h11",h1);
  //hunter.debug = true;
  bullet = createSprite(400,350,10,10);
  bullet.addImage("b13",b12);
  //bullet.debug = true;
  bullet.setCollider("rectangle",0,0,10,10);
  edges = createEdgeSprites()
  hunter.velocityX = -10;
}

function draw() {
  background(bgimg);
    hunter.scale = 0.2;
    if(gamestate === "marine"){
    bg = "img/forest run.jpg";
    bgimg = loadImage(bg);
    marineLife();
    if(keyDown("space")&& gamestate === "marine"){
      gamestate = "deforestation"
    }
  }
  if(gamestate === "deforestation"){
    bg ="forest fire/deforestation/deforestated jungle.jpeg"
  }
    score = frameCount/6
    bullet.x = hunter.x;
    bullet.velocityY = Math.round(random(-5,-10));
    if(hunter.x < 50){
      hunter.velocityX = 10;

    }
    if(hunter.x > 750){
      hunter.velocityX = -10;
    }
   if(keyDown("left")){
     bird.velocityX = -4;
   }
   if(keyDown("right")){
     bird.velocityX = 4;
   }
   bird.collide(edges);
   
   //if(keyDown("a") && bulletShoot){
     //bullet.y = hunter.y-hunter.height/2;
    // bullet.x = hunter.x;
    // bullet.velocityY = -5;
     //bulletShoot = false;
   //}
   if(bullet.y <0){
     bullet.x = hunter.x;
     bullet.y = 350;
     bullet.velocityY = 0;
     //bulletShoot = true;
   }
   if(bullet.isTouching(bird)){
     bird.addImage("bb1",birdDie);
     bird.velocityY = bird.velocityY + 1;
     gamestate = "end"
   }

    if(gamestate === "end"){
      console.log("end of the game");
      hunter.velocityX = 0;
      bird.collide(edges);
    }
  drawSprites();
}
function keyPressed(){
  if(keyCode === 32 && gamestate === "play"){
  bird.velocityY = -5;
  bird.velocityX = -2;  
  }
  
}
function keyReleased(){
 if(keyCode === 32){
  bird.velocityY = bird.velocityY + 1;
 }
}
function marineLife(){
  if(frameCount%60 === 0){
    var r1 = Math.round(random(1,6))
    var fish = createSprite(800,random(250,390),10,10)
    switch(r1){
    case 1 :fish.addImage("f11",f1)
    break;
    case 2 :fish.addImage("f12",f2)
    break;
    case 3 :fish.addImage("f13",f3)
    break;
    case 4 :fish.addImage("f14",f4)
    break;
    case 5 :fish.addImage("f15",f5)
    break;
    case 6 :fish.addImage("f16",f6)
    break;
    default:break;
    }
  }
}
function deforestation(){
  if(frameCount%60 === 0){
    var d1 = Math.round(random(1,4))
    var elephant = createSprite(400,random(250,390),10,10)
    switch(d1){
      case 1 :elephant.addImage("d11",elephant)
      break;
      case 2 :monkey.addImage("m11",monkey)
      break;
      case 3 :monkey2.addImage("m212",monkey2)
      break;
      case 4 :woodCutter.addImage("wC11",woodCutter)
      break;
      default:break;
    }
  }
} 