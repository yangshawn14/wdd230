document.getElementById('confirm-password').addEventListener('focusout', function () {
    validatePassword();
});

function validatePassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorElement = document.getElementById('password-error');

    if (confirmPassword && password !== confirmPassword) {
        errorElement.textContent = "Passwords do not match";
        document.getElementById('confirm-password').focus();
    } else {
        errorElement.textContent = '';
    }
}

document.getElementById('page-rating').addEventListener('input', function () {
    document.getElementById('rating-value').textContent = this.value;
});