
	var colors = generateRandomColors(6);
	var squares = document.querySelectorAll(".square");
	var pickedColor = pickColor();
	var colorDisplay = document.getElementById("colorDisplay");
	var messageDisplay = document.querySelector("#message");
	var h1 = document.querySelector("h1");
	var resetButton = document.querySelector("#resetGame");

	colorDisplay.textContent = pickedColor;

	resetButton.addEventListener("click", function() {
		//generate new colors
		colors = generateRandomColors(6);
		//pick new color from array
		pickedColor = pickColor();
		//change colorDisplay to match picked color
		colorDisplay.textContent = pickedColor;
		//change colors of squares
		for (var i = 0; i < squares.length; i++) {
			squares[i].style.background = colors[i];
		}
		//reset background to original bg color
		h1.style.background = "#232323";
	})

	for (var i = 0; i < squares.length; i++) {
		//add initial colors to squares
		squares[i].style.background = colors[i];

		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
				var clickedColor = this.style.background;
			//compare color to background
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				//set new colors button to read as play again
				resetButton.textContent = "Play Again?"
			} else {
				this.style.background = '#232323';
				messageDisplay.textContent = "Try Again";
			}
		})
	}

	function changeColors(color) {
		//loop through all squares
		for(var i = 0; i < squares.length; i++) {
			//change each color to match given color
			squares[i].style.background = color;
		}
	}

	function pickColor() {
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}

	function generateRandomColors(num) {
		//make an array
		var arr = [];
		//add num random colors to arr
		for (var i = 0; i < num; i++) {
			//get random color from randomColor function and push into array
			arr.push(randomColor());
		}
		//return arr
		return arr;
	}

	function randomColor() {
		//pick red from 0-255
		var red = Math.floor(Math.random() * 256);
		//pick green from 0-255
		var green = Math.floor(Math.random() * 256);
		//pick blue from 0-255
		var blue = Math.floor(Math.random() * 256);
		//return combined string
		return "rgb(" + red + ", " + green + ", " + blue + ")";
	}
