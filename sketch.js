
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1;
var plane;
var stone1;
var rubber1;
var sand1,sand2,sand3,sand4,sand5;
var iron1;


function setup() {
var canvas=createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;
//	Engine.run(engine);
//Create the Bodies Here.
plane=new Plane(750,1000,3000)
hammer1=new Hammer(70,500);
stone1=new Stone(290,500,80,80);
rubber1=new Rubber(500,200);
sand1=new Sand(1200);
sand2=new Sand(900);
sand3=new Sand(920);
sand4=new Sand(970);
sand5=new Sand(980);
iron1=new Iron(600,200,20,100)

  
}


function draw() {
	background("lightblue");
  rectMode(CENTER);
  Engine.update(engine);
  plane.display();
  hammer1.display();
  stone1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  iron1.display();

  drawSprites();
 
}



