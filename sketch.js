var a,b;
var gameObject1, gameObject2, gameObject3, gameObject4;


function setup(){
  createCanvas (1200,800);
  
  a = createSprite(400,400,50,80);
  a.shapeColor = "green";
  
  b = createSprite(600,200,80,30);
  b.shapeColor = "green";
  
  gameObject1 = createSprite (100,100,50,50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite (200,100,50,50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite (300,100,50,50);
  gameObject3.shapeColor = "green";

  gameObject4 = createSprite (400,100,50,50);
  gameObject4.shapeColor = "green";

}

function draw (){
background (0,0,0);

b.x = World.mouseX;
b.y = World.mouseY;

if (isTouching (b, gameObject1)){
  b.shapeColor = "blue";
  gameObject1.shapeColor = "blue";
}
else {
  b.shapeColor = "green";
  gameObject1.shapeColor = "green";
}

drawSprites();
}


function isTouching (object1, object2){
  



if(object1.x - object2.x < object2.width/2 + object1.width/2
  
  && object2.x - object1.x < object2.width/2 + object1.width/2
  
  && object1.y - object2.y < object2.width/2 + object1.width/2 
  
  && object2.y - object1.y < object2.width/2 + object1.width/2  ){
return true;
}
else{
 return false;
}

}
