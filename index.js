
function addingEventListener() {
const input = document.getElementById('button');
    alert('I was clicked!');
input.addEventListener('click', addingEventListener);
}
addingEventListener()

/*
const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
*/