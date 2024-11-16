const searchButton = document.getElementById('search-button');
const searchBar = document.querySelector('.search-bar');
const menuButton = document.getElementById('menu-button');
const dropdownMenu = document.getElementById('dropdown-menu');

// Toggle search bar
searchButton.addEventListener('click', () => {
    searchBar.classList.toggle('open');
});

// Toggle dropdown menu
menuButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('open');
});

// Close the dropdown menu and search bar if clicked outside
window.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('open');
    }
    if (!searchButton.contains(e.target) && !searchBar.contains(e.target)) {
        searchBar.classList.remove('open');
    }
});
// Get references to input fields and other elements
const inputFields = document.querySelectorAll('input');
const searchBar = document.querySelector('.search-bar');
const dropdownMenu = document.querySelector('#dropdown-menu');

// Add event listeners to the input fields
inputFields.forEach(input => {
    input.addEventListener('focus', () => {
        // Hide search bar and dropdown menu when input is focused
        searchBar.classList.remove('open');
        dropdownMenu.classList.remove('open');
    });
});

// Optionally, add event listeners for when input fields lose focus
inputFields.forEach(input => {
    input.addEventListener('blur', () => {
        // Re-enable search bar and dropdown if needed (based on your desired functionality)
        // searchBar.classList.add('open');
        // dropdownMenu.classList.add('open');
    });
});
