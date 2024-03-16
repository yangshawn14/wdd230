// Define the API URLs for the current weather and forecast data
const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=38.46&lon=-121.31&units=imperial&appid=a5cc4166ee837b96ab9462617a5e2c8d';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=38.46&lon=-121.31&units=imperial&appid=a5cc4166ee837b96ab9462617a5e2c8d';

// Fetch the current weather data from the OpenWeatherMap API
async function fetchCurrentWeather() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // Testing only
            displayCurrentWeather(data); // Call the function to display current weather
            calculateWindChill(data); // Calculate wind chill
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error('There was a problem with fetching the current weather:', error);
    }
}

// Fetch the forecast data from the OpenWeatherMap API
async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // Testing only
            displayForecast(data); // Call the function to display forecast
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error('There was a problem with fetching the forecast:', error);
    }
}

// Call the fetch functions to get current weather and forecast
fetchCurrentWeather();
fetchForecast();

// Function to display the current weather in the HTML document
function displayCurrentWeather(data) {
    const tempElement = document.getElementById('temp');
    const weatherDescriptionElement = document.getElementById('weather-description');
    const windSpeedElement = document.getElementById('wind-speed');
    const weatherIconElement = document.getElementById('weather-icon');

    tempElement.textContent = `${Math.round(data.main.temp)}`;
    weatherDescriptionElement.textContent = `${data.weather[0].description.charAt(0).toUpperCase()}${data.weather[0].description.slice(1)}`;
    windSpeedElement.textContent = `${Math.round(data.wind.speed)}`; // Display wind speed
    weatherIconElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

// Function to display the three-day forecast in the HTML document
function displayForecast(data) {
    const forecastElement = document.getElementById('forecast');
    forecastElement.innerHTML = ''; // Clear previous forecast data

    // Loop through the forecast data for the next three days (index 0, 8, and 16)
    for (let i = 0; i < 3; i++) {
        const forecastItem = data.list[i * 8]; // Data for every 8th hour (3-hour intervals)
        const date = new Date(forecastItem.dt * 1000); // Convert UNIX timestamp to date

        // Create HTML elements for each forecast item
        const forecastItemElement = document.createElement('div');
        forecastItemElement.classList.add('forecast-item');
        forecastItemElement.innerHTML = `
            <h4>${date.toDateString()}</h4>
            <p>Temperature: ${forecastItem.main.temp} °F</p>
            <p>Description: ${forecastItem.weather[0].description}</p>
            <img src="https://openweathermap.org/img/wn/${forecastItem.weather[0].icon}@2x.png" alt="${forecastItem.weather[0].description}">
            <hr>
        `;

        // Append forecast item to the forecast element
        forecastElement.appendChild(forecastItemElement);
    }
}

// Function to calculate wind chill and display it in the HTML document
function calculateWindChill(data) {
    const temp = data.main.temp;
    const windSpeed = data.wind.speed;
    const windChillElement = document.getElementById('windchill');
    if (temp <= 50 && windSpeed >= 3) {
        const chillTemp = (35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
        windChillElement.textContent = `${chillTemp}°F`;
    } else {
        windChillElement.textContent = "N/A";
    }
}
