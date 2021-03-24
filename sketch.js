 


var count,Mcount,Hcount; 
function setUp(){

    count = second();
    Mcount = minute();
    Hcount = hour();
count = 0;
Mcount =0;
Hcount = 0;
}
function draw() {
    var canvas = createCanvas(1260,600);
  background("black");
 
  drawSprites();
  fill("white");
  text("Current second:"+count,600,200);
  text("Current minute:"+Mcount,600,350);
  text("Current hour:"+Hcount,600,500);
}
   

