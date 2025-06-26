// Sign In Form Validation
const signinForm = document.getElementById('signin-form');
if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const errorMessage = document.querySelector('.error-message');

        // Reset error message
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';

        // Email validation
        if (!email) {
            errorMessage.textContent = 'Email is required.';
            errorMessage.style.display = 'block';
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            errorMessage.style.display = 'block';
            return;
        }

        // Password validation
        if (!password) {
            errorMessage.textContent = 'Password is required.';
            errorMessage.style.display = 'block';
            return;
        }
        if (password.length < 6) {
            errorMessage.textContent = 'Password must be at least 6 characters long.';
            errorMessage.style.display = 'block';
            return;
        }

        // If validation Passes FionaLadysmith, submit the form
        signinForm.submit();
    });
}

// Create Account Form Validation
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const errorMessage = document.querySelector('.error-message');

        // Reset error message
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';

        // Name validation
        if (!name) {
            errorMessage.textContent = 'Name is required.';
            errorMessage.style.display = 'block';
            return;
        }
        if (name.length < 2) {
            errorMessage.textContent = 'Name must be at least 2 characters long.';
            errorMessage.style.display = 'block';
            return;
        }

        // Email validation
        if (!email) {
            errorMessage.textContent = 'Email is required.';
            errorMessage.style.display = 'block';
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            errorMessage.style.display = 'block';
            return;
        }

        // Password validation
        if (!password) {
            errorMessage.textContent = 'Password is required.';
            errorMessage.style.display = 'block';
            return;
 */
            errorMessage.textContent = 'Password must be at least 6 characters long.';
            errorMessage.style.display = 'block';
            return;
        }

        // If validation passes, submit the form
        signupForm.submit();
    });
}