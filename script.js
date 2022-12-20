function checkDriverAge() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too young to access this page.");
	} else if (Number(age) === 18) {
		alert("Heeeyyyyy, we legal now baby!");
	} else if (Number(age) > 18) {
		alert("Go on in old fart!");
	}
}

checkDriverAge();
