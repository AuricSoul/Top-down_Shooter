
var running = true;

class sprite{
    
    constructor( x, y){
      this.x = x;
      this.y = y;
    },
  
    update: function(deltaTime){},
    render: function(){}
}

var entitys;

function init() {
  
    
    
    gameloop();
}
function render(){

}
//dt is delta time
functino update(dt){}

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
