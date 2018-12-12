document.write("<h3>Oefening 7</h3>");
/*
function makeChoice(){
  let num = +prompt("Input number");
    if (num === 1)
      alert("Thank you");
    else if (num === 2)
      alert("Hello");
    else if (num === 3)
      alert("Good bye");
    else
      alert("Excuse me, what do you want?");
}
*/
function makeChoice(){
  let text;
  let num = +prompt("Input number");
      switch(num) {
        case 1:
          text = "Thank you";
          break;
        case 2:
          text = "Hello";
          break;
        case 3:
          text = "Good bye";
          break;
        default:
          text = "Excuse me, what do you want?";
      }
    alert(text);
}
