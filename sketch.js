var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player,form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var b1Img,b2Img,g1Img,g2Img,ob;
var ground;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  b1Img = loadImage("images/boy1.jpg");
  b2Img = loadImage("images/boy2.jpg");
  g1Img = loadImage("images/girl1.jpg");
  g2Img = loadImage("images/girl2.jpg");
  ob = loadImage("images/obstacle.png")
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  ground=createSprite(500,810,width,10);
}

function draw() {
  background(back_img);
  if (gameState === 1) {
    clear();
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
  if (playerCount === 2) {
    game.update(1);
  }
}