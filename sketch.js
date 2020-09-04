var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground, dropZone, dropZone2,dropZone1, dropZoneS, dropZone2S,dropZone1S;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	dropZoneS = createSprite(width/2+100,600,20,100);
	dropZone1S = createSprite(width/2-100,600,20,100);
	dropZone2S = createSprite(width/2,640,200,20);

	dropZoneS.shapeColor=color(255,0,0)
	dropZone1S.shapeColor=color(255,0,0)
	dropZone2S.shapeColor=color(255,0,0)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	
	//function keyPressed();

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	dropZone2 = Bodies.rectangle(width/2,640,200,40,{isStatic:true});
	dropZone1 = Bodies.rectangle(width/2-100,600,40,100,{isStatic:true});
	dropZone = Bodies.rectangle(width/2+100,600,40,100,{isStatic:true});
	World.add(world,dropZone2);
	World.add(world,dropZone1);
	World.add(world,dropZone);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  if (keyDown(DOWN_ARROW)) {
    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:false});
	World.add(world, packageBody);
  }
  drawSprites();

}


