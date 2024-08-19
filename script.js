const timer = document.getElementById("stopwatch");
let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;
let timerInterval;

function startTimer() {
  if (stoptime) {
    stoptime = false;
    timerCycle();
  }
}

function stopTimer() {
  if (!stoptime) {
    stoptime = true;
    clearTimeout(timerInterval);
  }
}

function timerCycle() {
  if (!stoptime) {
    sec++;

    if (sec === 60) {
      min++;
      sec = 0;
    }
    if (min === 60) {
      hr++;
      min = 0;
      sec = 0;
    }

    let displaySec = sec < 10 ? "0" + sec : sec;
    let displayMin = min < 10 ? "0" + min : min;
    let displayHr = hr < 10 ? "0" + hr : hr;

    timer.innerHTML = displayHr + ":" + displayMin + ":" + displaySec;

    timerInterval = setTimeout(timerCycle, 1000);
  }
}

function resetTimer() {
  stoptime = true;
  clearTimeout(timerInterval);
  hr = 0;
  min = 0;
  sec = 0;
  timer.innerHTML = "00:00:00";
}
