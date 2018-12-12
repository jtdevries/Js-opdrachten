document.write("<h3>Oefening 1</h3>");

function surfaceRectagle() {
  let breedte = +prompt("Wat is de breedte?");
  let lengte = +prompt("Wat is de lengte?");
  alert("de oppervlakte is "+(breedte * lengte));
}

function perimeterRectangle() {
  let breedte = +prompt("Wat is de breedte?");
  let lengte = +prompt("Wat is de lengte?");
  alert("de omtrek is "+(breedte * 2 + lengte * 2));
}
