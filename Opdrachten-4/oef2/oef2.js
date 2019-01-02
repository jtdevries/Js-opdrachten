var text = document.getElementById('text');
var show = document.getElementsByTagName('a')[0];
var hide = document.getElementsByTagName('a')[1];

show.addEventListener('click', myShow);
hide.addEventListener('click', myHide);

function myHide() {
  document.getElementById('text').style.display = 'none';
}

function myShow() {
  document.getElementById('text').style.display = 'initial';
}
