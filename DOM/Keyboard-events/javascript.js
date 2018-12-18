
var y = document.getElementById('character')
window.addEventListener('keypress', (event) => {
    switch (event.which) {
      case 48:
      y.style.backgroundColor = "red";
      break;

      case 49:
      y.style.backgroundColor = "blue";
      break;

      case 50:
      y.style.backgroundColor = "green";
      break;

      case 51:
      y.style.backgroundColor = "purple";
      break;

      case 52:
      y.style.backgroundColor = "pink";
      break;

      case 53:
      y.style.backgroundColor = "orange";
      break;

      case 54:
      y.style.backgroundColor = "yellow";
      break;

      case 55:
      y.style.backgroundColor = "black";
      break;

      case 56:
      y.style.backgroundColor = "white";
      break;
      }
});


var upKey = document.getElementById('up');
var downKey = document.getElementById('down');
var rightKey = document.getElementById('right');
var leftKey = document.getElementById('left');


window.addEventListener('keydown', (event) => {
    switch (event.which) {
      case 37: //LEFT
      leftKey.className = leftKey.className.replace("highlight");
      leftKey.style.opacity = 0.5;
      break;

      case 38: //UP
      upKey.className = upKey.className.replace("highlight");
      upKey.style.opacity = 0.5;
      break;

      case 39: //RIGHT
      rightKey.className = rightKey.className.replace("highlight");
      rightKey.style.opacity = 0.5;
      break;

      case 40: //DOWN
      downKey.className = downKey.className.replace("highlight");
      downKey.style.opacity = 0.5;
      break;
      }
});

window.addEventListener('keyup', (event) => {
    switch (event.which) {
      case 37: //LEFT
      leftKey.style.opacity = 1;

      break;

      case 38: //UP
      upKey.style.opacity = 1;
      break;

      case 39: //RIGHT
      rightKey.style.opacity = 1;
      break;

      case 40: //DOWN
      downKey.style.opacity = 1;
      break;
      }
});


window.addEventListener('keydown', (event) => {
  const keyName = event.keyCode;
  document.querySelector('.keyCode').innerHTML ="KeyCode= " + keyName;
});
window.addEventListener('keyup', (event) => {
  const keyName = event.keyCode;
  document.querySelector('.keyCode').innerHTML = "";
});
