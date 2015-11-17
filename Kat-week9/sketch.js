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
// 0, 191, 
var grey = new Rune.Color(180);

colors = [teal, darkOrange, blue, white, darkBlue, grey];


for (var a=0; a<6; a++) {
	console.log(a);
	// var loc = new Rune.Vector(r.width/2 + 100, 275);
	var loc = new Rune.Vector(Rune.random(r.width), Rune.random(r.height));
	var shape = r.path(loc.x, loc.y).fill(colors[Math.floor(Math.random() * colors.length)]).stroke(false);
	var points = 70
	var spacing = 360/points;
	var startingPoint = 0;
	var arc = 12;
	var minLength = 25;
	// var minLength = Rune.random(15, 40);
	// var maxLength = 60;
	maxLength = minLength + 35;
	var group = new Rune.Group(loc.x, loc.y);

	for (var i=0; i<48; i++) {
		for(var j = startingPoint; j < arc; j++) {
			radius = j%2==0 ? minLength : maxLength;
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
		maxLength += Rune.random(4);
		if(i % 8 == 0 && i != 0) {
			minLength += 5;
			//maxLength += 5;
			points += 10;
			spacing = 360/points;
		}
	}
}


r.draw();