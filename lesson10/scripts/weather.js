// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=a5cc4166ee837b96ab9462617a5e2c8d';

// Define an asynchronous function to fetch data from the OpenWeatherMap API
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Testing only
            displayResults(data); // Call the function to display results
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Call the apiFetch function
apiFetch();

// Function to display weather results in the HTML document
function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`; // Display temperature with no decimal points
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; // Get icon URL
    const desc = data.weather[0].description; // Get weather description
    weatherIcon.setAttribute('src', iconsrc); // Set weather icon source
    weatherIcon.setAttribute('alt', desc); // Set weather icon alt attribute
    captionDesc.textContent = `${desc.charAt(0).toUpperCase()}${desc.slice(1)}`; // Capitalize first letter of description
}
