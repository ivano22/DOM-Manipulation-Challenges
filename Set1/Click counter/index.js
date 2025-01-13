/**
 * Add a button that displays the number of times it has been clicked. 
 * 
 * 
 */
// referencing the button using its ID.
const button = document.getElementById('counterButton');
let count = 0;

button.addEventListener('click', updateClicks);
function updateClicks() {
    count++;
    button.textContent = `Clicks: ${count}`;
};