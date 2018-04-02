function Item(_x, _y, _r, _lineID) {
  /*
   *****************************************
   *****************************************
   * VARIABLES
   *****************************************
   *****************************************
   */

  this.position = createVector(_x, _y);
  this.r = _r;
  this.lineID = _lineID;
  this.origposition = createVector(_x, _y);
  this.velocity = createVector(0, 0);
  this.holding = false;
  this.drawing = true;
  this.targetPosition = createVector(0, 0);
  this.discriminator = 1.5;
  this.currentColor = color(255, 255, 255, 255); //blanco
  this.colors = [];

  this.colors.push(color(255, 255, 255, 255)); //blanco
  this.colors.push(color(220, 0, 4, 200));
  this.colors.push(color(108, 59, 25, 200));
  this.colors.push(color(254, 216, 47, 200));
  this.colors.push(color(175, 43, 15, 200));
  this.colors.push(color(170, 48, 75, 200));


  this.currentColor = this.colors[int(this.lineID)];


  /*
  if(this.lineID == "1"){
    this.currentColor = color(220, 0, 4, 200); //Rojo
  }*/

  /*
   *****************************************
   *****************************************
   * LYFE CYCLE METHODS
   *****************************************
   *****************************************
   */

  this.inside = function(_mx, _my) {
    var a = this.position.x - _mx;
    var b = this.position.y - _my;
    return sqrt(pow(a, 2) + pow(b, 2)) < this.r / 2;
  }

  this.display = function() {
    noStroke();
    fill(this.currentColor);

    if (this.drawing) {
      ellipse(this.position.x, this.position.y, this.r * 2, this.r * 2);
    }


  }


  this.update = function() {
    // print(this.targetPosition.x + ", " + this.targetPosition.y);

    this.position.add(this.velocity);
    this.velocity.mult(0.51);


    if (this.position.x < this.origposition.x - this.discriminator || this.position.x > this.origposition.x + this.discriminator || this.position.y < this.origposition.y - this.discriminator || this.position.y > this.origposition.y + this.discriminator) {
      var normal = p5.Vector.sub(createVector(this.targetPosition.x, this.targetPosition.y), this.position);
      normal.normalize();
      this.velocity.add(normal);
    } else {
      this.position.set(this.origposition.x, this.origposition.y);
    }

  }


  this.checkBoundaryCollision = function() {
    
    var delta = 50;

    if (this.position.x > windowWidth + delta - this.r) {
      this.position.x = windowWidth + delta - this.r;
      this.velocity.x *= -1;
    } else if (this.position.x < this.r - delta) {
      this.position.x = this.r - delta;
      this.velocity.x *= -1;
    } else if (this.position.y > windowHeight + delta - this.r) {
      this.position.y = windowHeight + delta - this.r;
      this.velocity.y *= -1;
    } else if (this.position.y < this.r - delta) {
      this.position.y = this.r - delta;
      this.velocity.y *= -1;
    } else {}
  }

  this.checkCollision = function(_other) {
    bVect = p5.Vector.sub(_other.position, this.position);
    if (bVect.mag() < this.r + _other.r) {
      bVect.normalize();
      bVect.mult(2);
      this.velocity.sub(bVect);
    }
  }



}