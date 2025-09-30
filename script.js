let startTime = 0;
let updatedTime = 0;
let difference = 0;
let tInterval;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Start Button
startBtn.addEventListener("click", function() {
  if (!running) {
    startTime = new Date().getTime() - difference;
    tInterval = setInterval(getShowTime, 1000);
    running = true;
  }
});

// Stop Button
stopBtn.addEventListener("click", function() {
  if (running) {
    clearInterval(tInterval);
    running = false;
  }
});

// Reset Button
resetBtn.addEventListener("click", function() {
  clearInterval(tInterval);
  running = false;
  difference = 0;
  display.innerHTML = "00:00:00";
});

// Function to Calculate Time
function getShowTime() {
  updatedTime = new Date().getTime() - startTime;
  difference = updatedTime;

  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  display.innerHTML = hours + ":" + minutes + ":" + seconds;
}

// Theme Changer
function setTheme(theme) {
  document.body.className = theme;
}
