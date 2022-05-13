var world;
var engine;
var corpo1;
var corpo2;
var corpo3;
var corpo4;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	fill("orange")
	rectMode (CENTER)
	ellipseMode(RADIUS) 


	engine = Engine.create();
	world = engine.world;
var corpo1_options = {
restitution:0.5,
friction: 0.02,
frictionAir:0
}
var corpo2_options = {
	restitution:0.7,
	friction: 0.01,
	frictionAir:0.1
}
	var corpo3_options = {
		restitution:0.01,
		friction: 1,
		frictionAir:0.3
}
var corpo4_options = {
	isStatic:true
}
	//Crie os Corpos Aqui.
	corpo1 = Bodies.rectangle (110,50,10,10,corpo1_options)
World.add (world,corpo1)

	corpo2 = Bodies.rectangle (350,50,10,10,corpo2_options)
	World.add (world,corpo2)
	
	corpo3 = Bodies.circle (220,10,10, corpo3_options)
	World.add (world,corpo3)

	corpo4 = Bodies.rectangle (400,680,800,10,corpo4_options)
World.add (world,corpo4)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  Engine.update(engine);

  drawSprites();
  ellipse(corpo3.position.x,corpo3.position.y,10) 
  rect(corpo1.position.x,corpo1.position.y,10,10) 
  rect(corpo4.position.x,corpo4.position.y,800,10) 
  rect(corpo2.position.x,corpo2.position.y,10,10) 
  

}



