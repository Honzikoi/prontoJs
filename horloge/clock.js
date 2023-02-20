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
  
  var second = 0;
  var minute = 0;
  var hour = 0;
  var interval;
  
  function startChrono() {
      interval = setInterval(function() {
          document.getElementById("chrono").innerHTML = hour + "h : " + minute + "m : " + second + "s";
          second++;
          if(second == 60) {
              minute++;
              second = 0;
          }
          if(minute == 60) {
              hour++;
              minute = 0;
          }
      }, 1000);
  }
  
  function stopChrono() {
      clearInterval(interval);
  }
  
 
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