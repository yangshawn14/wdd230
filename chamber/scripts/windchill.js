let temp = parseInt(document.getElementById('temp').textContent);
let windSpeed = parseInt(document.getElementById('wind-speed').textContent);
let windChill = document.getElementById('windchill');

if (temp <= 50 && windSpeed >= 3) {
    chillTemp = (35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
    windChill.innerHTML = `${chillTemp}°F`;
} else {
    windChill.innerHTML = "N/A";
}


