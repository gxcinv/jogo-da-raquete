//variaveis da bolinha
let xBola = 300;
let yBola = 200;
let dIametro = 20;
let raio = dIametro/2;
//variaveis da velocidade
let velocidadeXBola = 7;
let velocidadeYBola = 7;

//variaveis da raquete
let xRaquete = 10;
let yRaquete = 150;
let wRaquete = 10;
let hRaquete = 90;

//variaveis oponente
let xRaqIN = 580;
let yRaqIN = 150;
let wRaqIN = 10;
let hRaqIn = 90;
let vEloy ;

//placar do jogo
let myPoints = 0;
let pontosIn = 0;

//sons do jogo
let ponto;
let raquetada;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop ();
}

function draw() {
  background(0);
  rEinicio ();
  Bolota ();
  Velo ();
  Verifica();
  raqIN ();
  rect (xRaquete, yRaquete, wRaquete, hRaquete);
  Movimentar ();
  verificaColisao ();
  verificaColi ();
  velocidadeop();
  pLacar ();
  mEu ();

}
//funções 
function Bolota (){
  circle(xBola, yBola,dIametro);
  }
function Velo (){  
  xBola += velocidadeXBola;
  yBola += velocidadeYBola;
}
function raqIN (){
  rect( xRaqIN, yRaqIN, wRaqIN,hRaqIn );
}
function Verifica(){
  if (xBola + raio > width ||
     xBola - raio < 0){ 
   velocidadeXBola*= -1;
  } 
  if (yBola + raio > height ||
     yBola - raio < 0){ 
   velocidadeYBola*= -1;
  }
} 
function Movimentar (){
 if (keyIsDown(UP_ARROW)){
   yRaquete -= 10;
 }
  if (keyIsDown(DOWN_ARROW)){
   yRaquete += 10;
  }   
}
function verificaColisao (){
   if (xBola - raio < xRaquete + wRaquete && yBola - raio < yRaquete + hRaquete && yBola + raio > yRaquete ){
     velocidadeXBola *= -1 ;
     raquetada.play ();
   } 
   
      
}
function verificaColi (){
   if (xBola + raio >= xRaqIN + wRaqIN && yBola - raio < yRaqIN + hRaqIn && yBola + raio > yRaqIN ){
     velocidadeXBola *= -1 ;
     raquetada.play ();
   } 
  
}
function velocidadeop (){
  vEloy = yBola - yRaqIN - (hRaqIn/2);
  yRaqIN += vEloy - 30 
}
function pLacar () {
  stroke (255)
  textSize (20);
  textAlign (CENTER);
  fill (color (127, 255, 212))
  rect (170, 0, 60, 40)
  fill (255)
  text (myPoints, 200, 26);
  fill (color (127, 255, 212))
  rect (370, 0, 60, 40)
  fill (255)
  text (pontosIn, 400, 26)
  if (xBola < xRaquete ) {
    pontosIn = pontosIn +1
    ponto.play ();
  }
}
function mEu (){
  if (xBola > 585) {
    myPoints +=1
    ponto.play ();
  }
}
function rEinicio (){
      if (xBola < xRaquete || 
     xBola > xRaqIN) {
    xBola = 300 
    yBola = 200
  }
}

