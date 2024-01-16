// This script dynamically updates the grocery list on the webpage

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the unordered list element
    const ulElement = document.querySelector('ul');

    // Add new item to the end of the list
    const newListItemEnd = document.createElement('li');
    newListItemEnd.textContent = 'New Item at End';
    ulElement.appendChild(newListItemEnd);

    // Add new item to the start of the list
    const newListItemStart = document.createElement('li');
    newListItemStart.textContent = 'New Item at Start';
    ulElement.insertBefore(newListItemStart, ulElement.firstChild);

    // Add 'cool' class to all list items
    const listItems = ulElement.querySelectorAll('li');
    listItems.forEach((li) => {
        li.classList.add('cool');
    });

    // Update header with the number of items in the list
    const h2Element = document.querySelector('#list-description');
    const numberOfItems = listItems.length;
    h2Element.textContent = `Buy groceries (${numberOfItems} items)`;
});

// Log to console when the JavaScript file is loaded
console.log("JavaScript file is linked and running!");

