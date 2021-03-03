
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
const range1 = document.getElementById("range1");
const range2 = document.getElementById("range2");
const range3 = document.getElementById("range3");
const range4 = document.getElementById("range4");
const range5 = document.getElementById("range5");

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

const disabled = function () {
    loop1.disabled = true;
    loop1s.disabled = true;
    loop2.disabled = true;
    loop2s.disabled = true;
    loop3.disabled = true;
    loop3s.disabled = true;
    loop4.disabled = true;
    loop4s.disabled = true;
    loop5.disabled = true;
    loop5s.disabled = true;
    stay1.disabled = true;
    stay2.disabled = true;
    stay3.disabled = true;
    stay4.disabled = true;
    stay5.disabled = true;
}

const anable = function () {
    loop1.disabled = false;
    loop1s.disabled = false;
    loop2.disabled = false;
    loop2s.disabled = false;
    loop3.disabled = false;
    loop3s.disabled = false;
    loop4.disabled = false;
    loop4s.disabled = false;
    loop5.disabled = false;
    loop5s.disabled = false;
    stay1.disabled = false;
    stay2.disabled = false;
    stay3.disabled = false;
    stay4.disabled = false;
    stay5.disabled = false;
}

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

const bgm1 = function(target) {
  if( ! audio1.paused || stay1.checked || ( loop1.checked && loop1s.checked ) || (!( loop1.checked || loop1s.checked ) && target.getAttribute('id') == 'looper_content_replay_stay1' ) ) {
    audio1.pause();
    if( stay1.checked ) {
      loop1.disabled = true;
      loop1s.disabled = true;
    } else {
      loop1.disabled = false;
      loop1s.disabled = false;
    }
  } else {
    loop1.disabled = false;
    loop1s.disabled = false;
    audio1.play();
  }
}

const bgm2 = function(target) {
  if( ! audio2.paused || stay2.checked || ( loop2.checked && loop2s.checked ) || (!( loop2.checked || loop2s.checked ) && target.getAttribute('id') == 'looper_content_replay_stay2' ) ) {
    audio2.pause();
    if( stay2.checked ) {
      loop2.disabled = true;
      loop2s.disabled = true;
    } else {
      loop2.disabled = false;
      loop2s.disabled = false;
    }
  } else {
    audio2.play();
    loop2.disabled = false;
    loop2s.disabled = false;
  }
}

const bgm3 = function(target) {
  if( ! audio3.paused || stay3.checked || ( loop3.checked && loop3s.checked ) || (!( loop3.checked || loop3s.checked ) && target.getAttribute('id') == 'looper_content_replay_stay3' ) ) {
    audio3.pause();
    if( stay3.checked ) {
      loop3.disabled = true;
      loop3s.disabled = true;
    } else {
      loop3.disabled = false;
      loop3s.disabled = false;
    }
  } else {
    audio3.play();
    loop3.disabled = false;
    loop3s.disabled = false;
  }
}
const bgm4 = function(target) {
  if( ! audio4.paused || stay4.checked || ( loop4.checked && loop4s.checked ) || (!( loop4.checked || loop4s.checked ) && target.getAttribute('id') == 'looper_content_replay_stay4' ) ) {
    audio4.pause();
    if( stay4.checked ) {
      loop4.disabled = true;
      loop4s.disabled = true;
    } else {
      loop4.disabled = false;
      loop4s.disabled = false;      
    }
  } else {
    audio4.play();
    loop4.disabled = false;
    loop4s.disabled = false;
  }
}

const bgm5 = function(target) {
  if( ! audio5.paused || stay5.checked || ( loop5.checked && loop5s.checked ) || (!( loop5.checked || loop5s.checked ) && target.getAttribute('id') == 'looper_content_replay_stay5' ) ) {
    audio5.pause();
    if( stay5.checked ) {
      loop5.disabled = true;
      loop5s.disabled = true;
    } else {
      loop5.disabled = false;
      loop5s.disabled = false;
    }
  } else {
    audio5.play();
    loop5.disabled = false;
    loop5s.disabled = false;
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
    anable();
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
    disabled();
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
    anable();
  } else {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    allstop();
    disabled();
  }
}

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
