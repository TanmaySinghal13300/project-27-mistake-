
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    block= new Block(500,100)

	ball1= new Ball(200,500);
	ball2= new Ball(350,500);
	ball3= new Ball(500,500);
	ball4= new Ball(650,500);
	ball5= new Ball(800,500);

	chain1=new Chain(ball1.body,{x:200,y:100});
	chain2=new Chain(ball2.body,{x:350,y:100});
	chain3=new Chain(ball3.body,{x:500,y:100});
	chain4=new Chain(ball4.body,{x:650,y:100});
	chain5=new Chain(ball5.body,{x:800,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  block.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}
function mouseDragged(){
Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  Matter.Body.applyForce(ball1.body, ball1.body.position,{x:-105,y:105})
}

