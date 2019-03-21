document.addEventListener("DOMContentLoaded", () => {

    // info box variables
    let colorLeft_INPUT = document.querySelector('.input__colorLeft');
    let colorRight_INPUT = document.querySelector('.input__colorRight');

    let colorLeft_HEX = document.querySelector('.info__hexLeft');
    let colorRight_HEX = document.querySelector('.info__hexRight');
    let colorLeft_RGB = document.querySelector('.info__rgbLeft');
    let colorRight_RGB = document.querySelector('.info__rgbRight');

    // buttons variables
    const randomChangeBoth = document.querySelector('.randomChangeBoth')
	const randomChangeLeft = document.querySelector('.randomChangeLeft')
    const randomChangeRight = document.querySelector('.randomChangeRight')
    
    // gradient variable
    let gradient = document.querySelector('.gradient')
    






    // // initial Gradient
	startGradient();

	function startGradient() {
		randomChangeColorLeft();
		randomChangeColorRight();
        setGradient();
    }

    // set Gradient css
	function setGradient() {
		gradient.style.background = 
		"linear-gradient(to right, " 
		+ colorLeft_INPUT.value 
		+ ", " 
		+ colorRight_INPUT.value 
		+ ")";

        colorLeft_HEX.innerHTML = colorLeft_INPUT.value;
        colorRight_HEX.innerHTML = colorRight_INPUT.value;
        colorLeft_RGB.innerHTML = hex2rgb(colorLeft_INPUT.value);
        colorRight_RGB.innerHTML = hex2rgb(colorRight_INPUT.value);
	}
    
    	// change color
	function randomColor() {
		let result = [];
		for(i=1; i<=6; i++) {
			let randomHexNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)];
			result.push(randomHexNum);
		}
		return "#" + result.join('');
	}

	function randomChangeColorLeft() {
		colorLeft_INPUT.value = randomColor();
		setGradient();
	}

	function randomChangeColorRight() {
		colorRight_INPUT.value = randomColor();
		setGradient();
    }
    

    // hex2rgb function
    function hex2rgb( colour ) {
        var r,g,b;
        if ( colour.charAt(0) == '#' ) {
            colour = colour.substr(1);
        }
        if ( colour.length == 3 ) {
            colour = colour.substr(0,1) + colour.substr(0,1) + colour.substr(1,2) + colour.substr(1,2) + colour.substr(2,3) + colour.substr(2,3);
        }
        r = colour.charAt(0) + '' + colour.charAt(1);
        g = colour.charAt(2) + '' + colour.charAt(3);
        b = colour.charAt(4) + '' + colour.charAt(5);
        r = parseInt( r,16 );
        g = parseInt( g,16 );
        b = parseInt( b ,16);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }


	// touch button
	colorLeft_INPUT.addEventListener("input", setGradient);

	colorRight_INPUT.addEventListener("input", setGradient);

	randomChangeBoth.addEventListener("click", () => {
		randomChangeColorLeft();
		randomChangeColorRight();
	});
	randomChangeLeft.addEventListener("click", randomChangeColorLeft);
    randomChangeRight.addEventListener("click", randomChangeColorRight);
    
    
})