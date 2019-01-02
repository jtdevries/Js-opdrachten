document.getElementById('image1').addEventListener('mouseover', mouseOver);
document.getElementById('image1').addEventListener('mouseout', mouseOut);

document.getElementById('image2').addEventListener('mouseover', mouseOver);
document.getElementById('image2').addEventListener('mouseout', mouseOut);

document.getElementById('image3').addEventListener('mouseover', mouseOver);
document.getElementById('image3').addEventListener('mouseout', mouseOut);

document.getElementById('image4').addEventListener('mouseover', mouseOver);
document.getElementById('image4').addEventListener('mouseout', mouseOut);

document.getElementById('image5').addEventListener('mouseover', mouseOver);
document.getElementById('image5').addEventListener('mouseout', mouseOut);

function mouseOver() {
  document.getElementById('image1').src = 'images/image1_2.jpg';
  document.getElementById('image2').src = 'images/image2_2.jpg';
  document.getElementById('image3').src = 'images/image3_2.jpg';
  document.getElementById('image4').src = 'images/image4_2.jpg';
  document.getElementById('image5').src = 'images/image5_2.jpg';
}

function mouseOut() {
  document.getElementById('image1').src = 'images/image1.jpg';
  document.getElementById('image2').src = 'images/image2.jpg';
  document.getElementById('image3').src = 'images/image3.jpg';
  document.getElementById('image4').src = 'images/image4.jpg';
  document.getElementById('image5').src = 'images/image5.jpg';
}
