// the event that fires
function changeText(e) {
    e.innerHTML = "Ooops!";
    e.style.fontFamily = "'Courier New', Courier, monospace";
}

function mOver(e) {
    e.innerHTML = "Thank You";
    e.style.backgroundColor = "#f5cac3";
}

function mOut(e) {
    e.innerHTML = "Mouse Over Me";
    e.style.backgroundColor = "#8ecae6";
}

function mDown(e) {
    e.style.backgroundColor = "#9f86c0";
    e.innerHTML = "Release Me";
}

function mUp(e) {
    e.style.backgroundColor = "#590d22";
    e.style.color = "#ffffff";
    e.innerHTML = "Thank You";
}