var r = new Rune({
  container: "#canvas",
  width: 1000,
  height: 800,
  debug: true
});

// var grid = r.grid({
//   x: 50,
//   y: 50,
//   width: r.width - 100,
//   height: r.height - 100,
//   columns: 4,
//   rows: 4
// });

var angle = Math.PI * 2/ 5;
var halfAngle = angle/2.0;
var poly = r.polygon(600, 600).fill(255,0,0);
var x = 0;
var y = 0;
for (var a = 0; a < Math.PI*2; a += angle) {
    var sx = x + Math.cos(a) * 70;
    var sy = y + Math.sin(a) * 70;
    poly.lineTo(sx, sy);
    sx = x + Math.cos(a+halfAngle) * 30;
    sy = y + Math.sin(a+halfAngle) * 30;
    poly.lineTo(sx, sy);
}
  // endShape(CLOSE);


// grid.add(p, 2, 2);

// var rect = r.rect(10, 10, 100, 100);
// grid.add(rect, 1, 1);


 
r.draw();