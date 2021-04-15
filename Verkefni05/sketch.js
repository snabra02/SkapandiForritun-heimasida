function setup() {
  createCanvas(3000,1000);
  background(255, 215, 0);
  fill(0);
  colorMode(HSB);
  frameRate(5);
}

function draw(){
  fill(random(0,360),75,100);
  for(var i = 0; i < 20 ; i = i + 1) {
    ellipse(random, 50 + i*20, 15, 15);


  }
}
