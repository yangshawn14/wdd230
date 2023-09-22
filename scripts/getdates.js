let dateModif = document.querySelector("#lastModified");
let year = document.querySelector("#year");

const d = new Date();
let currYear = d.getFullYear();

const lastModif = document.lastModified;

year.innerHTML = currYear;
dateModif.innerHTML = `Last updated ${lastModif}`;

