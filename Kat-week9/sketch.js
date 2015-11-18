var r = new Rune({
  container: "#canvas",
  width: 667,
  height: 943,
  debug: true
});

r.rect(0,0,667,943).stroke(false).fill(0);

var teal = new Rune.Color(0,255,255, 0.8);
var darkOrange = new Rune.Color(255,140,0, 0.7);
var blue = new Rune.Color(47,127,247, 0.8);
var white = new Rune.Color(255);
var darkBlue =  new Rune.Color(0,51,153, 0.8);
var skyBlue = new Rune.Color(0, 191, 255);
var grey = new Rune.Color(195, 0.8);

colors = [teal, darkOrange, blue, white, darkBlue, skyBlue, grey, white];

for (var a=0; a<12; a++) {
	var loc = new Rune.Vector(Rune.random(r.width), Rune.random(r.height));
	var shape = r.path(loc.x, loc.y).fill(colors[Math.floor(Math.random() * colors.length)]).stroke(false);
	var points = 75
	var spacing = 360/points;
	var startingPoint = 0;
	var arc = 12;
	var minLength = 25;
	// var minLength = Rune.random(15, 40);
	// var maxLength = 60;
	// maxLength = minLength + 35;
	maxLength = minLength + Rune.random(35, 45);
	var increase = Rune.random(5);
	var group = new Rune.Group(loc.x, loc.y);

	for (var i=0; i<36; i++) {
		for(var j = startingPoint; j < arc; j++) {
			if (i == 0) {
				radius = minLength
			} else {
				radius = j%2==0 ? minLength : maxLength;
			}
			var x = Math.cos(Rune.radians(j * spacing)) * radius;
			var y = Math.sin(Rune.radians(j * spacing)) * radius;
			shape.lineTo(x, y);
		}
		shape.closePath();
		for(var j = startingPoint; j < arc; j++) {
			radius = minLength - 20;
			var x = Math.cos(Rune.radians(j * spacing)) * radius;
			var y = Math.sin(Rune.radians(j * spacing)) * radius;
			shape.lineTo(x, y);
		}
		shape.closePath();
		shape.fillRule("evenodd");
		var shape = r.path(loc.x, loc.y).fill(colors[Math.floor(Math.random() * colors.length)]).stroke(false);
		startingPoint = Math.round(Rune.random(points) - 5);
		arc = Math.round(Rune.random(startingPoint, startingPoint + 25));
		maxLength += increase;
		if(i % 6 == 0 && i != 0) {
			// minLength += increase+2;
			minLength += increase;
			//maxLength += 5;
			// points += increase * 2;
			points = minLength * 3 - 10; 
			spacing = 360/points;
		}
	}
}

r.draw();