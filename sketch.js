/*INSTRUCTIONS
1. Move your mouse from the bottom to top of the screen  to read the sentence on the right. 
2. Scroll your trackpad to see the effects of excessive internet scrolling.  
*/

//IMAGE VARIABLES + EFFECTS VARIABLES
let imgAdult;
let pixels = [];

//TEXT VARIABLES
let sentence = [];
let indicator;


function preload() {
  imgAdult = loadImage('data/images/7early-adulthood-sad.jpg')
}

function setup() {
  createCanvas(750, windowHeight*0.97);
  image(imgAdult, 0, 0);
  sentence = ["The", "more", "you", "scroll", "the", "more", "distorted", "reality", "becomes."]
  indicator = 0;
  noLoop(); //only want to initiate loop on mouse wheel scroll, so will initiate it later
}


function draw() {
    //TEXT ANIMATION
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(620, 400, 190, 100);
    //Covering the previous text each time so they don't overlay
  
  
    fill(0);
    textSize(40);
    textAlign(CENTER, CENTER)
    indicator = floor(map(mouseY, 20, height, sentence.length - 1, 0));
    loop()
    text(sentence[indicator], 620, 400);
    //cycle through the sentence array depending on the mouseY position
}

function mouseWheel() {
  for (var i = 0; i < mouseY; i++) {
    pixels[i] = new Pixel();
    pixels[i].display();
  }
  //Create a new pixel every time mouse wheel is scrolled
}
function Pixel() {
  this.x = random(0, width);
  this.y = random(0, height);

  this.display = function () {
    let c = color(imgAdult.get(this.x, this.y));
    stroke(c);
    noFill();
    rect(this.x, this.y, 4, 6);
  };
  //Parameters/Properties for each new pixel created
}

function mousePressed() {
  Loop();

}


