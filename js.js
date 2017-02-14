// Initialization
var c = document.getElementById("can");
var ctx = c.getContext('2d');
ctx.fillStyle = '#C0FFEE';

// Functions
var createRect = function(e){
    var x = e.clientX - c.offsetLeft;
    var y = e.clientY - c.offsetTop;
    ctx.fillRect(x, y, 50, 50);
    //console.log('x: ' + x + '\ty: ' + y);
};
var connect = function(e){

    var x = e.offsetX;
    var y = e.offsetY;

    ctx.lineTo(x, y)
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2 );
    ctx.moveTo(x,y);
    
    ctx.fill(); 
    //console.log('x: ' + x + '\ty: ' + y);
};

var clear = function(e){
    ctx.clearRect(0,0,500,500);
};
var fillrandom = function(e) {
    var origColor = ctx.fillStyle;
    var newColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' +
	Math.floor(Math.random() * 256) + ',' + 
	Math.floor(Math.random() * 256) + ')';
    ctx.fillStyle = newColor;
    ctx.fillRect(0,0,500,500);
    ctx.fillStyle = origColor;
    console.log(newColor);
}

// Adding Event Listeners
c.addEventListener('click', connect);

b = document.getElementById('clear');
b.addEventListener('click', clear);
rando = document.getElementById('fillrandom');
rando.addEventListener('click', fillrandom);

console.log("Loaded js.");
