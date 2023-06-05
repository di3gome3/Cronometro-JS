const min = document.getElementById("minutos");
const sec = document.getElementById("segundos");
const mil = document.getElementById("milesimos");
const start = document.getElementById("startBTN");
const pause = document.getElementById("pauseBTN");
const resume = document.getElementById("resumeBTN");
const reset = document.getElementById("resetBTN");
const save = document.getElementById('saveBTN')
const res = document.getElementById('res')

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
resume.addEventListener("click", resumeTimer);
reset.addEventListener('click', resetTimer);
save.addEventListener('click', saveTime)

function startTimer() {
  interval = setInterval(() => {
   if  (!isPaused) {
      miliseconds += 10;

      if (miliseconds === 1000) {
        seconds++;
        miliseconds = 0;
      }

      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }

      min.textContent = formatTime(minutes);
      sec.textContent = formatTime(seconds);
      mil.textContent = formatMiliseconds(miliseconds);
    }
  }, 10);

  start.style.display = "none";
  pause.style.display = "block";
}

function pauseTimer() {
  isPaused = true;
  pause.style.display = "none";
  resume.style.display = "block";
}

function resumeTimer() {
  isPaused = false;
  resume.style.display = "none";
  pause.style.display = "block";
}

function resetTimer() {
  isPaused = false;
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  miliseconds = 0;

  min.textContent = '00'
  sec.textContent = '00'
  mil.textContent = '000'

  resume.style.display = 'none'
  pause.style.display = 'none'
  start.style.display = 'block'
  res.style.display = 'none'
}


function saveTime(){
  res.style.display = 'block'
  res.textContent = formatTime(minutes) + ' : ' + formatTime(seconds) + ' : ' + formatMiliseconds(miliseconds)

}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function formatMiliseconds(time) {
  return time < 100 ? "0" + time : time;
}
