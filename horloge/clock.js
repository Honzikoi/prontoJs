// ------------------ Horloge ------------------//
var hours = 0;
var minutes = 0;
var seconds = 0;

function updateTime() {
  hours = document.getElementById('hours').value;
  minutes = document.getElementById('minutes').value;
  seconds = document.getElementById('seconds').value;
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
    alert("Veuillez saisir une heure valide.");
    return;
  }
  document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
}

function startTime() {
    var today = new Date();
    var h = hours;
    var m = minutes;
    var s = seconds;
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
    
  }
  interval = setInterval(function() {
    if(seconds == 60) {
      minutes++;
      seconds = 0;
    }
    if(minutes == 60) {
      hours++;
      minutes = 0;
    }
    seconds++;
  }, 1000);

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // ajoute un zéro devant les nombres inférieurs à 10
  return i;
}
  // ------------------ Chronomètre ------------------//
  var chronometer = document.getElementById('chronometer');
var startBtn = document.getElementById('startBtn');
var pauseBtn = document.getElementById('pauseBtn');
var resetBtn = document.getElementById('resetBtn');
var chronoStartTime;
var elapsedTime = 0;
var timerInterval;

function startChronometer() {
  chronoStartTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function() {
    elapsedTime = Date.now() - chronoStartTime;
    chronometer.innerHTML = formatTime(elapsedTime);
  }, 10);
}

function pauseChronometer() {
  clearInterval(timerInterval);
}

function resetChronometer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  chronometer.innerHTML = formatTime(elapsedTime);
}

function formatTime(milliseconds) {
  var date = new Date(milliseconds);
  var minutes = date.getMinutes().toString().padStart(2, '0');
  var seconds = date.getSeconds().toString().padStart(2, '0');
  var milliseconds = Math.floor(date.getMilliseconds() / 10).toString().padStart(2, '0');
  return minutes + ':' + seconds + ':' + milliseconds;
}

startBtn.addEventListener('click', startChronometer);
pauseBtn.addEventListener('click', pauseChronometer);
resetBtn.addEventListener('click', resetChronometer);


 //------------------ Timer ------------------// 
 
var timer;
var countDownDate;

function startTimer() {
    countDownDate = new Date();
    countDownDate.setMinutes(countDownDate.getMinutes() + parseInt(document.getElementById("timerInput").value));
    timer = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("timer").innerHTML = minutes + " minutes " + seconds + " secondes";
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "Expiré";
        }
    }, 1000);
}
  
  function stopTimer() {
      clearInterval(timer);
  }