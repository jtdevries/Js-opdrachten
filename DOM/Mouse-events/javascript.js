/*var handleHide = function (event)  {
    handleHide.style.display = "none";
};

var hoverMe = document.querySelector('.hoverMe');
    hoverMe.addEventListener ('onmouseenter', 'handleHide');
*/

var hoverMeX = document.querySelector('.hoverMe');

function hoverMe(x) {
    x.style.visibility = "hidden";
}

function  reset(y) {
  hoverMeX.style.visibility = "visible"
}


function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coorX = "X coordinates: (" + x + ")";
    document.getElementById("x-axis").innerHTML = coorX;
    var coorY = "Y coordinates: (" + y + ")";
    document.getElementById("y-axis").innerHTML = coorY;
}

function clearCoor() {
    document.getElementById("x-axis").innerHTML = "";
    document.getElementById("y-axis").innerHTML = "";

}
