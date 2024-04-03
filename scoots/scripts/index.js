const closeButton = document.querySelector('.close-button');
const closeableMessage = document.querySelector('.closeable-message');

if (closeButton && closeableMessage) {
    closeButton.addEventListener('click', function () {
        closeableMessage.style.display = 'none';
    });
}

document.querySelector('#copyrightYear').innerHTML = new Date().getFullYear();
document.querySelector('.lastModified').innerHTML = `Last modified: ${document.lastModified}`;

function toggleMenu() {
    document.querySelector('.hamburger').classList.toggle("open");
    document.querySelector('.nav-menu').classList.toggle("open");
}

document.querySelector('.hamburger').addEventListener("click", toggleMenu);