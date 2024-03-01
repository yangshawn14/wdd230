// Current date for Header
let currDate = document.querySelector("#currDate");
const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);
currDate.innerHTML = fullDate;

// Add responsive class to navigation
const hamButton = document.querySelector('.hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
	hamButton.classList.toggle('open');
});

// Add dark-mode class to body and main
const modeButton = document.querySelector(".slider");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	body.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
});

// Footer
let dateModif = document.querySelector("#dateModif");
let year = document.querySelector("#year");

const d = new Date();
let currYear = d.getFullYear();

const lastModif = document.lastModified;

year.innerHTML = `&copy; ${currYear}`
dateModif.innerHTML = `Last Modified ${lastModif}`;

// Display number of visits on Discover Page
// 1️⃣ Initialize display element variable
const visitMessage = document.querySelector("#visit-message");

// 2️⃣ Get the stored visit date from localStorage
const lastVisit = localStorage.getItem('lastVisit');

// Get the current date
const currentDate = new Date();

if (lastVisit === null) {
	// If there's no last visit date, set the current date as the last visit date
	localStorage.setItem('lastVisit', currentDate.toISOString());

	// Display a welcome message
	visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
	// Convert last visit date from string to Date object
	const lastVisitDate = new Date(lastVisit);

	// Calculate the difference in milliseconds between the current visit and the last visit
	const timeDifference = currentDate - lastVisitDate;

	// Convert milliseconds to days
	const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

	if (daysDifference < 1) {
		// If the difference is less than a day, display "Back so soon! Awesome!"
		visitMessage.textContent = "Back so soon! Awesome!";
	} else if (daysDifference === 1) {
		// If the difference is exactly 1 day, display "You last visited 1 day ago."
		visitMessage.textContent = "You last visited 1 day ago.";
	} else {
		// Otherwise, display the number of days in a message
		visitMessage.textContent = `You last visited ${daysDifference} days ago.`;
	}
}

// 3️⃣ Store the new visit date into localStorage
localStorage.setItem('lastVisit', currentDate.toISOString());

/*********************
 * Join Page 
 *********************/
// Get current date time
document.getElementById('form-load-time').value = Date.now();

// Validate password
document.getElementById('confirm-password').addEventListener('focusout', function () {
	validatePassword();
});

function validatePassword() {
	const password = document.getElementById('password').value;
	const confirmPassword = document.getElementById('confirm-password').value;
	const errorElement = document.getElementById('password-error');

	if (confirmPassword && password !== confirmPassword) {
		errorElement.textContent = "Passwords do not match";
		document.getElementById('confirm-password').focus();
	} else {
		errorElement.textContent = '';
	}
}







