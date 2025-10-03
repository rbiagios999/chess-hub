// Wait until the page is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    // Get form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');
    const consentInput = document.getElementById('consent');

    // Load saved data from localStorage
    if (localStorage.getItem('name')) nameInput.value = localStorage.getItem('name');
    if (localStorage.getItem('email')) emailInput.value = localStorage.getItem('email');
    if (localStorage.getItem('phone')) phoneInput.value = localStorage.getItem('phone');
    if (localStorage.getItem('address')) addressInput.value = localStorage.getItem('address');
    if (localStorage.getItem('consent') === 'true') consentInput.checked = true;

    // Save data when form is submitted
    const form = document.querySelector('#signup-form form');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // prevent the page from refreshing

        // Save values to localStorage
        localStorage.setItem('name', nameInput.value);
        localStorage.setItem('email', emailInput.value);
        localStorage.setItem('phone', phoneInput.value);
        localStorage.setItem('address', addressInput.value);
        localStorage.setItem('consent', consentInput.checked);

        alert('Your information has been saved locally!');
    });
});
