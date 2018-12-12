document.write("<h3>Oefening 6</h3>");

let tab = [-2, 1, 4];

function subtract() {
  let first_element = tab[tab.length-3];
  let last_element = tab[tab.length-1];
  let x = first_element;
      if (x < 0)
      document.getElementById("line1").innerHTML="Negative"
      else
      document.getElementById("line1").innerHTML="Positive"
}
