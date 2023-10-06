let dateModif = document.querySelector("#lastModified");
let year = document.querySelector("#year");

const d = new Date();
let currYear = d.getFullYear();

const lastModif = document.lastModified;

year.innerHTML = currYear;
dateModif.innerHTML = `Last updated ${lastModif}`;

// Add open class to menu button
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav ul');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
}); 