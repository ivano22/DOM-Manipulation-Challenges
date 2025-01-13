/**
 * Create a text area with a real-time character counter that shows the
remaining characters out of 200
 * 
 * 
 */
const textarea = document.getElementById('message');
const counter = document.getElementById('counter');
const maxLength = 200;

function updateCounter() {
    const remaining = maxLength - textarea.value.length;
    counter.textContent = `${remaining} characters remaining`;

}

// Add event listeners
textarea.addEventListener('input', updateCounter);
textarea.addEventListener('keyup', updateCounter);
textarea.addEventListener('paste', updateCounter);