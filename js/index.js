
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
    audio1.volume = 0.5;
  }
}
const bgm2 = function() {

  if( ! audio2.paused ){
    audio2.pause();
  } else {
    audio2.play();
    audio2.volume = 0.5;
  }
}
const bgm3 = function() {

  if( ! audio3.paused ){
    audio3.pause();
  } else {
    audio3.play();
    audio3.volume = 0.5;
  }
}
const bgm4 = function() {

  if( ! audio4.paused ){
    audio4.pause();
  } else {
    audio4.play();
    audio4.volume = 0.5;
  }
}
const bgm5 = function() {
  if( ! audio5.paused ){
    audio5.pause();
  } else {
    audio5.play();
    audio5.volume = 1.0;
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

window.addEventListener('DOMContentLoaded', function(){

  audio1.addEventListener('loadeddata', (e)=> {
    audio1.muted = false;
    audio1.autoplay = true;
  });

  audio2.addEventListener('loadeddata', (e)=> {
    audio2.muted = false;
    audio2.autoplay = true;
  });

  audio3.addEventListener('loadeddata', (e)=> {
    audio3.muted = false;
    audio3.autoplay = true;
  });

  audio4.addEventListener('loadeddata', (e)=> {
    audio4.muted = false;
    audio4.autoplay = true;
  });

  audio5.addEventListener('loadeddata', (e)=> {
    audio5.muted = false;
    audio5.autoplay = true;
  });

});
