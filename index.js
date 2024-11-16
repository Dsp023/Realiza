// Get references to the search button, search bar, menu button, dropdown menu, and input fields
const searchButton = document.getElementById('search-button');
const searchBar = document.querySelector('.search-bar');
const menuButton = document.getElementById('menu-button');
const dropdownMenu = document.getElementById('dropdown-menu');
const inputFields = document.querySelectorAll('input');
const conButton = document.getElementById('con');

// Toggle search bar visibility
searchButton.addEventListener('click', () => {
    searchBar.classList.toggle('open');
});

// Toggle dropdown menu visibility
menuButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('open');
});

// Close dropdown menu and search bar if clicked outside
window.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('open');
    }
    if (!searchButton.contains(e.target) && !searchBar.contains(e.target)) {
        searchBar.classList.remove('open');
    }
});

// Hide search bar and dropdown menu when an input field is focused
inputFields.forEach(input => {
    input.addEventListener('focus', () => {
        searchBar.classList.remove('open');
        dropdownMenu.classList.remove('open');
    });
});

// Handle the "Continue for Trial" button click (redirect)
conButton.addEventListener('click', function() {
    // Redirect to the trial page (change URL as needed)
    window.location.href = 'home.html';  // Replace with your desired URL
});

