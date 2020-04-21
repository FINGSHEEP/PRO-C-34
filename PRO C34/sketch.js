var brush , database ; 
var position ; 



function setup() {
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);

    var brush = createSprite(200, 200, 5, 5);
    brush.shapeColor = "blue";
    World.frameRate=60;

}
function draw() {
    background("red");
  brush.x =World.mouseX;
  brush.y =World.mouseY;
  if (mouseDown("leftButton")) drawSprites();
}