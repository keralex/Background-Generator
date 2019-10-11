var css = document.querySelector("h3");
var color_1 = document.querySelector(".color_1");
var color_2 = document.querySelector(".color_2");
var body = document.getElementById("gradient");


// funtions
function setGradient() {
    body.style.background = "linear-gradient(to right,"
        + color_1.value
        + ","
        + color_2.value
        + ")";

    css.textContent=body.style.background+";";  
}
color_1.addEventListener("input", setGradient);
color_2.addEventListener("input", setGradient)  ;
