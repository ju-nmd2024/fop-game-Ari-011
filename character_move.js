
let x = 100;
let y = 100;
let speedx = 1;
let speedy = 1;
const w = 100;
const h = 100;

createCanvas(x+1000,y+500);

function setUp(){
createCanvas(x+1000,y+500);
background(90,20,20);   
frameRate(); 
}

angleMode(DEGREES);

function character(x,y){

//back part of the hair
push();
fill(0,0,0);
ellipse(x+100,y-25,w+20,h);
pop();

//wings or cape idk
push();
beginShape();
fill(150,0,0);
strokeWeight(3);
//left 1
triangle(x+100,y+60,x-80,y+80,x-60,y+155);
//left2
triangle(x+100,y+60,x-60,y+155,x-30,y+220);
//left3
triangle(x+100,y+60,x-30,y+220,x+40,y+260);
//center
triangle(x+100,y+60,x+40,y+260,x+150,y+260);
//right3
triangle(x+100,y+60,x+230,y+220,x+150,y+260);
//right2
triangle(x+100,y+60,x+270,y+155,x+230,y+220);
//right1
triangle(x+100,y+60,x+290,y+80,x+270,y+155);

endShape();
pop();

//right foot
push();
fill(89,48,16);
translate(x+150,y+245);
rotate(55);
ellipse(0,0,w-60,h-70);
pop();
endShape();

//legs

beginShape();
push();
fill(0,0,0);
translate(x+70,y+170);
//left leg
rotate(15);
rect(0,0,w-70,h+30);
pop();
//right leg
push();
fill(0,0,0);
translate(x+100,y+140);
rotate(-15);
rect(0,0,w-70,h+30,43);
pop();
endShape();

push();
fill(0,0,0);
translate(x+28,y+75);
rotate(70);
//left arm
ellipse(0,0,w-70,h+20);
pop();

push();
fill(0,0,0);
rotate();
//right arm
translate(x+162,y+102);
rotate(-35);
ellipse(0,0,w-70,h+20);
pop();

//torso
push();
fill(0,0,0);
rect(x+70,y+50,w-40,h+35);
pop();

push();
fill(255,255,255);
triangle(x+80,y+50,x+120,y+50,x+100,y+100);
pop();

//neck
push();
fill(237,207,199);
ellipse(x+100,y+40,w-80,h-40);
pop();

//hands
push();
fill(237,207,199);
//left hand
ellipse(x-22,y+90,w-70,h-75);
//right hand
ellipse(x+190,y+142,w-70,h-75);
pop();

//feet
beginShape();
//left foot
push();
fill(89,48,16);
translate(x+50,y+300);
rotate(15);
ellipse(0,0,w-60,h-70);
pop();

//left ear
push();
fill(237,207,199);
translate(x+50,y+10);
rotate(-30);
ellipse(0,0,w-80, h-75);
pop();

//right ear
push();
fill(237,207,199);
translate(x+150,y+10);
rotate(30);
ellipse(0,0,w-80, h-75);
pop();

//Face base
push();
fill(237,207,199);
ellipse(x+100,y-10,w, h+10);
pop();

//hair
push();
fill(0,0,0);
triangle(x+54,y+9,x+48,y-10,x+55,y-40);
triangle(x+146,y+9,x+152,y-10,x+145,y-40);
rect(x+50,y-62,w,h-45,20);
ellipse(x+100,y-66,w-70,h-90);
noStroke();
fill(237,207,199);
//little spaces between the hair
ellipse(x+100,y-15,w-96,h-50);
ellipse(x+80,y-16,w-98,h-90);
ellipse(x+130,y-11,w-98,h-80);
ellipse(x+63,y-11,w-98,h-80);
ellipse(x+80,y-16,w-98,h-90);

pop();

noFill();
//eyebrows
//left eyebrow
beginShape();
vertex(x+70,y-20);
bezierVertex(x+75,y-25,x+90,y-20,x+90,y-20);
endShape();

//right eyebrow
beginShape();
vertex(x+112,y-20);

bezierVertex(x+117,y-20,x+120,y-25,x+132,y-20);
endShape();

//eyes

//left eye
push();
beginShape();
strokeWeight(0);
fill(255,255,255);
ellipse(x+80,y+4,w-80,h-80);
pop();
vertex(x+70,y);
noFill();
strokeWeight(2);
bezierVertex(x+75,y-10,x+88,y-5,x+90,y);
push();
fill(255,121,0);
ellipse(x+80,y+2,w-90,h-85);
pop();
endShape();

//white left eye
fill(255,255,255);
ellipse(x+78,y,w-95);

//right eye
push();
fill(255,255,255);
beginShape();
strokeWeight(0);
ellipse(x+122,y+4,w-80,h-80);
pop();
strokeWeight(2);
vertex(x+112,y);
noFill();
bezierVertex(x+117,y-10,x+132,y-5,x+132,y);
push();
fill(255,121,0);
ellipse(x+120,y+2,w-90,h-85);
pop();
endShape();

//white right eye
fill(255);
ellipse(x+119,y,w-95);

noFill();

//mouth
beginShape();
vertex(x+85,y+26);
bezierVertex(x+85,y+25,x+95,y+35,x+111,y+30);
triangle(x+85,y+26,x+89,y+28,x+87,y+32);
triangle(x+111,y+30,x+108,y+32,x+110,y+35);
endShape();

//earring
fill(0,0,0);
rect(x+50,y+27,w-98,h-80);
rect(x+44,y+32,w-85,h-97);

} 

character(100,100);

function draw (){
    background(90,20,20);
    character(x,y);

    x = x + speedx;
    if (x > 700 || x < 100){
        speedx = speedx * 0;
        speedy = speedy * 0;
    }

    y = y + speedy;
    if (y > 200 ){
        speedy = speedy * -1;
    }

    y = y + speedy;
    if (y < 100){
    speedy = speedy + 1;
    }


}