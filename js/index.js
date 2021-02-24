
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
    audio4.pause();
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
const bgmstartstop = function() {
  if( audio1.paused && audio2.paused && audio3.paused && audio4.paused && audio5.paused  ) {
    audio1.play();
    audio2.play();
    audio3.play();
    audio4.play();
    audio5.play();
  } else {
    audio1.pause();
    audio1.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio4.pause();
    audio4.currentTime = 0;
    audio5.pause();
    audio5.currentTime = 0;
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

const range1 = document.getElementById("range1");
const range2 = document.getElementById("range2");
const range3 = document.getElementById("range3");
const range4 = document.getElementById("range4");
const range5 = document.getElementById("range5");

range1.addEventListener('change', (e) => {
    audio1.volume = range1.value / 10;
});
range2.addEventListener('change', (e) => {
    audio2.volume = range2.value / 10;
});
range3.addEventListener('change', (e) => {
    audio3.volume = range3.value / 10;
});
range4.addEventListener('change', (e) => {
    audio4.volume = range4.value / 10;
});
range5.addEventListener('change', (e) => {
    audio5.volume = range5.value / 10;
});

range5.addEventListener('ended', function() {
    audio1.pause();
    audio1.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio4.pause();
    audio4.currentTime = 0;
    audio5.pause();
    audio5.currentTime = 0;
});
