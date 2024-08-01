document.documentElement.style.setProperty("--animate-duration", "2s");
var isChecked = document.querySelector('input[type="checkbox"]').checked;
var labelText = document.getElementById("label");

function lightMode() {
    var element = document.body;
    element.classList.toggle("lightmode"); 
    if (labelText.innerHTML === "Dark") {
        labelText.innerHTML = "Light";
      } else {
        labelText.innerHTML = "Dark";
      }
    
 }

