var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
});

// baseHue = 180
baseHue = 0
// saturationAndValue = 100
saturationAndValue = 25
r.rect(0,0,800,800).fill('hsv', baseHue+180, saturationAndValue, saturationAndValue);

a = 15.5;
radius = 90;
var p;
// saturation = Rune.random(50,75)
saturation = 100
for(var i=0; i<360; i++) {
  x = r.width/2 + Math.cos( Rune.radians(i) ) *radius*2.5;
  //The exponent a controls the shape of the curve
  y = r.height/2+ Math.sin( Rune.radians(i) ) * Math.pow(Math.sin(Rune.radians(i)/2), a) *radius;
  valueStroke = 55
  valueFill = 40
  // valueStroke = valueFill = 90
  if (i==0) {
    p = r.path(200, 300).fill('hsv', baseHue, saturation, valueFill).strokeWidth(4).stroke('hsv', baseHue, saturation, valueStroke);
  } else {
    p.lineTo(y-400,x-500);
  }
}
p.closePath();

p2 = p.copy().strokeWidth(4);
p3 = p.copy().strokeWidth(4);
p4 = p.copy().strokeWidth(4);
p5 = p.copy().strokeWidth(4);
p6 = p.copy().strokeWidth(4);
p7 = p.copy().strokeWidth(4);

p2.move(400,300);
p3.move(100,550);
p4.move(700,700);
p5.move(300,900);
p6.move(400,850);
p7.move(200,500);

drawCircles(250, 250, 175, 8)

function drawCircles(x, y, radius, level){
  // saturation = Math.round(Rune.random(10,80))
  value = Rune.random(45,85)
  // value = 90
  r.ellipse(x, y, radius*.75, radius*.75).fill('hsv', baseHue, saturation, value, .5).stroke('hsv', baseHue, saturation, value, .5);
  r.ellipse(x-15, y-20, radius*.75, radius*.75).fill('hsv', baseHue, saturation, value, .5).stroke('hsv', baseHue, saturation, value, .5);
  r.ellipse(x-45, y-40, radius*.75, radius*.75).fill('hsv', baseHue, saturation, value, .5).stroke('hsv', baseHue, saturation, value, .5);

  if (level > 1) {
    level = level - 1;
    num = Math.round(Rune.random(2, 5));
    console.log
    for(var i=0; i<num; i++) {
      a = Math.random() * (Math.PI * 2);
      nx = x + Math.cos(a) * 30.0 * level;
      ny = y + Math.sin(a) * 30.0 * level;
      drawCircles(nx, ny, radius/1.5, level);
    }
  }
}

r.draw();