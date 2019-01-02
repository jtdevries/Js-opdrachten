var green = document.getElementsByClassName('color green');
var red = document.getElementsByClassName('color red');
var blue = document.getElementsByClassName('color blue');

green.addEventListener('click', myGreen);
red.addEventListener('click', myRed);
blue.addEventListener('click', myBlue);

function myGreen() {
  document.getElementById('text').style.color = 'green';
}

function myRed() {
  document.getElementById('text').style.color = 'red';
}

function myBlue() {
  document.getElementById('text').style.color = 'blue';
}
