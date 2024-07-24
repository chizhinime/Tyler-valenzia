document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Default credentials
        const defaultUsername = 'tylervalenzia1141@gmail.com';
        const defaultPassword = 'tyler1141@#';

        if (username === defaultUsername && password === defaultPassword) {
            window.location.href = 'main.html'; // Redirect to your main page
        } else {
            errorMessage.style.display = 'block'; // Show error message
        }
    });
});