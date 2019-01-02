document.getElementById('image1').addEventListener('mouseover', mouseOver);
document.getElementById('image1').addEventListener('mouseout', mouseOut);

function mouseOver() {
  document.getElementById('image1').src = 'image1_2.jpg';
}

function mouseOut() {
  document.getElementById('image1').src = 'image1.jpg';
}
