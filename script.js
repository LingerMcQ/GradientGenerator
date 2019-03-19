document.addEventListener("DOMContentLoaded", () => {


	var colorHexNumber = document.querySelector("h3");
	var color1 = document.querySelector(".color1");
	var color2 = document.querySelector(".color2");
	var randomChangeBoth = document.querySelector('.randomChangeBoth')
	var randomChangeLeft = document.querySelector('.randomChangeLeft')
	var randomChangeRight = document.querySelector('.randomChangeRight')
	var body = document.getElementById("gradient");

	startGradient();

	function startGradient() {
		randomChangeColorLeft();
		randomChangeColorRight();
		body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
	}

	function setGradient() {
		body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

		colorHexNumber.textContent = color1.value + "->" + color2.value ;
	}
	
	function randomColor() {
		let result = [];
		for(i=1; i<=6; i++) {
			let randomHexNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)];
			result.push(randomHexNum);
		}
		return "#" + result.join('');
	}

	function randomChangeColorLeft() {
		color1.value = randomColor();
		setGradient();
	}

	function randomChangeColorRight() {
		color2.value = randomColor();
		setGradient();
	}



	color1.addEventListener("input", setGradient);

	color2.addEventListener("input", setGradient);

	randomChangeBoth.addEventListener("click", () => {
		randomChangeColorLeft();
		randomChangeColorRight();
	});
	randomChangeLeft.addEventListener("click", randomChangeColorLeft);
	randomChangeRight.addEventListener("click", randomChangeColorRight);
})