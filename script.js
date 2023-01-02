console.log("alive and well");
let navbar = document.getElementById("navbar");
let battery = navigator.getBattery();
let performance = window.performance;

setInterval(function() {
    let date = new Date();
    let heure = date.getHours();
    let minutes = date.getMinutes();
    let jour = date.getDate();
    let mois = date.getMonth() + 1;
    let annee = date.getFullYear();
    navbar.innerHTML = heure + "h" + minutes + " | " + jour + "/" + mois + "/" + annee;

    battery.then(function(battery) {
      let batteryLevel = battery.level;
      let batteryCharging = battery.charging ? "⚡" : "";

      navbar.innerHTML += " | Battery: " + Math.round(batteryLevel * 100) + "% (" + batteryCharging + ")";
    });
  }, 1000);
