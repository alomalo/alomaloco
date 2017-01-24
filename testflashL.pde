int rectX, rectY;
int rectSize;


void setup() {
  size(window.innerWidth, window.innerHeight);
  background(255);
  noStroke();
  smooth();
  textAlign(RIGHT);
  rectMode(CENTER);
  //rectX = width;
  //rectY = height;
  rectSize = 200;
}

void draw() {
 
 background(mouseX, mouseY, random(255));
 
  if (rectHover(window.innerWidth, window.innerHeight, rectSize, rectSize/2) == 1) {
    background(255);
 } else {
   background(255*mouseX/width, 255*mouseY/height, random(255));
 }

 
 noFill();
 rect(window.innerWidth - rectSize / 2, window.innerHeight - rectSize / 4, rectSize, rectSize/2);
 
} 

int rectHover(int x, int y, int w, int h) {
 int wextants = (int)(x-w/2);
 int hextants = (int)(y-h/2);
 if (mouseX >= wextants && mouseX <= width && 
     mouseY >= hextants && mouseY <= height) {
     return 1;
   } else {
     return 0;
   }
 }
