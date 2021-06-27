
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg;

function preload(){
   	bg = loadImage("bg.jpg");
}

function setup() {
	createCanvas(1400, 600);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	ground = Bodies.rectangle(width/2, height, width, 10 , {isStatic:true,friction:0,restituition:0.8} );
	World.add(world, ground);
	//Create the Bodies Here.
	box_left= new Box(880,540,10,100);        
	box_right= new Box(1120,540,10,100);
	box_bottom= new Box(1000,585,250,10);
	paper = new Paper(100,100,20);
	Engine.run(engine);
	}
	function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(bg);
	box_left.display()
	box_right.display()
	box_bottom.display();
	fill("red");
	rect(width/2, height, width, 10)
	paper.display();
	drawSprites();
	}function keyPressed()
	{if(keyCode===UP_ARROW)
	{
	Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-80})
	}}