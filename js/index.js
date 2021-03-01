
const audio1 = document.querySelector("#audio1"); 
const audio2 = document.querySelector("#audio2"); 
const audio3 = document.querySelector("#audio3"); 
const audio4 = document.querySelector("#audio4"); 
const audio5 = document.querySelector("#audio5"); 
const loop1  = document.querySelector("#looper_content_loop_num1");
const loop1s = document.querySelector("#looper_content_loop_num1_sec");
const loop2  = document.querySelector("#looper_content_loop_num2");
const loop2s = document.querySelector("#looper_content_loop_num2_sec");
const loop3  = document.querySelector("#looper_content_loop_num3");
const loop3s = document.querySelector("#looper_content_loop_num3_sec");
const loop4  = document.querySelector("#looper_content_loop_num4");
const loop4s = document.querySelector("#looper_content_loop_num4_sec");
const loop5  = document.querySelector("#looper_content_loop_num5");
const loop5s = document.querySelector("#looper_content_loop_num5_sec");
const stay1  = document.querySelector("#looper_content_replay_stay1");
const stay2  = document.querySelector("#looper_content_replay_stay2");
const stay3  = document.querySelector("#looper_content_replay_stay3");
const stay4  = document.querySelector("#looper_content_replay_stay4");
const stay5  = document.querySelector("#looper_content_replay_stay5");

/*
function pSpeed()
{
  audio1.playbackRate = 0.5;
}

//defaultPlaybackRateによる速度変更 ▼
function dSpeed()
{
  audio1.defaultPlaybackRate = 0.5;
}
*/
const stayRlease = function () {
    stay1.checked = false;
    stay2.checked = false;
    stay3.checked = false;
    stay4.checked = false;
    stay5.checked = false;
}

const allstart = function() {
    loop1.checked = true;
    loop1s.checked = false;
    loop2.checked = true;
    loop2s.checked = false;
    loop3.checked = true;
    loop3s.checked = false;
    loop4.checked = true;
    loop4s.checked = false;
    loop5.checked = true;
    loop5s.checked = false;
}

const allstop = function() {
    loop1.checked = true;
    loop1s.checked = true;
    loop2.checked = true;
    loop2s.checked = true;
    loop3.checked = true;
    loop3s.checked = true;
    loop4.checked = true;
    loop4s.checked = true;
    loop5.checked = true;
    loop5s.checked = true;
}

const bgm1 = function() {
  if( ! audio1.paused || stay1.checked ){
    audio1.pause();
  } else {
    audio1.play();
  }
}
const bgm2 = function() {
  if( ! audio2.paused || stay2.checked ){
    audio2.pause();
  } else {
    audio2.play();
  }
}
const bgm3 = function() {
  if( ! audio3.paused || stay3.checked ){
    audio3.pause();
  } else {
    audio3.play();
  }
}
const bgm4 = function() {
  if( ! audio4.paused || stay4.checked ){
    audio4.pause();
  } else {
    audio4.play();
  }
}
const bgm5 = function() {
  if( ! audio5.paused || stay5.checked ){
    audio5.pause();
  } else {
    audio5.play();
  }
}
const bgmstop = function() {
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
const bgmstartstop = function() {
  if( audio1.paused && audio2.paused && audio3.paused && audio4.paused && audio5.paused  ) {
    audio1.play();
    audio2.play();
    audio3.play();
    audio4.play();
    audio5.play();
    allstart();
    stayRlease();
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
    allstop();
  }
}
const bgmall = function() {
  if( audio1.paused && audio2.paused && audio3.paused && audio4.paused && audio5.paused  ) {
    audio1.play();
    audio2.play();
    audio3.play();
    audio4.play();
    audio5.play();
    allstart();
    stayRlease();
  } else {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    allstop();
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
