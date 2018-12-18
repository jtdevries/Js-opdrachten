//EXERCISE 1

var element = document.querySelector ('body');
    element.classList.remove("bg-aqua");
    element.classList.add("bg-olive");


var element2 = document.getElementById("first-paragraph");
    element2.classList.remove("bg-lime");
    element2.classList.remove("gray");
    element2.classList.add("aqua");

var element3 = document.querySelector ('.bg-silver');
    element3.classList.remove("bg-silver");
    element3.classList.add("bg-teal");

var element4 = document.querySelector ('blockquote');
    element4.classList.add("bg-white")
//EXERCISE 2

var element5 = document.querySelector("#my-table");
    element5.classList.add("bg-purple");

var element6 = document.querySelectorAll(".container");
var element6x;
    for (element6x = 0; element6x < element6.length; element6x++) {
        element6[element6x].classList.add("shadow");
    }

//EXERCISE 3
var element7 = document.querySelector("pre");
    element7.style.backgroundColor ="orange";
    element7.style.borderTop = "3px solid red";
    element7.style.borderBottom = "3px solid red";

document.querySelector("h3").innerHTML = "<em>Italic title ! yeah !</em>";

document.querySelector("h2").innerHTML = "<strong>HTML doesn't work !</strong>";

//EXERCISE 4
var ul = document.querySelector("ul");
var li = document.createElement("li");
li.appendChild(document.createTextNode("My best friend is <a href='http://www.google.com'>Google</a>"));
ul.appendChild(li);
//EXERCISE 4 last question ?

//EXERCISE 5
var ol = document.querySelector('ol');
while(ol.firstChild) {
  ol.removeChild(ol.firstChild);
}

var arrayX = ["Silent Teacher","Code Monkey", "CodeCombat"];
for (variable of arrayX) {
  var li = document.createElement('li');
  var arrayVar = document.createTextNode(variable);
  li.appendChild(arrayVar);
  ol.appendChild(li);
}
