function setup() {
  // intialize canvas
  CANVAS_WIDTH = 600
  CANVAS_HEIGHT = 400
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
  
  // set triangle dimensions
  TRIANGLE_WIDTH = CANVAS_WIDTH / 3
  TRIANGLE_HEIGHT = CANVAS_HEIGHT / 5
}

function draw() {
  background(220)
  // code for triangle tesselation goes here
  
for (let i = 0; i < 5; i++){
  y1 = i * TRIANGLE_HEIGHT
  x1 = 200
  
  y2 = y1 + TRIANGLE_HEIGHT
  x2 = x1

  y3 = y1 + TRIANGLE_HEIGHT
  x3 = x1 + TRIANGLE_WIDTH

  triangle (x1,y1,x2,y2,x3,y3)
  fill("lime")
  }
}
