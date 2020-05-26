var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var h3 = document.querySelector("h3");

color1.addEventListener("change", changeColorBackground);
color2.addEventListener("change", changeColorBackground);

function changeColorBackground() {
    console.log(color1.value);
    console.log(color2.value);
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    h3.textContent = body.style.background + ";";
}