

var gameCanvas = document.getElementById("GameWindow");
var context = gameCanvas.getContext("2d");


var running = true;

class sprite{
    
    constructor( x, y, imagePath){
      this.x = x;
      this.y = y;
      this.image = new Image();
      this.image.src = imagePath;
    },
  
    update: function(deltaTime){},
    render: function(){
        context.drawImage(this.image, this.x , this.y);
    }
}

var entitys = new Array();

function init() {
  
    entitys[0] = new sprite(250,250, "res/cow.png");
    
    gameloop();
}
function render(){
    
    for(var i = 0; i < entitys.length; i++){
        entitys[i].render();
    }
}
//dt is delta time
functino update(dt){
    for(var i = 0; i < entitys.length; i++){
        entitys[i].update(dt);
    }
}

var timer = new Date();
var lastTime;

function gameloop(){
    lastTime = timer.getTime();
    while(running){
        var time = timer.getTime();
        var delta = time - timer.lastTime;
        lastTime = time;
        
        update(delta);
        render();
    
    }
} 
