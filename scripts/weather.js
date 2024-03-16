// 43.82335553058225, -111.79436354839896

// Select HTML elements in the document
const locationElement = document.getElementById('location');
const weatherDescriptionElement = document.getElementById('weather-description');
const weatherIconElement = document.getElementById('weather-icon');

// Define the API URL with your API key
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=-111.79&units=imperial&appid=a5cc4166ee837b96ab9462617a5e2c8d';

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
    locationElement.textContent = `${data.name}, ${data.sys.country}`;
    const desc = data.weather[0].description;
    weatherDescriptionElement.textContent = `${desc.charAt(0).toUpperCase()}${desc.slice(1)}`; // Capitalize first letter of description
    weatherIconElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    console.log(data.weather[0].icon);
}


