document.write("<h3>Oefening 2</h3>");
document.write("<h4>Bereken een cirkel met de ingevoerde straal</h4>");
function straalCirkel() {
  let straal = +prompt("Wat is de straal?");
  let x = Math.PI
  alert("de oppervlakte is "+(straal * 2)*x);
}
