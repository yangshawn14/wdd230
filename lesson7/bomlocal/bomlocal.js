document.addEventListener('DOMContentLoaded', function () {
    // Create const variables that hold references to the input, button, and .list elements.
    const input = document.querySelector('input');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');

    // Store the list of BoM chapters by the user via local storage
    // The directed plan is to create an array of valid book and chapter 
    // entries made by the user.Then that array could be stored in localStorage
    // as one large string using JSON string using JSON.stringify().This means 
    // we need to load that array upon application load with the parsed data from 
    // localStorage, IF the named localStorage component exists.Once loaded, we 
    // need to populate the list with the stored values.
    // we will create a single function that appends the favorite chapter list with 
    // the corresponding delete button, once on load, and also when a new entry is made.
    // Create array
    let chaptersArray = getChaptersList() || [];
    // Populate array
    chaptersArray.forEach(chapter => {
        displayList(chapter);
    });
    // Only do tasks if clicked
    button.addEventListener('click', () => {
        if (input.value != '') {
            displayList(input.value);
            chaptersArray.push(input.value);
            setChaptersList();
            input.value = '';
            input.focus();
        }
    });
    // Create displayList function
    function displayList(item) {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = item;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        li.appendChild(deleteButton);
        list.appendChild(li);
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            // New function needed to remove the chapter from the array and local storage
            deleteChapter(li.textContent); 
            input.focus();
        });
    };

    // Define the setChapterList function to set the localStorage item that you have already 
    // named. Use JSON.stringify() to stringify the array.
    function setChaptersList() {
        console.log('Setting chapters list in local storage', chaptersArray);
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    };
    // Define the getChapterList function to get the localStorage item. No parameter is needed. 
    // Since this function returns to an awaiting array, we will need to use JSON.parse on the string.
    function getChaptersList() {
        console.log('Getting chapters list from local storage');
        return JSON.parse(localStorage.getItem('myFavBOMList'));
    };
    // Finally, define the deleteChapter function with a parameter named chapter
    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length -1);
        chaptersArray = chaptersArray.filter((item) => item !== chapter);
        setChaptersList();
    };



});




