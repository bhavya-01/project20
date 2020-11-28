var car,wall;
var speed,weight;
var deformation = 0.5*weigth*speed*speed/22500;

function setup() 
{
  createCanvas(1600,400);

  wall = createSprite(1400,200,60,200);
  speed = random(55, 90);
  weight = random(400, 1500);
  car = createSprite(50, 200, 50, 50);
 
  car.velocityX = speed;

  
  
  }


function draw() {
  background(0,0,0);  

  if(car.x-wall.x < (car.width + wall.width)/2 )
  {
    
    car.velocityX = 0;
   
    
    if(deformation<180){
      car.shapeColor = "red";

    }

    if(deformation>180 && deformation<100){
      car.shapeColor = "yellow";
      
    }


    if(deformation>100){
      car.shapeColor = "green";
     

    }


  }
  drawSprites();
}