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

let elUsername = document.getElementById('username');// Get username input
if (elUsername.addEventListener) {           // If event listener supported
  elUsername.addEventListener('blur', function(e) {  // On blur event
    // NOTE: This function is checkLength() - not checkUsername()
    checkLength(e, 5);                             // Call checkLength()
  }, false);                                       // Capture in bubble phase
} 
