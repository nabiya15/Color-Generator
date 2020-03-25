var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColorBtn=document.getElementById("randomColor");

window.onload=function(){
	this.randomColor();
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	
	css.textContent = body.style.background + ";";
}

function randomColor(){
	rColor1=  "#"+Math.floor((Math.random() * (9999999-1000000+1)+1000000)).toString(16);
	rColor2=  "#"+Math.floor((Math.random() * (9999999-1000000+1)+1000000)).toString(16);
	
	body.style.background = "linear-gradient(to right, " + rColor1 + ", " + rColor2+ ")";
	css.textContent = body.style.background + ";";
	
	color1.value=rColor1;
	color2.value=rColor2
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomColorBtn.addEventListener("click",randomColor);