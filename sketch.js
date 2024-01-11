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
  for(var i = 0; i < 6; i++)
    triangle(TRIANGLE_WIDTH*2, i*TRIANGLE_HEIGHT, 3*TRIANGLE_WIDTH, i*TRIANGLE_HEIGHT, 3*TRIANGLE_WIDTH, (i+1)*TRIANGLE_HEIGHT)
    fill(255,0,0)
}
