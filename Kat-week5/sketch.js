var r = new Rune({
  container: "#canvas",
  width: 1000,
  height: 800,
});

var triangle1 = r.triangle(100,350,150,300,175,400).fill(255,0,0);
var triangle2 = triangle1.copy();
triangle2.rotate(180,175,400).fill(0,0,225);

var triangleH1 = r.triangle(275, 500, 275, 300, 350, 400).fill(255,255,0);
var triangleH2 = triangleH1.copy();
triangleH2.rotate(180,350,400).fill(225,0,0);

var triangleA1 = r.triangle(450,500,500,300,550,500).fill(0,0,255);
var triangleA2 = r.triangle(480,410,500,350,520,410).fill(255,255,0);

var triangleP1 = r.triangle(575,380,575,300,625,340).fill(255,255,0);
var triangleP2 = r.triangle(570,500,575,380,580,500).fill(255,0,0);

var triangleE1 = r.triangle(650,400,650,300,700,350).fill(0,0,225);
var triangleE2 = triangleE1.copy();
triangleE2.move(0,100,true).fill(255,255,0);

triangle1.copy().move(625,0,true).fill(255,0,0);
triangle2.copy().move(-625,0,true).fill(0,0,255);

 
r.draw();