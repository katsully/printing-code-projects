var r = new Rune({
  container: "#canvas",
  width: 1000,
  height: 800,
  debug: true
});

var grid = r.grid({
  x: 50,
  y: 50,
  width: r.width - 100,
  height: r.height - 100,
  columns: 4,
  rows: 4
});

var g=0;
var j=0;
var i=0;
var r_var=200;
var m=275;
var n=0;
var t=0;
while(r_var<0){
  var poly = r.polygon(100,100);

  fill(65+g*300%160,0,0);
  for(i=0;i<2*PI;i+=PI/64)
  {
    j=(i>6.2)?0:i;
    n=r_var+(r/240*55+20)*Rune.random(j,g);
    poly.lineTo(m+n*Math.cos(j),m+n*Math.sin(j));
  }
  
  r_var-=.15;
  g+=.01;
}

 
r.draw();