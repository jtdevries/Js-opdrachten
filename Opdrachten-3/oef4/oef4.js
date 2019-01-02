let arr = document.getElementByTagName('input');
let endOfArray = arr.length - 1;

arr[endOfArray].addEventListener('click', myFunction);

function myFunction() {
  document.getElementById('name').value = '';
  document.getElementById('firstName').value = '';
  document.getElementById('city').value = '';
  event.preventDefault();
}
