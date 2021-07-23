var mr,fr;
function setup() {
  createCanvas(800,400);
  mr=createSprite(400, 200, 50, 50);
  mr.shapeColor="red"
  fr=createSprite(200,200,50,50);
  fr.shapeColor="red"
}

function draw() {
  background(0); 
  mr.x=mouseX 
  mr.y=mouseY
  if(mr.x-fr.x<fr.width/2 + mr.width/2 && fr.x-mr.x< mr.width/2 + fr.width/2
    && mr.y-fr.y<fr.height/2 + mr.height/2 && fr.y-mr.y< mr.height/2 + fr.height/2){
    fr.shapeColor="green"
    mr.shapeColor="green"
  }
  else{
    fr.shapeColor="red"
    mr.shapeColor="red"
  }
  drawSprites();
}