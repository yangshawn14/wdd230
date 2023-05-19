const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener('click', () => {
    // Remove any white space before and after from input value
    const chapterName = input.value.trim();

    // Check if input is blank
    if (chapterName !== '') {
        // Create li and button elements
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        // Populate li elements with input value
        li.textContent = chapterName;
        // Populate button textContent with an X
        deleteButton.textContent = '❌';
        // Append li element with delete button
        li.appendChild(deleteButton);
        // Append list element with the li element just created
        list.appendChild(li);
        // Add event listener to delete button that removes li element
        deleteButton.addEventListener('click', () => {
            li.remove();
        });
        // Send the focus to the input element
        input.focus();
        // Change input value to nothing
        input.value = '';
    }

});


