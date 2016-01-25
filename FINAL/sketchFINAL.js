var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
});

// Create a new Rune.Font object
var f = new Rune.Font("../iceland/Iceland-Regular.tff");

// load() will actually load the font file and call the function
// when the loading is done.
f.load(function(err) {

  // Get a path of the text "Rune" from the font
  // a x,y 200,200 and font size 120.
  var path = f.toPath("ITP", 150, 200, 200)
    .fill(30)

  // We need to specifically add the new path to the stage,
  // as is wasn't created via the r.path() function.
  r.stage.add(path);	
})

// change stroke width and stroke attributes if you want to see the 'logo'
var p = r.polygon(100, 200).fill(false).stroke(false).strokeWidth(0);
var x = p.vars.x;
var y = p.vars.y;
for (var i=0; i<30; i++) {
	if (i%2==0) {
		if (i <= 7) {
			x += 75
		} else if(i <= 24 && i >= 16){
			x -= 75
		} else if(i <= 16 && i >= 7){
			x += Rune.random(-50,125)
		} else {
			x += Rune.random(-125,100)
		}
	} else {
		if (i >= 24) {
			y += 75
		} else if(i <= 16 && i >= 8){
			y -= 75
		} else if(i <= 24 && i >= 16) {
			y += Rune.random(-50,125)
		} else {
			y += Rune.random(-125,100)
		}
	}
	if (y < 0){
		y = 5
	} else if (y > r.height) {
		y = r.height - 5
	}
	if(x < 0){
		x = 5
	} else if (x > r.width) {
		x = r.width - 5
	}
	p.lineTo(x, y);
}


// ~~~~~~~~~~~~~Fooseball players~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var loc2 = new Rune.Vector(10, 10);
var shape2 = r.path(loc2.x, loc2.y).fill(false).stroke(false);
var radius = 15
var points = 76
var spacing = 360/points;
for(var i = 0; i < points/2+1; i++) {
	var x = Math.cos(Rune.radians(i * spacing)) * radius;
	var y = Math.sin(Rune.radians(i * spacing)) * radius;
	shape2.lineTo(x, y);
}

shape2.rotate(180,loc2.x,loc2.y,true)
shape2.lineTo(-10,0)
shape2.lineTo(-10,-20)
shape2.lineTo(-20,-20)
shape2.lineTo(-20,-40)
shape2.lineTo(-12,-40)
shape2.lineTo(-8,-70)
shape2.lineTo(-14,-70)
shape2.lineTo(-14,-100)
shape2.lineTo(14,-100)
shape2.lineTo(14,-70)
shape2.lineTo(6,-70)
shape2.lineTo(12,-40)
shape2.lineTo(20,-40)
shape2.lineTo(20,-20)
shape2.lineTo(10,-20)
shape2.lineTo(10,0)

shape2.scale(.5)
for (var i=0; i<35; i++){
	for (var j=0; j<13; j++) {
		var shapeCopy = shape2.copy().move(i*25-750,j*60-700).fill(200)
		if(p.contains(j*60-10,i*25)) {
			shapeCopy.fill(60)
		}
	}
}


// ~~~~~~~~~~~~~~~~~~~~~LEDs~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// var led = r.group(0,0);

// var loc = new Rune.Vector(0, 0);
// var shape = r.path(loc.x, loc.y).fill(175).stroke(false);
// var radius = 5
// var points = 76
// var spacing = 360/points;
// for(var i = 0; i < points/2+1; i++) {
// 	var x = Math.cos(Rune.radians(i * spacing)) * radius;
// 	var y = Math.sin(Rune.radians(i * spacing)) * radius;
// 	shape.lineTo(x, y);
// }

// shape.closePath();
// led.add(shape);
// var rect = r.rect(-5,-15,10,15).fill(175).stroke(false);
// led.add(rect);
// r.line(-3,-15,-3,-40, led);
// r.line(3,-15,3,-40, led);

// for(var a=0; a<40; a++){
// 	for(var b=0; b<12; b++) {
// 		new_led = led.copy()
// 		if (a%2 == 1) {
// 			new_led.move(a*20,b*75+35)
// 		} else {
// 			new_led.move(a*20,b*75+35).rotate(180, led.vars.x, led.vars.y, true)
// 		}
// 		if(p.contains(new_led.vars.x, new_led.vars.y) || p.contains(new_led.vars.x+10, new_led.vars.y)) {
// 			new_led.children[0].fill(60)
// 		}
// 		if(p.contains(new_led.vars.x-5, new_led.vars.y-15) || p.contains(new_led.vars.x+5, new_led.vars.y)) {
// 			new_led.children[1].fill(60)
// 		}
// 	}
// }

// ~~~~~~~~~~~~~~~~CODE~~~~~~~~~~~~~~~~~~~~
// code = [' ', '0', '1']
// for (var i=0; i<400; i+=10){
// 	var string = "";
// 	for(var j=0; j<60; j++) {
// 		 var code_text = r.text(code[Math.floor(Math.random() * code.length)], j*15+10, i*2+20).stroke(200);
// 		 if(p.contains(j*15, i*2+100)) {
// 			code_text.stroke(60);
// 		}
// 	}
// }

// ~~~~~~~~~~~~~~~~~~~~~~~GENERATIVE ART~~~~~~~~~~~~~~~~~~~~~~~~~~
// var tileCount = 50;
// var rectSize = 30;
// for (var gridY=0; gridY<tileCount; gridY++) {
//     for (var gridX=0; gridX<tileCount; gridX++) {
       
//       var posX = Rune.random(r.width)
//       var posY = Rune.random(r.height)
 
//       var shiftX1 = 437/50 * Rune.random(-1, 1);
//       var shiftY1 = 529/50 * Rune.random(-1, 1);
//       var shiftX2 = 437/50 * Rune.random(-1, 1);
//       var shiftY2 = 529/50 * Rune.random(-1, 1);
//       var shiftX3 = 437/50 * Rune.random(-1, 1);
//       var shiftY3 = 529/50 * Rune.random(-1, 1);
//       var shiftX4 = 437/50 * Rune.random(-1, 1);
//       var shiftY4 = 529/50 * Rune.random(-1, 1);
      
//       var shape = r.polygon();
//       shape.lineTo(posX+shiftX1, posY+shiftY1);
//       shape.lineTo(posX+rectSize+shiftX2, posY+shiftY2);
//       shape.lineTo(posX+rectSize+shiftX3, posY+rectSize+shiftY3);
//       shape.lineTo(posX+shiftX4, posY+rectSize+shiftY4);
//       shape.stroke(false)
//       shape.fill(Rune.random(175,215), Rune.random(.3,.7))
//       if(p.contains(posX, posY)) {
//       	shape.fill(Rune.random(60,80), Rune.random(.3, .7))
//       }
// 	}
// }    

r.draw();
