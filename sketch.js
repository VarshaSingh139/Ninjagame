const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var score=0;

function preload(){
	ninjastanding=loadAnimation("Running1.png");
	ninjarunning=loadAnimation("Running1.png","Running2.png","Running3.png",
	"Running4.png","Running5.png");
	snowbg=loadImage("Snow Biome.jpg")
	desertbg=loadImage("Desert Biome.jpg")
	forestbg=loadImage("Forest Biome.jpg")
	emote1=loadImage("Emote1.png");
}
function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(1800, 600);
	
	desertbiome=createSprite(900,300);
	desertbiome.scale=1.8
	desertbiome.addImage(desertbg);

	snowbiome=createSprite(1000,300,1800,800);
	snowbiome.scale=3
	snowbiome.addImage(snowbg);	
	snowbiome.visible=false;

	forestbiome=createSprite(1200,300,1800,800);
	forestbiome.scale=3
	forestbiome.addImage(forestbg);	
	forestbiome.visible=false;
	
    invig=createSprite(900,590,1800,10)
	invig.visible=false;
	
	ninja=createSprite(100,520);
	ninja.addAnimation("standing",ninjastanding);
	ninja.addAnimation("running",ninjarunning);
	ninja.scale=0.8
	
	Engine.run(engine);
}


function draw() {
	background("white");
	score=Math.round(score+1);

   rectMode(CENTER);
   ninja.collide(invig);
   if(keyDown("left")){
		ninja.changeAnimation("running",ninjarunning);
		//ninja.velocityX=2
		desertbiome.velocityX=-8

  }
  console.log("deser x position   "+desertbiome.x)
  if(score===100){
	  snowbiome.visible=true;
	  snowbiome.velocityX=-8
  }

  if(snowbiome.x<-500){
	forestbiome.visible=true;
	forestbiome.velocityX=-8
}

  if(keyDown("space")){
	ninja.velocityY=-10
}
ninja.velocityY=ninja.velocityY+0.8

 if(forestbiome.x<-500){
     gameOver();
 }
  drawSprites();
  textSize(30)
  text("Score ="+score,1000,100);
 
}
function gameOver() {
  swal(
    {
      title: `Game Over!!!`,
      text: "Thanks for playing!!",
      imageUrl:
        "https://raw.githubusercontent.com/whitehatjr/PiratesInvasion/main/assets/boat.png",
      imageSize: "150x150",
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}

 

