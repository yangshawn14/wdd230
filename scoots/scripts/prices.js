document.addEventListener("DOMContentLoaded", function () {
    const pricesURL = "https://yangshawn14.github.io/wdd230/scoots/data/prices.json";
    fetch(pricesURL)
        .then(response => response.json())
        .then(data => {
            data.rentals.forEach(rental => {
                var row = document.createElement('tr');
                row.innerHTML = `
                    <td>${rental.type}</td>
                    <td>${rental.max_persons}</td>
                    <td>$${rental.reservation_half_day} / $${rental.reservation_full_day}</td>
                    <td>$${rental.walkin_half_day} / $${rental.walkin_full_day}</td>
                `;
                document.getElementById('rental-prices-body').appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching rental prices:', error));
});
