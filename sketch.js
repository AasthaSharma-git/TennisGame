var canvas;
var backgroundImage;
var bgImg, courtImg;
var database , gameState;
var form, player;
var playerCount;
var allPlayers,players, player1, player2, ball;
var serve;

function preload() {
  backgroundImage = loadImage("./assets/form.jpg");
  player_left1= loadImage("./assets/left1.png");
  player_left2= loadImage("./assets/left2.png");
  player_left3= loadImage("./assets/left3.png");
  player_right1= loadImage("./assets/right2.png");
  player_right2= loadImage("./assets/right3.png");
  courtImg= loadImage("./assets/court.jpg");
  ballImg= loadImage("./assets/ball.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  //bgImg = backgroundImage;
}

function draw() {
  background(backgroundImage);
  if(playerCount===2){
    game.update(1);
  }
  if(gameState===1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}