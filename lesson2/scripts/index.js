let dateModif = document.querySelector("#date");
let year = document.querySelector("#year");

const d = new Date();
let currYear = d.getFullYear();

const lastModif = document.lastModified;

year.innerHTML = `&#169; ${currYear}`;
dateModif.innerHTML = `Last updated ${lastModif}`;

