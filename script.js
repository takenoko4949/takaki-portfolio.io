
let go = function(e) {
   document.getElementById("front").style.backgroundImage = 'url("img/france-3814569_1920.jpg")';
   document.getElementById("work").textContent = "gallary"
   document.getElementById("profile").textContent = "profile"
   document.getElementById("go").textContent = ""
   document.getElementById("text0").textContent = ""
   document.getElementById("work").setAttribute('href', 'work.html');
   document.getElementById("profile").setAttribute('href', 'profile.html');
}

document.getElementById("go").addEventListener('click', go);
document.getElementById("text0").addEventListener('click', go);
document.getElementById("go").addEventListener('scroll', go);
document.getElementById("text0").addEventListener('scroll', go);