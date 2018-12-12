document.write("<h3>Oefening 11</h3>");
/*
function calcAverage(){
    let arr = +prompt("Enter your numbers").split(",")
    document.getElementById("listNum").innerHTML = arr;
}
*/

function calcAverage() {
  alert("input 3 numbers");
    let a = +prompt("Input num1");
    let b = +prompt("Input num2");
    let c = +prompt("Input num3");
    document.getElementById("listNum1").innerHTML = a+"-"+b+"-"+c;
    document.getElementById("listNum2").innerHTML ="Sum: "+a+b+c;
    document.getElementById("listNum3").innerHTML ="Average: "+(a+b+c)/3;
}
