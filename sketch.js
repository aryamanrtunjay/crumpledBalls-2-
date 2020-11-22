
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,ceiling,wall1,wall2,trashBottom,trashSide1,trashSide2;
var bin,binImage;


function preload()
{
	binImage = loadImage("sprites/dustBin.png");
}

function setup() {
	createCanvas(1920,700);


	bin=createSprite(1345,310,200,22);
	bin.addImage(binImage);
	bin.scale=0.9;

	engine = Engine.create();
	world = engine.world;

	paper=new Paper(50);
	ground=new Ground(965,height+23,width,20);
	ceiling=new Ground(965,-10,width,20);
	wall1=new Ground(-20,350,20,height);
	wall2=new Ground(width+20,350,20,height);
	trashBottom=new Trash(1345,390,200,22);
	

	trashSide1=new Trash(1255,300,20,200);
	trashSide2=new Trash(1440,300,20,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
	paper.display();
	ground.display();

	trashBottom.display();
	trashSide1.display();
	trashSide2.display();

  keyPressed();
  drawSprites();
 

}

function keyPressed()
{
	if(keyDown(UP_ARROW))
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:-8.5});
	}

	if(keyDown(DOWN_ARROW))
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:8.5});
	}

	if(keyDown(LEFT_ARROW))
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:-8.5,y:0});
	}
	if(keyDown(RIGHT_ARROW))
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:8.5,y:0});
	}
}

