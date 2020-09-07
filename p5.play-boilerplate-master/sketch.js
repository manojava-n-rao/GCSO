var car,wall;
var speed,weight; 
function setup() {
  createCanvas(1800,400);
speed=random(55,90);
weight=random(400,1500);
wall=createSprite(1500,200,60,height/2);
  car=createSprite(50, 200, 50, 50);
car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  background("black");
  if(wall.x-car.x < (car.width + wall.width) / 2 ){

car.velocityX=0;
var deformation=0.5*weight*speed*speed /22500;

if(deformation>180){
car.shapeColor = ("Red");
}
if(deformation<180 && deformation>100){
  car.shapeColor=("Yellow");
}
if(deformation>180){
  car.shapeColor=color(34,139,34);
}
  }

  drawSprites();
}
