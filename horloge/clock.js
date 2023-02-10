function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
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
      countDownDate.setMinutes(countDownDate.getMinutes() + parseInt(document.getElementById("timer").value));
      timer = setInterval(function() {
          var now = new Date().getTime();
          var distance = countDownDate - now;
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
          if (distance < 0) {
              clearInterval(timer);
              document.getElementById("timer").innerHTML = "Expiré";
          }
      }, 1000);
  }
  
  function stopTimer() {
      clearInterval(timer);
  }