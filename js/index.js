
const audio1 = document.querySelector("#audio1"); 
const audio2 = document.querySelector("#audio2"); 
const audio3 = document.querySelector("#audio3"); 
const audio4 = document.querySelector("#audio4"); 
const audio5 = document.querySelector("#audio5"); 

const bgm1 = function() {
  if( ! audio1.paused ){
    audio1.pause();
  } else {
    audio1.play();
  }
}
const bgm2 = function() {
  if( ! audio2.paused ){
    audio2.pause();
  } else {
    audio2.play();
  }
}
const bgm3 = function() {
  if( ! audio3.paused ){
    audio3.pause();
  } else {
    audio3.play();
  }
}
const bgm4 = function() {
  if( ! audio4.paused ){
    audio4.paused();
  } else {
    audio4.play();
  }
}
const bgm5 = function() {
  if( ! audio5.paused ){
    audio5.pause();
  } else {
    audio5.play();
  }
}
const bgmall = function() {
  if( audio1.paused && audio2.paused && audio3.paused && audio4.paused && audio5.paused  ) {
    audio1.play();
    audio2.play();
    audio3.play();
    audio4.play();
    audio5.play();
  } else {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
  }
}