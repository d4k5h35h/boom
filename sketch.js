var song;
var button;
var amp;
let bgColor = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = random(255);
  song = loadSound("d.mp3", loaded);
  amp = new p5.Amplitude();
}

function loaded() {
  button = createButton("Play");
  button.mousePressed(togglePlaying);
  button.position(width / 2.25, height / 1.18);
  button.size(200,50);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    button.html("Pause");
  } else {
    song.pause();
    button.html("Play");
  }
}

function draw() {
  background(bgColor);
  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 10, 225);
  push();
  fill(205, 209, 209);
  stroke(51);
  strokeWeight(4);
  ellipse(width / 2, height / 2, diam, diam);
  pop();
  push();
  fill(0);
  ellipse(width / 2, height / 2, diam / 3.5, diam / 3.5);
  pop();
  push();
  noFill();
  stroke(255);
  strokeWeight(37.5);
  rectMode(CENTER);
  rect(width / 2, height / 2, 400, 400, 50);
  pop();
  changer();
}

function changer() {
  if (frameCount % 10 === 0 && song.isPlaying()) {
    bgColor = color(random(255), random(255), random(255));
  } else if (!song.isPlaying()) {
    bgColor = 0;
  }
}
