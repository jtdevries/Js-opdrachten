document.write("<h3>Oefening 12</h3>");

function TemperatureConversion() {
  let text;
  let num = +prompt("Please enter command number\n"+
                    "0: End of the program\n"+
                    "1: Celsius to Fahrenheit\n"+
                    "2: Celsius to Kelvin\n"+
                    "3: Fahrenheit to Celsius\n"+
                    "4: Fahrenheit to Kelvin\n"+
                    "5: Kelvin to Celsius\n"+
                    "6: Kelvin to Fahrenheit");
    switch(num) {
      case 0:
        text = "End of program";
        break;
      case 1:
        text = "Celsius to Fahrenheit";
        var conv1 = +prompt("Input Degrees in Celsius")
        break;
      case 2:
        text = "Celsius to Kelvin";
        var conv2 = +prompt("Input Degrees in Celsius")
        break;
      case 3:
        text = "Fahrenheit to Celsius";
        var conv3 = +prompt("Input Degrees in Fahrenheit")
        break;
      case 4:
        text = "Fahrenheit to Kelvin";
        var conv4 = +prompt("Input Degrees in Fahrenheit")
        break;
      case 5:
        text = "Kelvin to Celsius";
        var conv5 = +prompt("Input Degrees in Kelvin")
        break;
      case 6:
        text = "Kelvin to Fahrenheit";
        var conv6 = +prompt("Input Degrees in Kelvin")
        break;
      default:
        text = "Not a command num";
    }
  document.getElementById("listNum1").innerHTML = text;
  document.getElementById("listNum2").innerHTML = (conv1 * 9/5)+32;
  document.getElementById("listNum2").innerHTML = conv2 + 273,15;
  document.getElementById("listNum2").innerHTML = (conv3 - 32) / (9/5);
  document.getElementById("listNum2").innerHTML = ((conv4 - 32) * (5/9)) + 273,15;
  document.getElementById("listNum2").innerHTML = conv5 - 273,15;
  document.getElementById("listNum2").innerHTML = (conv6 * 9/5) - 459,67;
}
