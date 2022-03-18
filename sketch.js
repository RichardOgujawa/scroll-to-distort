//IMAGE VARIABLES + EFFECTS VARIABLES
let imgAdult;
let imgBaby;
let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
let x4;
let y4;
let w;
let h;

//TEXT VARIABLES
let sentence;
let indicator;


function preload() {
  imgBaby = loadImage('data/images/1early-childhood.jpg');
  imgAdult = loadImage('data/images/7early-adulthood-sad.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(imgAdult, 0, 0);
  sentence = ["The", "more", "we", "look", "the", "less", "we", "see."]
}


function draw() {
  //DISTORTION FX
  let x1Higher = floor(map(mouseY, height, 0, 0, 200));
  x1 = random(0, x1Higher);
  y1 = random(x1Higher, x1Higher + 100);

  x2 = round(x1 + random(-10, 10));
  y2 = round(y1 + random(-10, 10));

  w = 300;
  h = 5;

  if (y1 >= 230 && y1 <= 245) {
    set(x2, y2, get(x1, y1, w, h));
  }
  else {
  }

  //TEXT ANIMATION
  fill(255);
  noStroke();
  rectMode(CORNER);
  rect(windowWidth * 0.68, windowHeight * 0.52, 190, 100);

  fill(0);
  textSize(40);
  textAlign(CENTER, CENTER)
  indicator = floor(map(mouseY, 0, height, sentence.length - 1, 0));
  text(sentence[indicator], windowWidth * 0.77, 400);

}

