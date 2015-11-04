var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 400,
  // debug: true
});

r.rect(300,100,200,40).fill('hsv', 300, 20, 50).stroke(false);
for(var i=310; i<500; i+=20){
	r.line(i,100,i,110).stroke('hsv', 300, 100, 25);
	r.text((i-310)/20, i-2, 120).fontSize(10).stroke('hsv', 300, 100, 25);
}
r.rect(380,140,40,240).fill('hsv', 300, 20, 50).stroke(false);
for(var j=150; j<380; j+=20){
	r.line(380,j,390,j).stroke('hsv', 300, 100, 25);
	r.text((j-150)/20, 395, j+2).fontSize(10).stroke('hsv', 300, 100, 25);
}


 
r.draw();