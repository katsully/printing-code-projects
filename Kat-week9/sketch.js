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
var shape = r.path(loc.x, loc.y).fill(colors[Math.floor(Math.random() * colors.length)]);
var points = 70
var spacing = 360/points;
var startingPoint = 0;
var arc = 12;
var minLength = 25;
var maxLength = 60;
var radius = 25;
var group = new Rune.Group(loc.x, loc.y);
var x1,y1,x2,y2,x3,y3;
for (var i=0; i<1; i++) {
	var color = colors[Math.floor(Math.random() * colors.length)];
	for(var j = startingPoint; j < arc; j++) {
		if(j == 0) {
			x1 = loc.x + Math.cos(Rune.radians(j * spacing)) * radius;
			y1 = loc.y + Math.sin(Rune.radians(j * spacing)) * radius;
		} else if(j % 3 == 1) {
			x2 = loc.x + Math.cos(Rune.radians(j * spacing)) * (radius+ 35);
			y2 = loc.y + Math.sin(Rune.radians(j * spacing)) * (radius+35);
		} else {
			x3 = loc.x + Math.cos(Rune.radians(j * spacing)) * radius;
			y3 = loc.y + Math.sin(Rune.radians(j * spacing)) * radius;			
			r.triangle(x1,y1,x2,y2,x3,y3).fill(color);
			x1 = x3;
			y1 = y3;
		}
		// shape.lineTo(x, y);
		
	}
	var shape = r.path(loc.x, loc.y).stroke(colors[Math.floor(Math.random() * colors.length)]);
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