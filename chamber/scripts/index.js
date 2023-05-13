// Current date for Header
let currDate = document.querySelector("#currDate");
const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
currDate.innerHTML = fullDate;

// Footer
let dateModif = document.querySelector("#dateModif");
let year = document.querySelector("#year");

const d = new Date();
let currYear = d.getFullYear();

const lastModif = document.lastModified;

year.innerHTML = `&copy; ${currYear} Sacramento Chamber | Shawn Yang | WDD 230 Project | Last Modified ${lastModif}`;
// dateModif.innerHTML = `Last updated ${lastModif}`;




