
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composite = Matter.Composite;
const Composites = Matter.Composites;




var engine, world;
var pipemouth,chimney,ball;
var button;






function preload() {

}

function setup() {
  createCanvas(500,500);

  engine = Engine.create();
  world = engine.world;

  ball= new Ball(width/2+80,height/2-80,80,80);
  chimney = new Blowermouth(width/2 +70,height/2+20,100,90);
  pipemouth = new Blower(width/2-50,height/2+50,150,20);

  button = createButton("dont touch");
  button.position(width/2,height-100);
  button.size(50,50);
  button.mousePressed(blow);
  




}

function draw() {
  background(255,255,255); 
  
  Engine.update(engine);

  chimney.display();
  pipemouth.display();
  ball.display();
  

  
}

function blow() {
  Matter.Body.applyForce(ball.Body,{x:0,y:0}, {x:0,y:0.05});
}