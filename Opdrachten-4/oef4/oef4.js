
var pass = document.getElementById('password');
var conf = document.getElementById('confirmation');

function validatePassword() {
  if (pass.value != conf.value) {
    conf.style.border = '2px solid red';
  }  else {
    conf.style.border = '';
  }
}

pass.onchange = validatePassword;
conf.onkeyup = validatePassword;
