var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 400,
});

// ~~~~~~~~~~~~~~DESIGN I~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// r.rect(200, 150, 40, 230).fill(255).stroke(0).strokeWidth(3);
// r.triangle(200, 150, 240, 150, 220, 100).fill(255).stroke(0).strokeWidth(3);

// ~~~~~~~~~~~~~~DESIGN T~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// var designT = r.group();
// r.rect(300,100,200,40, designT).fill(255).stroke(0).strokeWidth(3);
// for(var i=310; i<500; i+=20){
// 	r.line(i,100,i,110, designT).stroke(0);
// 	r.text((i-310)/20, i-2, 120, designT).fontSize(10).stroke(0);
// }
// r.rect(380,140,40,240, designT).fill(255).stroke(0).strokeWidth(3);
// for(var j=150; j<380; j+=20){
// 	r.line(380,j,390,j, designT).stroke(0);
// 	r.text((j-150)/20, 395, j+2, designT).fontSize(10).stroke(0);
// }

// ~~~~~~~~~~~~~DESIGN P~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var designP = r.group();
r.rect(550,100,40,280, designP).fill(255).stroke(0).strokeWidth(3);
for(var j=110; j<380; j+=20){
	r.line(550,j,560,j, designP).stroke(0);
	r.text((j-110)/20, 565, j+2, designP).fontSize(10).stroke(0);
}

var radius = 75;
var points = 40;

var shape = r.polygon().fill(255).stroke(0).strokeWidth(3);
var spacing = 180/points;

var lineGroup = r.group();
for(var j = 0; j < points; j++) {
	var x = Math.cos(Rune.radians(j * spacing)) * radius + 590;
	var y = Math.sin(Rune.radians(j * spacing)) * 2 * radius + 150;
	shape.lineTo(x, y);
  if (j%4 == 0) {
    var px2 = Math.cos(Rune.radians(j * spacing)) * (radius-10) + 590;
    var py2 = Math.sin(Rune.radians(j * spacing)) * 2 * (radius-10) + 150;
    r.line(x,y,px2, py2,lineGroup);
  }
}
shape.rotate(-86, 590, 150, true).move(-25, -5);
lineGroup.rotate(-86, 590, 150, true).move(-25, -5);

var radius = 50;
var points = 40;

var shape = r.polygon().fill(255).stroke(0).strokeWidth(3);
var spacing = 180/points;

for(var j = 0; j < points; j++) {
	var x = Math.cos(Rune.radians(j * spacing)) * radius + 590;
	var y = Math.sin(Rune.radians(j * spacing)) * 2 * radius + 150;
	shape.lineTo(x, y);
}
shape.rotate(-86, 590, 150, true).move(-25, -3);

// ~~~~~~~~~~~~~~~~~~~~~~~~CODE I~~~~~~~~~~~~~~~~~~~~
codeI = r.group()
code = [' ', '0', '1']
for (var i=100; i<380; i+=10){
	var string = "";
	for(var j=0; j<8; j++) {
		 string += code[Math.floor(Math.random() * code.length)];
	}
	r.text(string, 190, i, codeI);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~CODE T~~~~~~~~~~~~~~~~~~~~~~
// var codeT = r.group(300,110);
// r.text("r.text((i-310)/20, i-2, 120, designT).fontSize(10)", 300, 100)
// 	.fontFamily("Helvetica")
// 	.fontSize(10)
// 	.fill(0)
// r.text("sx = Math.cos(a+halfAngle) * 15 + Rune.rando", 300, 110)
// 	.fontFamily("Helvetica")
// 	.fontSize(10)
// 	.fill(0)
// r.text("data = json.loads(r.text)#print data if data[1] ==", 300, 120)
// 	.fontFamily("Helvetica")
// 	.fontSize(10)
// 	.fill(0)
// r.text("} else if (i < 250) { offset -= .25 offset2 -= 1.0} else", 300, 130)
// 	.fontFamily("Helvetica")
// 	.fontSize(10)
// 	.fill(0)

// r.text("r.text((i-310)/20, i-2, 120, designT).fontSize(10), 0, 0, co", 0, 0, codeT)
// 	.fontFamily("Helvetica")
// 	.fontSize(10)
// 	.fill(0)
// r.text("sx = Math.cos(a+halfAngle) * 15 + Rune.randon(r.width, ", 0, 10, codeT)
// 	.fontFamily("Helvetica")
// 	.fontSize(10)
// 	.fill(0)
// r.text("data = json.loads(r.text)#print data if data[1] == 0 { conti", 0, 20, codeT)
// 	.fontFamily("Helvetica")
// 	.fontSize(10)
// 	.fill(0)
// r.text("} else if (i < 250) { offset -= .25 offset2 -= 1.0} else { bre", 0, 30, codeT)
// 	.fontFamily("Helvetica")
// 	.fontSize(10)
// 	.fill(0)

// codeT.rotate(90,0,0,true).move(320,0);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~CODE P~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// code = [' ', '0', '1']
// for (var i=100; i<380; i+=10){
//   var string = "";
//   var len = 0;
//   if (i<120) {
//     len = 16;
//   }
//   else if (i<190) {
//     if (i>155){
//       len = 16;
//     } else {
//       len = 22;
//     }
//   } else {
//     len = 8;
//   }
//   for(var j=0; j<len; j++) {
//      string += code[Math.floor(Math.random() * code.length)];
//   }
//   r.text(string, 570, i, codeI);
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~GENERATIVE I~~~~~~~~~~~~~~~~~~~~~~~~~~~
// var shapes = 50;
// var speedX = [];
// var speedY = [];
// var x = [];
// var y = [];
// var w = [];
// var h = [];
 
// for (var i=0; i<shapes; i++){
//   x[i]=Rune.random(190,230);
//   y[i]=Rune.random(100,360); 
//   w[i]=Rune.random(10, x[i]-190); 
//   h[i]=Rune.random(10, 380-y[i]);
// }

// var generativeI = r.group();
// for (var i=0; i<shapes; i++){
// 	r.rect(x[i], y[i], w[i], h[i], generativeI)
//     	.stroke(false)
//     	.fill('hsv', 300, Rune.random(100), Rune.random(10,50), Rune.random(.3, .7));  
// }

// ~~~~~~~~~~~~~~~~~~~GENERATIVE T~~~~~~~~~~~~~~~~~~~~~~~~~~~
var tileCount = 10;
var rectSize = 30;
for (var gridY=0; gridY<tileCount; gridY++) {
    for (var gridX=0; gridX<tileCount; gridX++) {
       
      var posX;
      var posY = 280/tileCount * gridY + 90;
      if (posY < 140) {
        posX = 200/tileCount * gridX + 300
      } else {
        posX = Rune.random(380, 420);
      }
 
      var shiftX1 = 437/50 * Rune.random(-1, 1);
      var shiftY1 = 529/50 * Rune.random(-1, 1);
      var shiftX2 = 437/50 * Rune.random(-1, 1);
      var shiftY2 = 529/50 * Rune.random(-1, 1);
      var shiftX3 = 437/50 * Rune.random(-1, 1);
      var shiftY3 = 529/50 * Rune.random(-1, 1);
      var shiftX4 = 437/50 * Rune.random(-1, 1);
      var shiftY4 = 529/50 * Rune.random(-1, 1);
      
      var shape = r.polygon();
      shape.lineTo(posX+shiftX1, posY+shiftY1);
      shape.lineTo(posX+rectSize+shiftX2, posY+shiftY2);
      shape.lineTo(posX+rectSize+shiftX3, posY+rectSize+shiftY3);
      shape.lineTo(posX+shiftX4, posY+rectSize+shiftY4);
    shape.stroke(false)
      shape.fill('hsv', 300, Rune.random(100), Rune.random(10,50), Rune.random(.3, .7));  
}    
  }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~GENERATIVE P~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// var generativeP = r.group();
// var poly = r.polygon(550, 100).fill(170);
// poly.lineTo(550, 380);
// poly.lineTo(590, 380);
// poly.lineTo(590,160);

// var poly = r.path(550, 100)
//   .lineTo(0, 0)
//   .lineTo(0, 280)
//   .lineTo(40, 280)
//   .lineTo(40,100)
//   .curveTo(90,100,125,50)
//   .curveTo(50, -25, 0, 0)
//   .fill(false)
//   .stroke(false);

// var x = 200;
// var y = 200;
// for (var i =0; i <275;i++) {
// 	// x = x+5;
// 	var y_val = 0;
// 	if (i < 180) {
// 		y_val = Rune.random(poly.vars.y, 200);
// 	} else {
// 		y_val = Rune.random(200, 380);
// 	}
// 	var x_val = 0;
// 	if (y_val > 225) {
// 		x_val = Rune.random(550, 590);
// 	} else {
// 		x_val = Rune.random(550, 675);
// 	}
// 	if (x_val > 650 && y_val < 125) {
// 		y_val += 25;
// 	} else if (x_val > 650 && (y_val > 175 && y_val < 225)) {
// 		y_val -= 25;
// 	}
// 	r.ellipse(x_val,y_val,15,15)
// 		.stroke(false)
//     .fill('hsv', 300, Rune.random(100), Rune.random(10,50), Rune.random(.3, .7));  
// }

//~~~~~~~~~~~~~~~~~~~PComp T~~~~~~~~~~~~~~~~~~~~~~~~~~
// r.line(300, 120, 360,120).strokeWidth(4).stroke(120);
// r.rect(360,100,80,40).fill('hsv', 300, 10, 86.7);
// r.line(440,120,500,120).strokeWidth(4).stroke(120);
// r.line(380,100,380,140).strokeWidth(3).stroke('hsv', 300, 100, 25);
// r.line(400,100,400,140).strokeWidth(3).stroke('hsv', 300, 75, 35);
// r.line(420,100,420,140).strokeWidth(3).stroke('hsv', 300, 50, 45);

// r.line(400,140,400,220).strokeWidth(4).stroke(120);
// r.rect(380,200,40,80).fill('hsv', 300, 10, 86.7);
// r.line(400,280,400,380).strokeWidth(4).stroke(120);
// r.line(380,220,420,220).strokeWidth(3).stroke('hsv', 300, 100, 25);
// r.line(380,240,420,240).strokeWidth(3).stroke('hsv', 300, 75, 35);
// r.line(380,260,420,260).strokeWidth(3).stroke('hsv', 300, 50, 45);

 
r.draw();