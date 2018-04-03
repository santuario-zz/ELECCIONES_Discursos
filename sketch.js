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
 * Test: https://santuario.github.io/ELECCIONES_Discursos/
 * Add: https://www.online-utility.org/text/analyzer.jsp
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
var anayaSongs = ["amigo", "soñamos", "soluciones", "compartir", "generación", "reunidos", "oportunidades", "propuesta"];
var meadeSongs = ["creo", "avanzar", "ganar", "futuro", "familia", "educación"];
var lopezSongs = ["desarrollo", "ciudad", "libre", "juárez", "económico", "precios", "industria", "estados", "bienestar", "muro"];
var zavalaSongs = ["conformemos", "confío", "valores", "libertad", "alegría", "dignidad", "esperanza"];
var allSongs = ["méxico", "nuestro", "campaña", "fuerza", "país", "construir", "jóvenes", "corrupción", "gente", "impunidad"];

var allSongsCount = 0;
var anayaCount = 0;
var meadeCount = 0;
var lopezCount = 0;
var zavalaCount = 0;


//Images
var avatarImages = ["Anaya_AvatarWatercolor_MASTER_W.png", "Lopez_AvatarWatercolor_MASTER_W.png", "Meade_AvatarWatercolor_MASTER_W.png", "Zavala_AvatarWatercolor_MASTER_W.png"];
var img = [];
//Text
var txt = [];
var counts = {};
var keys = [];
var files = ['Ricardo_Anaya.txt', 'Andres_Manuel_Lopez_Obrador.txt', 'Jose_Antonio_Meade.txt', 'Margarita_Zavala.txt'];
var allWords = [];

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

  //Text
  for (var i = 0; i < files.length; i++) {
    txt[i] = loadStrings('assets/data/' + files[i]);
  }

  for (var i = 0; i < avatarImages.length; i++) {
    img[i] = loadImage('assets/images/' + avatarImages[i]);
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);



}


function setup() {

  createCanvas(displayWidth, displayHeight)
  initialize();

}

function draw() {
  background(255);

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
  initializeText();
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
  fill(50);
  textFont(geoSmallFont);
  textSize(14);
  text("anaya vs. meade vs. obrador vs. zavala", 10, 10);
  text("anaya  +  meade  +  obrador  +  zavala", 10, 34);

  stroke(220);

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
  fill(255);

  //var correctionXS = (windowWidth / 2) - (backgroundImage.width / 2);
  //var correctionYS = (windowHeight / 2) - (backgroundImage.height / 2);
  noStroke();

  //fill(0, 83, 148, 150);
  var correctionX = abs(((windowWidth / 4) - (windowWidth / 5)) / 2);
  var correctionY = abs(((windowHeight / 4) - (windowHeight / 5)) / 2);
  var posX = windowWidth - (windowWidth / 5) - correctionX;
  rect(0, 0, windowWidth, (windowHeight / 4));
  image(img[0], posX, 0 * (windowHeight / 4) + correctionY, (windowHeight / 5), (windowHeight / 5));


  //fill(0, 164, 92, 150);
  rect(0, 1 * (windowHeight / 4), windowWidth, (windowHeight / 4));
  image(img[2], posX, 1 * (windowHeight / 4) + correctionY, (windowHeight / 5), (windowHeight / 5));

  //fill(96, 12, 19, 150);
  rect(0, 2 * (windowHeight / 4), windowWidth, (windowHeight / 4));
  image(img[1], posX, 2 * (windowHeight / 4) + correctionY, (windowHeight / 5), (windowHeight / 5));

  //fill(83, 53, 100, 150);
  rect(0, 3 * (windowHeight / 4), windowWidth, (windowHeight / 4));
  image(img[3], posX, 3 * (windowHeight / 4) + correctionY, (windowHeight / 5), (windowHeight / 5));





  fill(50);
  textAlign(CENTER, CENTER);
  textFont(geoSmallFont);


  textSize(48);
  //textSize(sizeFont);


  if (frameCount % waitWordTime == 0) {
    anayaCount++;
    meadeCount++;
    lopezCount++;
    zavalaCount++;
  }


  if (anayaCount >= anayaSongs.length) {
    anayaCount = 0;
  }

  if (meadeCount >= meadeSongs.length) {
    meadeCount = 0;
  }

  if (lopezCount >= lopezSongs.length) {
    lopezCount = 0;
  }

  if (zavalaCount >= zavalaSongs.length) {
    zavalaCount = 0;
  }







  //Anaya
  text(anayaSongs[anayaCount], (windowWidth / 2), (1 * windowHeight / 8));
  //Meade
  text(meadeSongs[meadeCount], (windowWidth / 2), (3 * windowHeight / 8));
  //Obrador
  text(lopezSongs[lopezCount], (windowWidth / 2), (5 * windowHeight / 8));
  //Zavala
  text(zavalaSongs[zavalaCount], (windowWidth / 2), (7 * windowHeight / 8));

  stroke(50);
  line(10, 28, 230, 28);
}


function drawStatusPLUS() {
  //background(28, 36, 76);
  stroke(50);
  line(10, 52, 230, 52);

  fill(50);
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
    allSongsCount++;
  }


  if (allSongsCount >= allSongs.length) {
    allSongsCount = 0;
  }
  fill(50);
  //print(calle13ResidenteSongsCount);
  text(allSongs[allSongsCount], (windowWidth / 2), (windowHeight / 2));



}



/*
 *****************************************
 *****************************************
 * TEXT METHODS
 *****************************************
 *****************************************
 */

function initializeText() {


  for (var i = 0; i < txt.length; i++) {
    allWords[i] = txt[i].join(" ");
  }

  //print(allWords[0]);


  //var tokens = allWords[0].split(/\W+/);// English
  var tokens = allWords[0].split(" "); // Using First text
  //print(tokens.length);
  for (var i = 0; i < tokens.length; i++) {
    var word = tokens[i].toLowerCase();
    if (counts[word] === undefined) {
      counts[word] = {
        tf: 1,
        df: 1
      };
      keys.push(word);
    } else {
      counts[word].tf = counts[word].tf + 1;
    }
  }


  var otherCounts = [];
  for (var j = 1; j < allWords.length; j++) {
    var tmpCounts = {};
    var tokens = allWords[j].split(" ");
    for (var k = 0; k < tokens.length; k++) {
      var w = tokens[k].toLowerCase();
      if (tmpCounts[w] === undefined) {
        tmpCounts[w] = true;
      }
    }
    otherCounts.push(tmpCounts);
  }


  for (var i = 0; i < keys.length; i++) {
    var word = keys[i];
    for (var j = 0; j < otherCounts.length; j++) {
      var tmpCounts = otherCounts[j];
      if (tmpCounts[word]) {
        counts[word].df++;
      }

    }

  }


  for (var i = 0; i < keys.length; i++) {
    var word = keys[i];


    var wordObj = counts[word];
    wordObj.tfidf = wordObj.tf * log(files.length / wordObj.df);


  }






  keys.sort(compare);


  function compare(a, b) {

    var countA = counts[a].tfidf;
    var countB = counts[b].tfidf;
    return countB - countA;
  }


  for (var i = 0; i < keys.length; i++) {
    var tmpkey = keys[i];
    print(tmpkey + " " + counts[tmpkey].tfidf);
  }


}



function drawText() {


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