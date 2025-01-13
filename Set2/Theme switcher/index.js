/**
 * Add a "Light/Dark Mode" toggle button to switch between themes.
 *  Persist the user's choice using localStorage.
 * 
 * 
 * 
 */

document.addEventListener('DOMContentLoaded', toggleTheme);
function toggleTheme() {
    const toggleButton = document.querySelector('button');
    
    // Check local storage for theme preference
    const currentTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.classList.add(currentTheme);

    // Toggle theme on button click
    toggleButton.addEventListener('click', clickListener);
    function clickListener() {
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    }
}



