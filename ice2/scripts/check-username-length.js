/**
 * File: check-username-length.js
 * Author: Talent Nyota
 * Student Number: 100761242
 * Date: 2024-01-17
 * Description: This script is used for validating the length of the username in a form. 
 *              It checks if the entered username meets the minimum length requirement.
 *              This script is part of the ICE2 project for the WEBD6201 course.
 */

function checkLength(e, minLength) {            // Declare function
  console.log("Debug at start of checkLength function") // Debug statement
  let el, elMsg;                                // Declare variables  
  el = e.target;                                // Get target of event
  elMsg = document.getElementById("feedback");  // Get feedback element

  if (el.value.length < minLength) {           // If length is too short set msg
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
  } else {                                     // Otherwise
    elMsg.innerHTML = '';                      // Clear message
  }
}

let elUsername = document.getElementById('username'); // Get username input element

// Check if the browser supports event listeners
if (elUsername.addEventListener) {           
  // Add a blur event listener to the username input
  elUsername.addEventListener('blur', function(e) {  
    // Call checkLength function when blur event occurs
    // It validates if the username length is at least 5 characters
    checkLength(e, 5);                             
  }, false); // False indicates event capturing is not used
}
