var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 400,
});

// var f = new Rune.Font("Roboto-Regular.ttf");
// var path = f.toPath("Rune", 150, 200, 200)
//     .fill(255, 0, 0)

r.text("ITP", 350, 350)
  .fill(false)
  .stroke(0)
  .fontSize(400)
  .textAlign("center")
  .fontFamily("Helvetica")
  .fontWeight("bold")

var led = r.group(100,100);

var loc = new Rune.Vector(100, 100);
var shape = r.path(loc.x, loc.y).fill(255,0,0).stroke(false);
var radius = 5
var points = 76
var spacing = 360/points;
for(var i = 0; i < points/2+1; i++) {
	var x = Math.cos(Rune.radians(i * spacing)) * radius;
	var y = Math.sin(Rune.radians(i * spacing)) * radius;
	shape.lineTo(x, y);
}
shape.closePath();
led.add(shape);
r.rect(95,85,10,15, led).fill(255,0,0).stroke(false);
r.line(97,85,97,60, led);
r.line(103,85,103,60, led);

for(var j=0; j<10; j++){
	if (j%2 == 0) {
		led.copy().move(j*15,0)
	} else {
		led.copy().move(j*15,0).rotate(180, led.vars.x, led.vars.y, true)
	}
}

r.draw();