/***
 * Create a page on which users can use dropdown menus to change the
font size, color, and font family of a text block. 
 * 
 * 
 * 
 */
//references to all elements
const textBlock = document.getElementById('textBlock');
const fontFamilySelect = document.getElementById('fontFamily');
const fontSizeSelect = document.getElementById('fontSize');
const textColorSelect = document.getElementById('textColor');
const backgroundColorSelect = document.getElementById('backgroundColor');

// event listeners to handle changes
fontFamilySelect.addEventListener('change', updateStyles);
fontSizeSelect.addEventListener('change', updateStyles);
textColorSelect.addEventListener('change', updateStyles);
backgroundColorSelect.addEventListener('change', updateStyles);

// Function to update text styles
function updateStyles() {
    textBlock.style.fontFamily = fontFamilySelect.value;
    textBlock.style.fontSize = fontSizeSelect.value;
    textBlock.style.color = textColorSelect.value;
    textBlock.style.backgroundColor = backgroundColorSelect.value;
    // if (textBlock.style.backgroundColor == 'black') {
    //     textBlock.style.color = " white";

    // }
    // else {
    //     textBlock.style.color = textColorSelect.value;
    // }
}


