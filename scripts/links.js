const baseURL = "https://yangshawn14.github.io/wdd230/";
const linksURL = "https://yangshawn14.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

const displayLinks = (weeks) => {
    const activities = document.querySelector(".activities");
    const ol = activities.querySelector("ol");

    weeks.lessons.forEach(week => {
        const weekListItem = document.createElement('li');
        weekListItem.textContent = `Lesson ${week.lesson}`;

        week.links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = `${baseURL}${link.url}`;
            linkElement.textContent = `${link.title}`;

            const separator = document.createTextNode(' | ');

            weekListItem.appendChild(separator);
            weekListItem.appendChild(linkElement);
        });
        ol.appendChild(weekListItem);

    });
}

getLinks()