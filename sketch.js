
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;

var boy;
var stone, slingRock,slingMango;

function preload()
{boy_image=loadImage("boy.png");

	
}

function setup() {
	createCanvas(1200, 700);
	
	boy=createSprite(200,600,10,10);
	boy.addImage("boy.png",boy_image);
	boy.scale=0.2;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone=new Stone(100,600,10);
	ground = new Ground(100,height,10000,20);
    mango1=new Mango(1000,300,10);
	tree=new Tree(0,0,1000,100);
	slingRock=new FlyRock(stone.body,{x:250,y:500})
	slingMango=new FLmango(mango1.body,{x:1000,y:200})
	
 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boy.display();
  
  
  
  drawSprites();
  stone.display();
  ground.display();
  tree.display();
  mango1.display();
  slingRock.display();
  slingMango.display();

 
}

function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingRock.fly();
}

function keyPressed(){

if (keyCode === 32){

Matter.Body.setPosition(stone.body,{x:250,y:500})
launcherObject.attach(stone.body);


}

}
function detectCollision(stone,mango1){
	mango1BodyPosition=mango1.body.position
	stoneBodyPosition=stone.body.position


	var distance =dist(stoneBodyPosition.x, stoneBodyPosition.y,mango1BodyPosition.x,mango1BodyPosition.y)
	if(distance<=mango1.r+stone.r){

		Matter.Body.setStatic(mango1.body,false);
	}
}



