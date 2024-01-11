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
  
  
  // code for dark blue
  fill(0, 0, 255)
  for ( var i =0; i < 5; i++){
    triangle(2*TRIANGLE_WIDTH,i*TRIANGLE_HEIGHT, 2*TRIANGLE_WIDTH,(i+1)*TRIANGLE_HEIGHT, 3*TRIANGLE_WIDTH,(i+1)*TRIANGLE_HEIGHT)  
  }
  
  // magenta triangles
  fill(255, 0, 255)
  for(var i = 0; i < 5; i++){
   triangle(0*TRIANGLE_WIDTH, i*TRIANGLE_HEIGHT, 1*TRIANGLE_WIDTH, i*TRIANGLE_HEIGHT,1*TRIANGLE_WIDTH, (i+1) * TRIANGLE_HEIGHT)
 }
            
  // code for cyan triangles
  fill(0,255,255)
  for (var i = 0; i < 5; i++)
  triangle(0, i*TRIANGLE_HEIGHT, 0, (i+1)*TRIANGLE_HEIGHT, TRIANGLE_WIDTH, (i+1) * TRIANGLE_HEIGHT)

  //Code for yellow triangles
  fill(255, 255, 0)
  for (let i = 0; i < CANVAS_HEIGHT/TRIANGLE_HEIGHT; i++) {
    triangle(TRIANGLE_WIDTH, TRIANGLE_HEIGHT*i, 2*TRIANGLE_WIDTH, TRIANGLE_HEIGHT*i, TRIANGLE_WIDTH*2, TRIANGLE_HEIGHT*(i+1));
  }

}

