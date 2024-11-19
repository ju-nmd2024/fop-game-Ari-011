/*The following code is based on the resources below:
Lim, K .(Dec 15, 2021). *p5.js overview*
p5.js .(n.d). *Reference* from: https://p5js.org/reference/
Video lectures form Garrit Schaap: 
Schaap, G. (n.d). *Foundations of Programming Video Lectures* from: https://pixelkind.github.io/foundationsofprogramming/
*/

let x = 0;
let y = 0;
let s = 0.4;
const speed = 2;
let velocityY = 0;
const gravity = 0.2;
let state = "start";
// variable to define arrays
let stars = [];
let characterX = 350;
let characterY = 50;
let canvasW = 700;
let canvasH = 750;

//properties of the stone
let stone = { 
    x: 350, 
    y: 600, 
    w: 100, 
    h: 200 
}; // landing stone

/* The mechanics of this game consist on a character that is free falling 
    it has to land carefully at the stone that says "Still Alive", if he lands on 
    the other stones or if it lands with a velocity > 5 then is Game Over */


function setup() {
    createCanvas(canvasW, canvasH);
    for (let i = 0; i < 900; i++) {
        stars.push({
            x: Math.floor(Math.random() * canvasW),
            y: Math.floor(Math.random() * canvasH),
            //opacity of the stars
            alpha: Math.random(),
        });
    }
}

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

function startScreen() {
    background(0, 0, 50);
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text("Press SPACE to START", canvasW / 2, canvasH / 2 - 50);

    fill(255);
    rect(275, 400, 150, 50, 50); 
    fill(0);
    textSize(20);
    text("Rules", 350, 430);
}

function rulesScreen() {
    background(0);
    fill(255);
    textSize(25);
    textAlign(CENTER);
    //text ("", x, y);
    text("Land the Vampire in the stone 'Still Alive'", canvasW / 2, 150);
    text("To move the character:", canvasW / 2, 200);
    text("SPACE BAR to prevent free fall", canvasW / 2, 250);
    text("Left arrow to move left", canvasW / 2, 300);
    text("Right arrow to move right", canvasW / 2, 350);
    text("Land on the ellipse with a speed below 5 to win!", canvasW / 2, 400);

    fill(255);
    rect(275, 520, 150, 50, 50); 
    fill(0);
    textSize(20);
    text("Main Menu", 350, 550);
}

function gameScreen() {
    background(0);
    fill(255);
    textSize(16);
    text("Land safely!!", 350, 300);


    //loop 
    for (let star of stars) {
        //returns the absolut value of a number --- sinus
        fill(255, 255, 255, Math.abs(Math.sin(star.alpha)) * 255);
        noStroke();
        //variables of the star for creating the actual star
        ellipse(star.x, star.y, 2);
        //function
        star.alpha += 0.02;
    }



    //grass
    fill(0,100,0);
    rect(0,570,canvasW,canvasH);
    
    // Floor of the background
    fill(100);
    rect(0, 600, canvasW, canvasH - 550);

    //Moon
    fill(255);
    ellipse(320,60,100);

    // Stone for the correct landing
    noStroke();
    fill(100);
    ellipse(stone.x, stone.y, stone.w, stone.h);
    fill(0);
    text("Still", 350, 540);
    text("Alive", 350, 570);

    //other stones
    noStroke();
    fill(100);
    ellipse(100, 600, 100, 200);
    ellipse(600, 600, 100, 200);
    fill(0);
    text("R.I.P",100,540);
    text("R.I.P",600,540);

    //grass
    fill(0,100,0);
    rect(0,590,canvasW,canvasH);

    // Vampire
    stroke(0);
    character(characterX, characterY, s);
    
}

function resultScreenGameOver() {
    background(200, 10, 10);
    textSize(42);
    fill(255);
    textAlign(CENTER);
    text("Game Over", canvasW / 2, canvasH / 2 - 50);

    fill(255);
    rect(100, 520, 150, 50, 50); // Retry - Button
    rect(450, 520, 150, 50, 50); // Main Menu - Button
    fill(0);
    textSize(20);
    text("Retry", 175, 550);
    text("Main Menu", 525, 550);
}

function resultScreenWin() {
    background(0, 200, 0);
    textSize(42);
    fill(255);
    textAlign(CENTER);
    text("YOU LANDED SUCCESSFULLY", canvasW / 2, canvasH / 2 - 50);

    fill(255);
    rect(275, 520, 150, 50); // Main Menu - Button
    fill(0);
    textSize(20);
    text("Main Menu", 350, 550);
}

function resetGame() {
    state = "game";
    characterX = canvasW / 2;
    characterY = 50;
    velocityY = 0;
}

function draw() {
    if (state === "start") {
        startScreen();
        if (keyIsDown(32)) {
            resetGame();
        }
    } else if (state === "game") {
        gameScreen();

        //Gravity

        velocityY += gravity;
        characterY += velocityY;

        if (keyIsDown(37)) {
            characterX -= speed;
        }
        if (keyIsDown(39)) {
            characterX += speed;
        }
        if (keyIsDown(32)) {
            velocityY -= gravity * 2.5 ;
        }

        if (characterY >= 520 ){
           if (velocityY < 5 && characterX > 260 && characterX < 370){
            state = "win";
          } else {
           state = "lose"; 
          }
            }

    } else if (state === "lose") {
        resultScreenGameOver();
    } else if (state === "win") {
        resultScreenWin();
    } else if (state === "rules") {
        rulesScreen();
    }
}

function mousePressed() {
    if (state === "start" && mouseX > 275 && mouseX < 425 && mouseY > 400 && mouseY < 450) {
        state = "rules";
    } else if (state === "rules" && mouseX > 275 && mouseX < 425 && mouseY > 520 && mouseY < 570) {
        state = "start";
    } else if (state === "lose") {
        if (mouseX > 100 && mouseX < 250 && mouseY > 520 && mouseY < 570) {
            resetGame();
        } else if (mouseX > 450 && mouseX < 600 && mouseY > 520 && mouseY < 570) {
            state = "start";
        }
    } else if (state === "win" && mouseX > 275 && mouseX < 425 && mouseY > 520 && mouseY < 570) {
        state = "start";
    }
}
