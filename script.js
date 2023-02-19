console.log("alive and well");
const lock = document.querySelector('#lock');
let navbar = document.getElementById("navbar");
let battery = navigator.getBattery();
let performance = window.performance;

setInterval(function() {
    let date = new Date();
    let heure = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = "0".concat(minutes);
    }
    let jour = date.getDate();
    let mois = date.getMonth() + 1;
    if (mois < 10) {
      mois = "0".concat(mois);
    }
    let annee = date.getFullYear();
    navbar.innerHTML = heure + "h" + minutes + " | " + jour + "/" + mois + "/" + annee;

    battery.then(function(battery) {
      let batteryLevel = battery.level;
      let batteryCharging = battery.charging ? "⚡" : "";

      navbar.innerHTML += " | Battery: " + Math.round(batteryLevel * 100) + "% (" + batteryCharging + ")";
    });
  }, 1000);

lock.addEventListener("click", function() {
  const newDiv = document.createElement("div");
  newDiv.style.position = "absolute";
  newDiv.style.width = "99%";
  newDiv.style.top = "0%";
  newDiv.style.color = "white";
  newDiv.style.zIndex = "99";
  newDiv.style.opacity = "85%";
  newDiv.style.display = "flex";
  newDiv.style.alignItems = "center";
  newDiv.style.justifyContent = "center";
  newDiv.style.background = "linear-gradient(to left top, grey, black)";
  document.body.append(newDiv);

  var x=0;
  var interval = setInterval(function() {
    x++;
    let StrX = x.toString();
    newDiv.style.height = StrX.concat('%');
    if(x === 100){
        clearInterval(interval);
        const divTime = document.createElement("div");
        divTime.style.color = "white";
        divTime.style.position = "absolute";
        divTime.style.fontSize = "50px";
        divTime.style.fontWeight = "bold";
        divTime.style.fontFamily = "system-ui";

        const spanTime = document.createElement("span");
        divTime.appendChild(spanTime);
        newDiv.appendChild(divTime);

        var intervalTime = setInterval(function() {
            spanTime.innerHTML = "";
            let date = new Date();
            let heure = date.getHours();
            let minutes = date.getMinutes();
            if (minutes < 10) {
              minutes = "0".concat(minutes);
            }
            let secondes = date.getSeconds();
            if (secondes < 10) {
              secondes = "0".concat(secondes);
            }
            let txtTime = document.createTextNode(heure + ":" + minutes + ":" + secondes);
            spanTime.appendChild(txtTime);
            const body = document.querySelector('body');
            body.addEventListener("click", function() {
              clearInterval(intervalTime);
              var intervalUnlock = setInterval(function() {
                x--;
                let StrX = x.toString();
                newDiv.style.height = StrX.concat('%');
                if(x === 0){
                    clearInterval(intervalUnlock);
                    newDiv.remove();
                }
              }, 15);
            });
        }, 1000);
    }
  }, 15);

});
