var movingRect
var stillRect

function setup() {
  createCanvas(800,400);
  
  movingRect = createSprite(400,200,80,50)
  movingRect.shapeColor = "blue"
  movingRect.debug = true

  stillRect = createSprite(200,200,50,80)
  stillRect.shapeColor = "blue"
  stillRect.debug = true
}
function draw() {
  background(255,255,255);  
  
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  
  if (movingRect.x - stillRect.x < stillRect.width/2 + movingRect.width/2 && 
    stillRect.x - movingRect.x < stillRect.width/2 + movingRect.width/2 &&
    movingRect.y - stillRect.y < stillRect.height/2 + movingRect.height/2 && 
    stillRect.y - movingRect.y < stillRect.height/2 + movingRect.height/2)
  
    {
    stillRect.shapeColor = "red"
    movingRect.shapeColor = "red"
  } else {
    stillRect.shapeColor = "blue" 
    movingRect.shapeColor = "blue"
  }
  drawSprites();
}