document.write("<h3>Oefening 9</h3>");
/*
function testWhile() {
  let input =prompt("Insert text")
  while (input === "p") {
    if (input === "p")
    alert("Done")
    else
    alert("Keep going")
  }
}
*/

function testWhile(){
  let a = prompt("Input text with a P");
  while(!a.includes('p')){
    a = prompt("Keep going");
  }
  alert("Done");
}
