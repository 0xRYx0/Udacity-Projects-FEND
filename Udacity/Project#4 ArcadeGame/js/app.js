

/* ~~~~~~~~ Enemy Class Detailes ~~~~~~~~ */
/* Enemies are things to be avoided by the player while the game */
var canvas = document.createElement('canvas');
var Enemy = function(orginalXPos, orginalYPos, width, height, speed) {
    this.orginalXPos  = orginalXPos;
    this.orginalYPos = orginalYPos;
    this.currentXPos = orginalXPos;              // will be used to move the enemies.
    this.currentYPos = orginalYPos;              // will be used to move the enemies.
    this.width = width;
    this.height = height;
    this.originalSpeed = speed;
    this.currentSpeed = speed;
    this.sprite = 'images/enemy-bug.png';
};

/* Update the enemy's position, required method for game
   Parameter: dt, a time delta between ticks */
Enemy.prototype.update = function(dt) {
    /* You should multiply any movement by the dt parameter which
     * will ensure the game runs at the same speed for all computers */
    this.currentXPos += this.currentSpeed * dt ;

    /* Reset the enemies when they reach the right end of the frame */
    if(this.currentXPos > 470){
      this.currentYPos = this.orginalYPos;
      this.currentXPos = this.orginalXPos - 70;
   }
};

/* Draw the enemy on the screen, required method for game */
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.currentXPos, this.currentYPos);
};

/* ~~~~~~~~ Player Class Detailes ~~~~~~~~ */
var Player = function(orginalXPos, orginalYPos) {
   /* Main attributes for player instance */
    this.orginalXPos = orginalXPos;
    this.orginalYPos = orginalYPos;
    this.currentXPos = orginalXPos;              // will be used to move the player.
    this.currentYPos = orginalYPos;              // will be used to move the player.
    this.sprite = 'images/char-boy.png';
    this.lives = 3;
    /* Boolean to control the player during the game :)*/
    this.reachedWater = false;
};

Player.prototype.update = function() {
   this.checkCollisions(allEnemies);
};

Player.prototype.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.currentXPos, this.currentYPos);
};

/* This listens for key presses and sends the keys to your
 * Player.handleInput() method. You don't need to modify this */
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        13: 'enter',
        32: 'space',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});


Player.prototype.handleInput = function(keyInput) {
    /* Keep in mind that:
    *    The default values for the following variables is (false).
    *    The player's sprite size is (83*70).
    *    We need to check if when the player sprite passed the boarders.
    */
    /* Check if the player has not reached the water yet */
    if (!this.reachedWater) {
        /* Check if the player has lives */
        if (!(this.lives <= 0)) {
            /* This to identify which input has been inserted by the user and re-act upon that after checking if there is a collision happened.
               Note: no need to check the top boarder since the player will win once reaches the water */
            if (keyInput === 'up') {
               this.currentYPos -= 83;
               if(this.currentYPos < 73){
                  this.reachedWater = true;
               }
            }
            /* This to check if the player crosses bottom boarder */
            if ((keyInput === 'down') && ((this.currentYPos + 83) < 465)) {
               this.currentYPos += 83;
            }
            /* This to check if the player crosses left boarder */
            if ((keyInput === 'left') && (this.currentXPos > 10)) {
                this.currentXPos -= 100;
            }
            if ((keyInput === 'right') && (this.currentXPos < 400)) {
                this.currentXPos += 100;
            }
        }

    }

   /* Additional feature to unpause the game when Space key is pressed */
   if ((keyInput === 'space') && (pauseGame)) {
       pauseGame = false;
       allEnemies.forEach(function(enemy) {
            enemy.currentSpeed = enemy.originalSpeed;
       });
   /* Additional feature to pause the game when Space key is pressed */
   } else if (keyInput === 'space') {
       pauseGame = true;
       allEnemies.forEach(function(enemy) {
            enemy.currentSpeed = 0;
       });
   }

   /* additional feature to reset the game anytime */
   if (keyInput === 'enter'){

      /* Reset the player */
      this.currentYPos = this.orginalYPos;
      this.currentXPos = this.orginalXPos;
      this.lives = 3;
      this.reachedWater = false;
      gamePaused = false;

      /* Reset the enemies */
      allEnemies.forEach(function(enemy) {
          enemy.currentYPos = enemy.orginalYPos;
          enemy.currentXPos = enemy.orginalXPos - 70;
          enemy.currentSpeed = enemy.originalSpeed;
      });
   }
};

Player.prototype.checkCollisions = function(allEnemies) {
    /* Check is there was a collision between the player and the enemies*/
    if (!this.reachedWater) {
        for (var i = 0; i < allEnemies.length; i++) {
           /* Note: player sprite's size (83*70) & enemy sprite's size (100*70) */
            var playerLeftEdge = this.currentXPos,
                playerRightEdge = this.currentXPos + 70,
                playerTopEdge = this.currentYPos,
                playerBottomEdge = this.currentYPos + 70,
                enemyLeftEdge = allEnemies[i].currentXPos + 10,
                enemyRightEdge = allEnemies[i].currentXPos + 80,
                enemyTopEdge = allEnemies[i].currentYPos,
                enemyBottomEdge = allEnemies[i].currentYPos + 50;

            if ((playerLeftEdge <= enemyRightEdge) && (playerRightEdge >= enemyLeftEdge)
               && (playerTopEdge <= enemyBottomEdge) && (playerBottomEdge >= enemyTopEdge)) {
                this.lives--;
                this.currentYPos = this.orginalYPos;
                this.currentXPos = this.orginalXPos;
            }
        }
    }
};

var allEnemies = [];
var firstEnemy = new Enemy(15, 60, 80, 62, 200);
var secondEnemy = new Enemy(30, 145, 80, 62, 250);
var thirdEnemy = new Enemy(50, 230, 80, 62, 350);

allEnemies.push(firstEnemy);
allEnemies.push(secondEnemy);
allEnemies.push(thirdEnemy);

var player = new Player(200, 405);
var pauseGame = false;
