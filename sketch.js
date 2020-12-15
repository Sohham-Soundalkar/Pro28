
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var tree, treeImage
var ground;
var boy, boyImage;

function preload(){
	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	boy = createSprite(300,400,50,50);
	boy.addImage(boyImage);
    boy.scale = 0.1;
	//Create the Bodies Here.
    tree = new Tree(1000,350,50,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  tree.display();

  drawSprites();
 
}



