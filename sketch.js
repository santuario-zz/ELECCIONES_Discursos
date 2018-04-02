/*
 *
 * Elecciones 2018
 * Análisis de Discuros (April 2018)
 * 
 * Adrian Santuario
 *
 * Description: 
 * ¿Qué tan similares fueron los discuros de inicio de campaña? ¿Qué tan diferentes son?
 *
 * Source: https://www.animalpolitico.com/2018/03/discursos-candidatos-presidenciales/
 * Test: https://santuario.github.io/KLUSTERA_Residente/
 *
 */


/*
 *****************************************
 *****************************************
 * VARIABLES
 *****************************************
 *****************************************
 */


// Font
var geoMidFont
var geoSmallFont;
var sizeFont;

// Status
var STATUS;
var waitWordTime = 30;

// Data
var residenteSongs = ["tierra", "hermano"];
var calle13Songs = ["mundo", "universal"];
var calle13ResidenteSongs = ["podemos", "ser"];

var calle13ResidenteSongsCount = 0;
var calle13SongsCount = 0;
var residenteSongsCount = 0;


/*
 *****************************************
 *****************************************
 * LIFE CYCLE METHODS
 *****************************************
 *****************************************
 */

function preload() {


  // Fonts
  geoMidFont = loadFont('assets/fonts/Geogtq-Md.otf');
  geoSmallFont = loadFont('assets/fonts/Geogtq-Ul.otf');



}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);



}


function setup() {

  createCanvas(displayWidth, displayHeight)
  initialize();

}

function draw() {

  drawStatus();
  drawHeader();

}



/*
 *****************************************
 *****************************************
 * INITIALIZE METHODS
 *****************************************
 *****************************************
 */


function initialize() {
  initializeStatus();
  initializeHeader();
  setStatus("VS");

}


/*
 *****************************************
 *****************************************
 * HEADER METHODS
 *****************************************
 *****************************************
 */


function initializeHeader() {


}



function drawHeader() {
  fill(255);
  textAlign(LEFT, TOP);
  noStroke();
  //Title
  textFont(geoSmallFont);
  textSize(14);
  text("Anaya vs. Meade vs. Obrador vs. Zavala", 10, 10);
  text("Anaya  +  Meade  +  Obrador  +  Zavala", 10, 34);

  stroke(255);

  if (isInsideButtonVS(mouseX, mouseY)) { //VS
    line(10, 28, 230, 28);
  } else if (isInsideButtonPLUS(mouseX, mouseY)) { //+
    line(10, 52, 230, 52);

  }

}

function isInsideButtonVS(_x, _y) {
  var isInside = false;

  if (_x > 0 && _x < 236 && _y > 0 && _y < 40) {
    isInside = true;
  }

  return isInside;
}

function isInsideButtonPLUS(_x, _y) {
  var isInside = false;

  if (_x > 0 && _x < 236 && _y > 40 && _y < 80) {
    isInside = true;
  }

  return isInside;
}


/*
 *****************************************
 *****************************************
 * STATUS METHODS
 *****************************************
 *****************************************
 */


function initializeStatus() {

}


function drawStatus() {


  if (STATUS == "VS") {
    drawStatusVS();
  } else if (STATUS == "PLUS") {
    drawStatusPLUS();
  }

}

function setStatus(_status) {

  if (_status == "VS") {
    STATUS = "VS";

  } else if (_status == "PLUS") {
    STATUS = "PLUS";


  }

}

function drawStatusVS() {
  background(0, 83, 148);
  stroke(255);
  line(10, 28, 230, 28);
  //var correctionXS = (windowWidth / 2) - (backgroundImage.width / 2);
  //var correctionYS = (windowHeight / 2) - (backgroundImage.height / 2);
  noStroke();
  fill(0, 164, 92);
  rect(0, (windowHeight / 4), windowWidth, (windowHeight / 4));

  fill(96, 12, 19);
  rect(0, 2 * (windowHeight / 4), windowWidth, (windowHeight / 4));

  fill(83, 53, 100);
  rect(0, 3 * (windowHeight / 4), windowWidth, (windowHeight / 4));





  fill(255);
  textAlign(CENTER, CENTER);
  noStroke();
  textFont(geoSmallFont);


  textSize(48);
  //textSize(sizeFont);


  if (frameCount % waitWordTime == 0) {
    calle13SongsCount++;
    residenteSongsCount++;
  }


  if (calle13SongsCount >= calle13Songs.length) {
    calle13SongsCount = 0;
  }

  if (residenteSongsCount >= residenteSongs.length) {
    residenteSongsCount = 0;
  }





  //Anaya
  text(residenteSongs[residenteSongsCount], (windowWidth / 2), (1*windowHeight / 8));
  //Meade
  text(calle13Songs[calle13SongsCount], (windowWidth / 2), (3 * windowHeight / 8));
  //Obrador
  text(calle13Songs[calle13SongsCount], (windowWidth / 2), (5 * windowHeight / 8));
  //Zavala
  text(calle13Songs[calle13SongsCount], (windowWidth / 2), (7 * windowHeight / 8));


}


function drawStatusPLUS() {
  background(28, 36, 76);
  stroke(255);
  line(10, 52, 230, 52);

  fill(255);
  textAlign(CENTER, CENTER);
  noStroke();
  //Text
  textFont(geoSmallFont);
  textSize(48);
  //textSize(sizeFont);


  /*
  for (var i = 0; i < calle13ResidenteSongs.length; i++) {
    print(calle13Residente Songs[i]);
  }*/


  if (frameCount % waitWordTime == 0) {
    calle13ResidenteSongsCount++;
  }


  if (calle13ResidenteSongsCount >= calle13ResidenteSongs.length) {
    calle13ResidenteSongsCount = 0;
  }
  fill(255);
  //print(calle13ResidenteSongsCount);
  text(calle13ResidenteSongs[calle13ResidenteSongsCount], (windowWidth / 2), (windowHeight / 2));



}





/*
 *****************************************
 *****************************************
 * UI METHODS
 *****************************************
 *****************************************
 */



function mouseClicked() {
  // initializeItems();
  // print("MIAU");
  // print(((windowWidth / 2) - mouseX) + " :: " + mouseX + " , " + ((windowHeight / 2) - mouseY) + " :: " + mouseY);

  //print(((windowWidth / 2) - mouseX) + "," + ((windowHeight / 2) - mouseY));
  print(mouseX + ", " + mouseY)

  //print(progressMouseX);


  if (isInsideButtonVS(mouseX, mouseY)) { //VS
    setStatus("VS");
  } else if (isInsideButtonPLUS(mouseX, mouseY)) { //+
    setStatus("PLUS");

  }
}

function mousePressed() {
  _startReset = false;
  //fullscreen(true);
}

function mouseDragged() {
  _startReset = false;
}

function mouseReleased() {
  _startReset = true;
}



function keyPressed() {
  if (keyCode == 32) {
    // SPACE


  }



  return false;
}