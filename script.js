/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed=speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += this.speed;
    console.log('ok: ' + this.left);
  }
  this.moveLeft=function(){
    this.left-=this.speed;
    console.log('Ok'+ this.left);
  }

}
//
var hero = new Hero('5628.png_1200.png', 20, 100, 100,100);
var flag=true;
function moveright(){
  if(hero.left < window.innerWidth - hero.size && flag==true){
    hero.moveRight();
    document.getElementById('game').innerHTML = hero.getHeroElement();
    if (hero.left==1400) {
      flag=false;
    }
  }
  else if (hero.left>=window.innerWidth-hero.size) {
    setTimeout(moveLeft1, 200);}
   setTimeout(moveright, 200);
}
function moveLeft1() {
  if(hero.left > 10 && flag==false){
    hero.moveLeft();
    document.getElementById('game').innerHTML = hero.getHeroElement();
     if (hero.left==0){
       flag=true;
     }
  }
   setTimeout(moveLeft1, 200);

}
moveright();
