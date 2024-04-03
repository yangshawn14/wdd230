// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = 'a5cc4166ee837b96ab9462617a5e2c8d';
const city = 'Cozumel';
const countryCode = 'MX';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=imperial`;

// Function to fetch weather data
async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Update UI with weather data
        document.getElementById('current-temp').textContent = `Current Temperature: ${data.main.temp}°F`;
        document.getElementById('current-humidity').textContent = `Current Humidity: ${data.main.humidity}%`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to fetch tomorrow's forecast temperature
async function fetchForecast() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Assuming forecast is provided in 3-hour intervals, find the forecast for 15:00 (3:00pm) tomorrow
        const tomorrowForecast = data.list.find(entry => {
            const forecastDate = new Date(entry.dt * 1000); // Convert timestamp to date object
            return forecastDate.getHours() === 15; // Check if it's 15:00 (3:00pm)
        });

        document.getElementById('forecast-temp').textContent = `Tomorrow's Forecasted Temperature (15:00): ${tomorrowForecast.main.temp}°F`;
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}

// Function to fetch weather details
async function fetchWeatherDetails() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Display weather details
        const weatherDetails = document.getElementById('weather-description');
        weatherDetails.innerHTML = ''; // Clear previous content

        data.weather.forEach(weather => {
            const weatherItem = document.createElement('div');
            weatherItem.innerHTML = `
                <p>${weather.main}: ${weather.description}</p>
                <img src="http://openweathermap.org/img/wn/${weather.icon}.png" alt="${weather.description}">
            `;
            weatherDetails.appendChild(weatherItem);
        });
    } catch (error) {
        console.error('Error fetching weather details:', error);
    }
}

// Function to fetch today's weather data
async function fetchTodayWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Extract today's high temperature (temp_max)
        const todayTempMax = data.main.temp_max;

        // Update closeable message with today's high temperature
        document.getElementById('high-temp').textContent = `${todayTempMax}°F`;
    } catch (error) {
        console.error('Error fetching today\'s weather data:', error);
    }
}

// Fetch weather data when the page loads
window.addEventListener('load', () => {
    fetchTodayWeather();
    fetchWeather();
    fetchForecast();
    fetchWeatherDetails();
});

// Add event listener to the close button
document.getElementById('close-button').addEventListener('click', () => {
    document.getElementById('closeable-message').style.display = 'none';
});
