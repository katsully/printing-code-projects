var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1200,
  debug: false
});

r.rect(0,0,r.width,r.height).fill(25,25,112).stroke(false);

var line = r.line(120,1050,r.width,r.height).strokeWidth(3);
var line2 = r.line(350,850,r.width,r.height).strokeWidth(3);
var line3 = r.line(715,1050,r.width,r.height).strokeWidth(3);
var line4 = r.line(470,670,r.width,r.height).strokeWidth(3);
var line5 = r.line(225,670,r.width,r.height).strokeWidth(3);


var grid = r.grid({
  x: 50,
  y: 50,
  width: r.width - 100,
  height: r.height - 100,
  columns: 6,
  rows: 6
});


var stars = []
var angle = Math.PI*2/ 5;
var halfAngle = angle/2.0;
for(var j=0; j<6; j++) {
	var poly = r.polygon(grid.vars.moduleWidth/2, grid.vars.moduleHeight/2).fill(255,255,0);
	for (var a = 0; a < Math.PI*2; a += angle) {
	    var sx = Math.cos(a) * 45 + Rune.random(-5,5);
	    var sy = Math.sin(a) * 45 + Rune.random(-5,5);
	    poly.lineTo(sx, sy);
	    sx = Math.cos(a+halfAngle) * 15 + Rune.random(-5,5);
	    sy = Math.sin(a+halfAngle) * 15 + Rune.random(-5,5);
	    poly.lineTo(sx, sy);
	}
	stars.push(poly);
}

var group1 = r.group();
r.triangle(75,90,50,120,100,120, group1).fill(200).rotate(-45,75,50);
var tail = r.triangle(75,90,65,120,85,120, group1).fill(215).stroke(false).rotate(-45,75,50);
r.ellipse(75,50,30,100, group1).fill(200).stroke(false).rotate(-45,75,50);
var wing = r.triangle(70,60,20,60,45,35).fill(200).stroke(false).rotate(-45,75,50);
group1.add(wing);
var wing2 = wing.copy();
wing2.move(60,0, true);

group1.move(-27,0,true);

var text = r.text("Le Petit Prince", 0, 75).fontSize(100);
grid.add(text,1,3);

grid.add(group1,1,6);
var group2 = group1.copy();
grid.add(group2,3,5);
var group3 = group2.copy();
grid.add(group3,6,6);

var group4 = group3.copy();
grid.add(group4,4,4);

var group5 = group4.copy();
grid.add(group5,2,4);


for(var s=0; s<stars.length; s++){
	grid.add(stars[s], s+1, Math.round(Rune.random(1,2)));
}
 
r.draw();