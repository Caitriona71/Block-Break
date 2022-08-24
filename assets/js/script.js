var ctx=gameCanvas.getContext("2d");
var x=280, y=400, speedX=0, speedY=-8, batX=280, score=0;

drawBlocks();

function drawBlocks(){
    for(a=0; a<5; a++){
        for(b=0; b<8; b++){
            ctx.fillStyle="#ff00"+(40+a*40).toString(16);
            ctx.fillRect(b*80,100+a*20,79,19);
        }
    }
}   
