let gif;
let x1; 
let y1; 
let x2; 
let y2; 
let w; 
let h;


function preload() {
  gif = loadImage('data/image-morph.gif');
}

function setup(){
    createCanvas(windowWidth,windowHeight);

    gif.setFrame(0);
    
}

// Move your mouse up and down over canvas to see the GIF
// frames animate
function draw() {
    // createCanvas(windowWidth,windowHeight);

//   gif.pause();
  image(gif, 0, 0);
  // Get the highest frame number which is the number of frames - 1
  let maxFrame = gif.numFrames() - 1;
  // Set the current frame that is mapped to be relative to mouse position
  let frameNumber = floor(map(mouseY, 0, height, maxFrame, 0));
  gif.setFrame(frameNumber);

//   print(frameNumber);

    x1 = random(width); 
    y1 = random(height); 

    x3 = random(width);
    y3 = random(height);

    x2 = round(x1 + random(-10, 10)); 
    y2 = round(y1 + random(-10, 10)); 

    x4 = round(x3 + random(-10, 10)); 
    y4 = round(y3 + random(-10, 10));
    
    w = width; 
    h = 10; 

    if(frameNumber>=30 && y1>=194 && y1<=267){
        set(x2, y2, get(x1, y1, w, h)); 
        set(x4, y4, get(x3, y3, w, h)); 
    } 
    else {
    }

    // if(){
            
    // } else{

    // }
}
// function draw(){
//     vid.x1 = random(width); 
//     y1 = random(height); 

//     x2 = round(x1 + random(-10, 10)); 
//     y2 = round(y1 + random(-10, 10)); 
    
//     w = width/2; 
//     h = 10; 

//     if(y2>=100 && y2<=300){
//         set(x1, y2, get(x1, y1, w, h)); 
//     }

// }

