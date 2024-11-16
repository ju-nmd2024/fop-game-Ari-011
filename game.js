
  

/*
  THE CONCEPT OF THE VISUALS
 - a vampire
 - Graveyard
 - Moon
 - stars

 THE MECHANICS
 - Move the character while landing
 - implement gravity
 - end the game if crashing

  
 */

 
//This code was taken from the lecture example of flappy bird provided by the master students
 

let x = 0;
let y = 0;
let s = 0.6;
const speed = 5;
let velocityY = 0;
const gravity = 0.2;
let state = "start";
let gameTimer = 0;
let stars = [];
let characterX = 400;
let characterY = 200;

function setup(){
    createCanvas(700, 750);
}

for (let i = 0; i < 900; i++) {
    const star = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        alpha: Math.random(),
    };
    stars.push(star);
}

push();
function character(x, y, s) {
    angleMode(DEGREES);
    
  // back part of the hair
  push();
  fill(0, 0, 0);
  ellipse(x + 100 * s, y - 25 * s, 120 * s, 100 * s);
  pop();

  // wings or cape
  push();
  beginShape();
  fill(150, 0, 0);
  strokeWeight(3 * s);
  triangle(x + 100 * s, y + 60 * s, x - 80 * s, y + 80 * s, x - 60 * s, y + 155 * s);
  triangle(x + 100 * s, y + 60 * s, x - 60 * s, y + 155 * s, x - 30 * s, y + 220 * s);
  triangle(x + 100 * s, y + 60 * s, x - 30 * s, y + 220 * s, x + 40 * s, y + 260 * s);
  triangle(x + 100 * s, y + 60 * s, x + 40 * s, y + 260 * s, x + 150 * s, y + 260 * s);
  triangle(x + 100 * s, y + 60 * s, x + 230 * s, y + 220 * s, x + 150 * s, y + 260 * s);
  triangle(x + 100 * s, y + 60 * s, x + 270 * s, y + 155 * s, x + 230 * s, y + 220 * s);
  triangle(x + 100 * s, y + 60 * s, x + 290 * s, y + 80 * s, x + 270 * s, y + 155 * s);
  endShape();
  pop();

  // right foot
  push();
  fill(89, 48, 16);
  translate(x + 150 * s, y + 245 * s);
  rotate(55);
  ellipse(0, 0, 40 * s, 30 * s);
  pop();

  // legs
  push();
  fill(0, 0, 0);
  translate(x + 70 * s, y + 170 * s);
  rotate(15);
  rect(0, 0, 30 * s, 130 * s);
  pop();

  push();
  fill(0, 0, 0);
  translate(x + 100 * s, y + 140 * s);
  rotate(-15);
  rect(0, 0, 30 * s, 130 * s, 43 * s);
  pop();

  // left arm
  push();
  fill(0, 0, 0);
  translate(x + 28 * s, y + 75 * s);
  rotate(70);
  ellipse(0, 0, 30 * s, 120 * s);
  pop();

  // right arm
  push();
  fill(0, 0, 0);
  translate(x + 162 * s, y + 102 * s);
  rotate(-35);
  ellipse(0, 0, 30 * s, 120 * s);
  pop();

  // torso
  push();
  fill(0, 0, 0);
  rect(x + 70 * s, y + 50 * s, 60 * s, 135 * s);
  pop();

  // triangle on torso
  push();
  fill(255, 255, 255);
  triangle(x + 80 * s, y + 50 * s, x + 120 * s, y + 50 * s, x + 100 * s, y + 100 * s);
  pop();

  // neck
  push();
  fill(237, 207, 199);
  ellipse(x + 100 * s, y + 40 * s, 20 * s, 60 * s);
  pop();

  // hands
  push();
  fill(237, 207, 199);
  ellipse(x - 22 * s, y + 90 * s, 30 * s, 25 * s);
  ellipse(x + 190 * s, y + 142 * s, 30 * s, 25 * s);
  pop();

  // feet
  push();
  fill(89, 48, 16);
  translate(x + 50 * s, y + 300 * s);
  rotate(15);
  ellipse(0, 0, 40 * s, 30 * s);
  pop();

  // ears
  push();
  fill(237, 207, 199);
  translate(x + 50 * s, y + 10 * s);
  rotate(-30);
  ellipse(0, 0, 20 * s, 25 * s);
  pop();

  push();
  fill(237, 207, 199);
  translate(x + 150 * s, y + 10 * s);
  rotate(30);
  ellipse(0, 0, 20 * s, 25 * s);
  pop();

  // face base
  push();
  fill(237, 207, 199);
  ellipse(x + 100 * s, y - 10 * s, 100 * s, 110 * s);
  pop();

  // hair
  push();
  fill(0, 0, 0);
  triangle(x + 54 * s, y + 9 * s, x + 48 * s, y - 10 * s, x + 55 * s, y - 40 * s);
  triangle(x + 146 * s, y + 9 * s, x + 152 * s, y - 10 * s, x + 145 * s, y - 40 * s);
  rect(x + 50 * s, y - 62 * s, 100 * s, 55 * s, 20 * s);
  ellipse(x + 100 * s, y - 66 * s, 30 * s, 10 * s);
  fill(237, 207, 199);
  noStroke();
  ellipse(x + 100 * s, y - 15 * s, 4 * s, 30 * s);
  ellipse(x + 70 * s, y - 15 * s, 4 * s, 30 * s);
  ellipse(x + 130 * s, y - 11 * s, 5 * s, 40 * s);
  pop();

  // eyebrows
  push();
  noFill();
  beginShape();
  vertex(x + 70 * s, y - 20 * s);
  bezierVertex(x + 75 * s, y - 25 * s, x + 90 * s, y - 20 * s, x + 90 * s, y - 20 * s);
  endShape();
  beginShape();
  vertex(x + 112 * s, y - 20 * s);
  bezierVertex(x + 117 * s, y - 20 * s, x + 120 * s, y - 25 * s, x + 132 * s, y - 20 * s);
  endShape();
  pop();

  // eyes
  push();
  fill(255, 255, 255);
  ellipse(x + 80 * s, y + 4 * s, 20 * s, 20 * s);
  ellipse(x + 122 * s, y + 4 * s, 20 * s, 20 * s);
  fill(255, 121, 0);
  ellipse(x + 80 * s, y + 2 * s, 10 * s, 10 * s);
  ellipse(x + 120 * s, y + 2 * s, 10 * s, 10 * s);
  pop();

  // mouth
  push();
  noFill();
  beginShape();
  vertex(x + 85 * s, y + 26 * s);
  bezierVertex(x + 85 * s, y + 25 * s, x + 95 * s, y + 35 * s, x + 111 * s, y + 30 * s);
  endShape();
  pop();

  // earring
  push();
  fill(0, 0, 0);
  rect(x + 50 * s, y + 27 * s, 4 * s, 19 * s);
  rect(x + 44 * s, y + 32 * s, 16 * s, 3 * s);
  pop();
}
pop();

function startScreen(){
    background(0, 0, 50);
    fill(255);
    ellipse(350,100,122);
    textSize(32);
    textAlign(CENTER);
    fill(255);
    text("Press SPACE to Start", width / 2, height / 2);    
}

function ground(){
    rect(0, 550, 700);
}

function gameScreen(){
    background(0, 0, 0);
    textSize(16);
    fill(255);
    text("Land safely!!", 250, 100);

    push(); 
    for (let star of stars){
        
        fill(255,255,255, Math.abs(Math.sin(star.alpha))*255);
        noStroke();
        fill(255);
        ellipse(star.x, star.y, 2);
        star.alpha = star.alpha + 0.02;
    }
    pop();
    ground();
    character(characterX,characterY, s);
}
  
function resultScreenGameOver(){
    background(255, 10, 10);
    textSize(42);
    fill(255);
    text("Game Over", width / 2, height / 2);
}
 
function resultScreenWin(){
    background(0, 255, 0);
    textSize(42); 
    fill(0,0,0);
    text("YOU LANDED SUCCESSFULLY", width / 2, height / 2);
}


function draw() {

    if (state === "start") {
        startScreen();
        if (keyIsDown(32)) { // spaceBar
            state = "game";
            gameTimer = 0;
            y = 50; // restart position of character
            velocityY = 0;
        }
    } else if (state === "game") {
        
        gameScreen();
        
        if (characterY > y + 500 && velocityY > 5) {
            state = resultScreenGameOver();
        } 
        if (characterY > y + 500 && velocityY < 5) {
            state = resultScreenWin();
        } 

        // Gravity 
        velocityY += gravity; 
        characterY += velocityY; 
        console.log(velocityY);

        // Controlling the character with 
        if (keyIsDown(37)) { // Left
            characterX -= speed;
        } 
        if (keyIsDown(39)) { // Right
            characterX += speed;
        }
        if (keyIsDown(38)) { // Up
            velocityY -= 0.5; // 
        }
       // character(characterX,characterY, s);
    } else if (state === "result") { 
        resultScreenGameOver();


        if (keyIsDown(32)) { // SpaceBar
            state = "start";
        }
    } 
}
