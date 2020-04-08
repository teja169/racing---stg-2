var fixedrect , movingrect ;
var obj1,obj2,obj3,obj4;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(600,400,50,50);
  fixedrect.shapeColor="green";
  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor="green";
  obj1=createSprite(100,100,50,50);
  obj1.shapeColor="yellow";
  obj2=createSprite(200,100,50,50);
  obj2.shapeColor="blue";
  obj3=createSprite(300,100,50,50);
  obj3.shapeColor="red";
  obj4=createSprite(400,100,50,50);
  obj4.shapeColor="white";
}

function draw() {
  background(0);
  movingrect.x=World.mouseX ;
  movingrect.y=World.mouseY; 

if (isTouching(movingrect,obj1)) {
  movingrect.shapeColor="purple";
  obj1.shapeColor="purple";
}

else{
  movingrect.shapeColor="green";
  obj1.shapeColor="yellow";
}
  
  drawSprites();
}


function isTouching(object1,object2) {
  if(object1.x - object2.x < object2.width/2 +object1.width/2
    && object2.x -object1.x < object2.width/2 + object1.width/2
    && object1.x - object2.x < object2.height/2 + object1.height/2
    &&  object1.x - object2.x  < object2.width/2 + object1.width/2) {

    return true;
    }


    else{
      return false;
    }
}