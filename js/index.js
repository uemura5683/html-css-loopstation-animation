
const audio1 = document.querySelector("#audio1") 
    , audio2 = document.querySelector("#audio2")
    , audio3 = document.querySelector("#audio3")
    , audio4 = document.querySelector("#audio4")
    , audio5 = document.querySelector("#audio5")
    , loop1  = document.querySelector("#looper_content_loop_num1")
    , loop1s = document.querySelector("#looper_content_loop_num1_sec")
    , loop2  = document.querySelector("#looper_content_loop_num2")
    , loop2s = document.querySelector("#looper_content_loop_num2_sec")
    , loop3  = document.querySelector("#looper_content_loop_num3")
    , loop3s = document.querySelector("#looper_content_loop_num3_sec")
    , loop4  = document.querySelector("#looper_content_loop_num4")
    , loop4s = document.querySelector("#looper_content_loop_num4_sec")
    , loop5  = document.querySelector("#looper_content_loop_num5")
    , loop5s = document.querySelector("#looper_content_loop_num5_sec")
    , stay1  = document.querySelector("#looper_content_replay_stay1")
    , stay2  = document.querySelector("#looper_content_replay_stay2")
    , stay3  = document.querySelector("#looper_content_replay_stay3")
    , stay4  = document.querySelector("#looper_content_replay_stay4")
    , stay5  = document.querySelector("#looper_content_replay_stay5")
    , range1 = document.querySelector("#range1")
    , range2 = document.querySelector("#range2")
    , range3 = document.querySelector("#range3")
    , range4 = document.querySelector("#range4")
    , range5 = document.querySelector("#range5")
    , allsatrstop = document.querySelector("#looper_effector_btn_all")
    , satrstop = document.querySelector("#looper_effector_btn_start")
    , text = document.querySelector(".looper_content_inner_monitor_inner_txt");
var initial;


const textreset = function(time, texts) {
  initial = window.setTimeout(function () {
      text.innerHTML = texts;
  }, time);
}

const chdckedfalse = function(target) {
  setTimeout(function () {
      document.querySelector(target).checked = false;
  }, 100);  
}


const switchon = function() {
  text.innerHTML = 'WAIT 20second';
  textreset(20000, 'PLAYING');
}

const bgmtempoup = function (target) {
  if( audio1.playbackRate < 3 && audio2.playbackRate < 3  && audio2.playbackRate < 3  && audio2.playbackRate < 3  && audio2.playbackRate < 3 ) {
    audio1.playbackRate += 0.1;
    audio2.playbackRate += 0.1;
    audio3.playbackRate += 0.1;
    audio4.playbackRate += 0.1;
    audio5.playbackRate += 0.1;
    valume = audio1.playbackRate;
    text.innerHTML = 'SPEED UP ' + valume.toFixed(1);
    clearTimeout( initial );
    chdckedfalse('#looper_effector_btn_tap');
    textreset(5000, null);
  }
}

const bgmtereset = function(target) {
  audio1.playbackRate = 1;
  audio2.playbackRate = 1;
  audio3.playbackRate = 1;
  audio4.playbackRate = 1;
  audio5.playbackRate = 1;
  text.innerHTML = 'SPEED RESET ' + 1;
  clearTimeout( initial );
  chdckedfalse('#looper_effector_btn_undo');
  textreset(5000, null);
}

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

const allstartcheck = function() {
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

const allstopckeck = function() {
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

const bgmstop = function(target) {
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

const bgmallplay = function () {
    audio1.play();
    audio2.play();
    audio3.play();
    audio4.play();
    audio5.play();
    allstartcheck();
    stayRlease();
    anable();
    text.innerHTML = 'BGM START';
    clearTimeout( initial );
    textreset(5000, null);
}
const bgmallstop = function () {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    allstopckeck();
    disabled();
    text.innerHTML = 'BGM STOP';
    clearTimeout( initial );
    textreset(5000, null);
}

const bgmstartstop = function() {
  if( allsatrstop.checked ) {
    allsatrstop.checked = false;
  }
  if( audio1.paused && audio2.paused && audio3.paused && audio4.paused && audio5.paused  ) {
    bgmallplay();
  } else {
    bgmallstop();
    audio1.currentTime = 0;
    audio2.currentTime = 0;
    audio3.currentTime = 0;
    audio4.currentTime = 0;
    audio5.currentTime = 0;
  }
}

const bgmall = function() {
  if( satrstop.checked ) {
    satrstop.checked = false;
  }
  if( audio1.paused && audio2.paused && audio3.paused && audio4.paused && audio5.paused  ) {
    bgmallplay();
  } else {
    bgmallstop();
  }
}

range1.addEventListener('change', (e) => {
    audio1.volume = range1.value / 10;
    text.innerHTML = 'VALUME ' + range1.value;
    clearTimeout( initial );
    textreset(5000, null);
});

range2.addEventListener('change', (e) => {
    audio2.volume = range2.value / 10;
    text.innerHTML = 'VALUME ' + range2.value;
    clearTimeout( initial );
    textreset(5000, null);
});

range3.addEventListener('change', (e) => {
    audio3.volume = range3.value / 10;
    text.innerHTML = 'VALUME ' + range3.value;
    clearTimeout( initial );
    textreset(5000, null);
});

range4.addEventListener('change', (e) => {
    audio4.volume = range4.value / 10;
    text.innerHTML = 'VALUME ' + range4.value;
    clearTimeout( initial );
    textreset(5000, null);
});

range5.addEventListener('change', (e) => {
    audio5.volume = range5.value / 10;
    text.innerHTML = 'VALUME ' + range5.value;
    clearTimeout( initial );
    textreset(5000, null);
});
