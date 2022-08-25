var ctx=gameCanvas.getContext("2d");
var x=280, y=400, speedX=0, speedY=-8, batX=280, score=0;

drawBlocks();

function drawBlocks(){
    for(a=0; a<5; a++){
        for(b=0; b<8; b++){
            ctx.fillStyle='#ff00'+(40+a*40).toString(16);
            ctx.fillRect(b*80,100+a*20,79,19);
        }
    }
}   

var gameTimer=setInterval(mainLoop, 25);
function mainLoop() {
    ctx.clearRect(x,y,7,7);
    x=x+speedX;
    y=y+speedY;
//checkForStrikes();
    ctx.fillStyle='#ffffff';
    ctx.fillRect(x,y,7,7);

ctx.clearRect(0,460,640,20);
ctx.fillStyle='#cccccc';
ctx.fillRect(batX-60,460,120,20);

}