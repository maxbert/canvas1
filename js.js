var c = document.getElementById("can");
var ctx = c.getContext('2d');
ctx.fillStyle = '#C0FFEE';
var createRect = function(e){
    ctx.fillRect(e.clientX - 100, e.clientY - 100, 50, 50);
    console.log('he');
};
c.addEventListener('click', createRect);
b = document.getElementById('clear');
var d = function(e){
    ctx.clearRect(0,0,500,500);
};
b.addEventListener('click', d);
