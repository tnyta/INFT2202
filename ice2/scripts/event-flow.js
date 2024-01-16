//#region BUBBLING AND CAPTURING FUNCTIONS
// function to show the innerHTML of the element bound with the click event to this function
function showElement(e) {  
  // e.cancelBubble = true;                           // prevent the bubbling up through the elements with a click on the innermost element
  // e.stopPropagation();                             // prevents bubbling and capturing
  // alert("Using 'e.target': " + e.target.innerHTML);  // event is the element that recieved the click
  alert("Using 'this': " + this.innerHTML);          // this is the element that fired the event  
  // alert("This is only only link element node...or is it?")
}

// function writeSomething(e) {
//   alert("This is on the parent item element node.")
// }

// function grandparent(e) {
//   alert("This is on the grandparent list element node.")
// }
//#endregion

//#region EVENT BUBBLING 

// because clicking on a child within a parent necessarily clicks on the parent, if both have a click event wired up, that click event fires even if the events are different
// let link_bubble = document.getElementById("link");
// link.addEventListener('click', showElement, false);

// event bubbling when using the different events
// let item_bubble = document.getElementById('item');
// item.addEventListener('click', showElement, false);

// event bubbling when using different events
// let list_bubble = document.getElementById('list');
// list.addEventListener('click', showElement, false)

// event bubbling when using the different events
// let item_bubble2 = document.getElementById('item');
// item.addEventListener('click', writeSomething, false);

// event bubbling when using different events
// let list_bubble2 = document.getElementById('list');
// list.addEventListener('click', grandparent, false)

//#endregion

//#region EVENT CAPTURING

// this time, clicking on a child will fire the grandparent first, and stopping propigation will limit it to the grandparent element node
// event capturing when using the same event
let link2_capture = document.getElementById("link2");
link2_capture.addEventListener('click', showElement, true);

let item2_capture = document.getElementById("item2");
item2_capture.addEventListener('click', showElement, true);

let list2_capture = document.getElementById("list2");
list2_capture.addEventListener('click', showElement, true);

//#endregion

