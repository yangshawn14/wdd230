// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Extract temperature and wind speed values from HTML elements
    let temp = parseFloat(document.getElementById('temp').textContent);
    let windSpeed = parseFloat(document.getElementById('wind-speed').textContent);
    let windChill = document.getElementById('windchill');

    console.log(`Temp: ${temp}`);
    console.log(`Windspeed: ${windSpeed}`);

    if (!isNaN(temp) && !isNaN(windSpeed) && temp <= 50 && windSpeed >= 3) {
        // Calculate wind chill
        chillTemp = (35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
        windChill.innerHTML = `${chillTemp}°F`;
    } else {
        // Display N/A if temperature or wind speed is invalid
        windChill.innerHTML = "N/A";
    }
});
