/***
 * Add a password input ﬁeld with a checkbox. Toggling the checkbox shows or hides the password.
 *
 *
 */
const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('showPassword');
//In this case, it listens for the 'change' event, which is triggered when the state of the checkbox changes.
//  (i.e., when it is checked or unchecked)
showPasswordCheckbox.addEventListener('change', showPasswordChecker);
function showPasswordChecker() {
    // If checkbox is checked, show text, otherwise show masked text or password.
    passwordInput.type = this.checked ? 'text' : 'password';
};
showPasswordChecker();