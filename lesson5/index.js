document.addEventListener('DOMContentLoaded', function () {
    // Create const variables that hold references to the input, button, and .list elements.
    const input = document.querySelector('input');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');
    
    // Create a click event listener for the Add Chapter button using 
    // addEventListener and an anonymous function or arrow function.
    button.addEventListener('click', function () {
        // check to make sure the input is not blank before doing the following remaining tasks 
        // in this list using an if block, otherwise provide a message or at least do nothing and return 
        // the .focus() to the input field.
        if (input.value.trim() != '') {
            // Create a li element
            const li = document.createElement('li');

            // Create a delete button
            const deleteButton = document.createElement('button');

            // Populate the li elements textContent or innerHTML with the input value
            li.textContent = input.value;

            // populate the button textContent with a ❌
            deleteButton.textContent = '❌';

            // append the li element with the delete button
            li.appendChild(deleteButton);

            // append the li element to the unordered list in your HTML
            list.appendChild(li);

            // add an event listener to the delete button that removes the li element when clicked
            deleteButton.addEventListener('click', function () {
                list.removeChild(li);
                input.focus();
            });

            input.value = '';
            input.focus();


        } else {
            alert('Please enter a valid value.');
            input.focus();
        }
    });
});


