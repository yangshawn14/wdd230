// Current date for Header
let currDate = document.querySelector("#currDate");
const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);
currDate.innerHTML = fullDate;

// Add responsive class to navigation
const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});

// Footer
let dateModif = document.querySelector("#dateModif");
let year = document.querySelector("#year");

const d = new Date();
let currYear = d.getFullYear();

const lastModif = document.lastModified;

year.innerHTML = `&copy; ${currYear}`
dateModif.innerHTML= `Last Modified ${lastModif}`;





