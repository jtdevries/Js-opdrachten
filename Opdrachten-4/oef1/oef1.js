document.getElementById('image1').addEventListener('mouseover', mouseOver);
document.getElementById('image1').addEventListener('mouseout', mouseOut);

function mouseOver() {
  document.getElementById('image1').style.border = '3px dashed red';
}

function mouseOut() {
  document.getElementById('image1').style.border = '';
}
