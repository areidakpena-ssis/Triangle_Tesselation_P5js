function setup() {
  // intialize canvas
  CANVAS_WIDTH = 600
  CANVAS_HEIGHT = 400
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT) 
  
  // set triangle dimensions
  TRIANGLE_WIDTH = CANVAS_WIDTH / 3
  TRIANGLE_HEIGHT = CANVAS_HEIGHT / 5
  
  fill(0, 0, 255)
}

function draw() {
  background(220)
  
  // code for triangle tesselation goes here
  for ( var i =0; i < 5; i++){
    triangle(2*TRIANGLE_WIDTH,i*TRIANGLE_HEIGHT, 2*TRIANGLE_WIDTH,(i+1)*TRIANGLE_HEIGHT, 3*TRIANGLE_WIDTH,(i+1)*TRIANGLE_HEIGHT)  
  }
  
}
