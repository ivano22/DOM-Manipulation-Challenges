/**
 * Allow users to add, edit, and delete items in a list dynamically.
 * 
 * 
 */
// Select the elements from the DOM
let addButton = document.getElementById('add-item');
let itemInput = document.getElementById('insert-text');
let dynamicList = document.getElementById('list-item');

// Function to add a new item to the list
function addNewItem() {
    let newItemValue = itemInput.value.trim();

    if (newItemValue) {
        let listItem = document.createElement('li');
              
        listItem.textContent = newItemValue;
        listItem.className = 'listItem';

        // Create edit button
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-button';
        editButton.addEventListener('click', function () {
            let currentText = listItem.firstChild.textContent;
            let newText = prompt('Edit the item:', currentText);
            if (newText !== null) {
                listItem.firstChild.textContent = newText;
            }
        });
        //Button group class to style delete and edit buttons
        let buttonGroup = document.createElement('div');
        buttonGroup.className = 'edit-buttons';

        // Create delete button
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', function () {
            dynamicList.removeChild(listItem);
        });

        // Append buttons to the list item and the list item to the list
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        dynamicList.appendChild(listItem);

        // Clear the input field for the next item
        itemInput.value = '';
    } else {
        alert('Please enter an item.');
    }
}

// event listener to the 'Add Item' button
addButton.addEventListener('click', addNewItem);

//  an event listener for the Enter key in the input field
itemInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addNewItem();
    }
});
