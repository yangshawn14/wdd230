document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('reservation-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const inputs = form.querySelectorAll('input, select, textarea');

        inputs.forEach(input => {
            if (input.checkValidity()) {
                input.classList.remove('error');
                input.classList.add('success');
            } else {
                input.classList.remove('success');
                input.classList.add('error');
            }
        });
    }
});
