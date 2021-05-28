const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg,snow;

function preload() {
 bg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;

  snow = new Snow(200,50);

  
}

function draw() {
  background(bg);  

  Engine.update(engine);

  snow.display();

  drawSprites();
}