var r = new Rune({
  container: "#canvas",
  width: 667,
  height: 943,
  debug: true
});

r.rect(0,0,667,943).stroke(false).fill(0);

var teal = new Rune.Color(0,255,255);
var darkOrange = new Rune.Color(255,140,0);
var blue = new Rune.Color(47,127,247);
var white = new Rune.Color(255);

colors = [teal, darkOrange, blue, white]



var loc = new Rune.Vector(r.width/2 + 100, 275);
// r.circle(loc.x, loc.y, 10, 10).fill(255).stroke(false);

var shape = r.path(loc.x, loc.y).fill(colors[Math.floor(Math.random() * colors.length)]).stroke(false);
var points = 70
var spacing = 360/points;
var startingPoint = 0;
var arc = 12;
var minLength = 25;
var maxLength = 60;
var group = new Rune.Group(loc.x, loc.y);

for (var i=0; i<1; i++) {
	for(var j = startingPoint; j < arc; j++) {
		radius = j%2==0 ? minLength : maxLength;
		var x = Math.cos(Rune.radians(j * spacing)) * radius;
		var y = Math.sin(Rune.radians(j * spacing)) * radius;
		shape.lineTo(x, y);
	}
	shape.closePath();
	// shape.moveTo(loc.x, loc.y);
	for(var j = startingPoint; j < arc; j++) {
		radius = 10;
		var x = Math.cos(Rune.radians(j * spacing)) * radius;
		var y = Math.sin(Rune.radians(j * spacing)) * radius;
		shape.lineTo(x, y);
	}
	shape.closePath();
	shape.fillRule("evenodd");
	//var shape = r.path(loc.x, loc.y).stroke(colors[Math.floor(Math.random() * colors.length)]);
	startingPoint = Math.round(Rune.random(points) - 5);
	arc = Math.round(Rune.random(startingPoint, startingPoint + 25));
	minLength += 10;
	maxLength += 10;

}



// var minLength = 20;
// var maxLength = 55;
// var count = 0;
// for (var a=0,aMax=(2*Math.PI),aStep=(Math.PI/20); a<aMax; a+=aStep){
//     step = count%2==0 ? minLength : maxLength;
//     fillValue = Math.round(Rune.random(170, 220));
//     px1 = 130+Math.sin(a)*30;
//     py1 = 130+Math.cos(a)*30;
//     px2 = 130+Math.sin(a)*(30+step);
//     py2 = 130+Math.cos(a)*(30+step);

//     r.triangle(px1, py1, px2-5, py2, px2+5, py2).strokeWidth(5).stroke(fillValue);
//     count++;
// };


r.draw();