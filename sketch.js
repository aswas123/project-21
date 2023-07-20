
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var ground;
var left_side;
var right_side;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
  var ball_options={
    isStatic:false,
    restitution:0.9,
    friction:0,
    density:2.1


  }

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ball=Bodies.circle(200,20,20,ball_options);
   World.add(world,ball);

   ground =new Ground(400,390,800,10);
   left_side = new Ground(600,347,10,75);
   right_side= new Ground(700,347,10,75);
   


	Engine.run(engine);
 
 




}


function draw() {
  rectMode(CENTER);
  background(0);

 
  drawSprites();
  ellipse(ball.position.x,ball.position.y,20)
  ground.show()
  left_side.show()
  right_side.show()
  keyPressed()
}

function keyPressed(){
  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(ball,ball.position,{x:3.5,y:-3.5})
   
  }
}

