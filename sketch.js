const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var engine,world,ground;

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,790,width,20);

  for( var i = 0; i <= width ; i=i+ 80){
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j = 40;j <= width;j = j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15;j <= width-10;j = j+50){
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 40;j <= width;j = j+50){
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 15;j <= width-10;j = j+50){
    plinkos.push(new Plinko(j,375));
  }

  

  


  
  
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }

  for (var j =0; j < divisions.length;j++ ){
    divisions[j].display();
  }

  for (var j =0; j < plinkos.length;j++ ){
    plinkos[j].display();
  }

  for (var k = 0;k < particles.length;k++){
    particles[k].display();
  }
  ground.display();
  
}