window.onload = () => {
	let button = document.querySelector("#btn");

	// Function for calculating BMI
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	/* Getting input from user into height variable.
	Input is string so typecasting is necessary. */
	let height = parseInt(document
			.querySelector("#height").value);

	let result = document.querySelector("#result");

	// Checking the user providing a proper
	// value or not
	if (number == "8" || isNaN(number))
		result.innerHTML = "You win 8 points";

	else if (number == "10" || isNaN(number))
		result.innerHTML = "You win 10 points";

	// If both input is valid, calculate the bmi
	else {
    result.innerHTML = "Please Enter a Number!"
	}
}
