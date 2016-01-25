var r = new Rune({
  container: "#canvas",
  width: 667,
  height: 943,
  debug: true
});

r.rect(0,0,667,943).stroke(false).fill(30);

var teal = new Rune.Color(0,246,246, 0.7);
var darkOrange = new Rune.Color(255,100,10, 0.7);
var blue = new Rune.Color(51,153,255, 0.7);
var white = new Rune.Color(255);
var darkBlue =  new Rune.Color(15,45,128);
var skyBlue = new Rune.Color(0, 155, 255);
var grey = new Rune.Color(195, 0.7);

colors = [teal, darkOrange, blue, white, darkBlue, skyBlue, grey, white, skyBlue, white, blue, blue];
var firstMaxLength;
var firstMinLength;

for (var a=0; a<12; a++) {
	var loc = new Rune.Vector(Rune.random(r.width), Rune.random(r.height));
	var shape = r.path(loc.x, loc.y).fill(colors[Math.floor(Math.random() * colors.length)]).stroke(false);
	var points = 75
	var spacing = 360/points;
	var startingPoint = 0;
	var arc = 12;
	var minLength = 25;
	firstMinLength = minLength;
	var maxLength = minLength + Math.round(Rune.random(35, 45));
	firstMaxLength = maxLength;
	var increase = Math.round(Rune.random(1,7));
	var group = new Rune.Group(loc.x, loc.y);

	for (var i=0; i<48; i++) {
		for(var j = startingPoint; j < arc; j++) {
			if (i % 6 == 0) {
				radius = minLength;
			} else {
				radius = Math.round(j)%2==0 ? minLength : maxLength;
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
		if (i % 6 == 0 && i < 36){
			shape.fill(white);
		}
		startingPoint = Math.round(Rune.random(points) - 5) + Rune.random(.1, .6);
		arc = Math.round(Rune.random(startingPoint, startingPoint + 25));
		var level = Math.round(Rune.random(0,7))
		minLength = firstMinLength + (level * increase)
		maxLength = firstMaxLength + ((increase*1.10) * (level*7))
	}
}

r.draw();