document.write("<h3>Oefening 13</h3>");

function calcBMI() {
    var weight = +prompt("Wat is uw gewicht?");                                 //Prompt
    var height = +prompt("Wat is uw lengte in M?");                                  //
    var bmiFormula = weight/(height*height);                                    //Formula
    var bmi = bmiFormula.toFixed(2);                                            //2 Decimals
    var entry1 = document.getElementById("listNum1").innerHTML =                //Entry 1
                "gewicht "+weight +"+"+ " lengte "+height+" =BMI: "+bmi;        //


    if (bmi < 16.5) {
        entry1;
        document.getElementById("listNum2").innerHTML = "Ondervoeding";         //Ondervoeding
        }
    else if (bmi < 18.5) {
        entry1;
        document.getElementById("listNum2").innerHTML = "Dunheid";              //Dunheid
        }
    else if (bmi < 25) {
        entry1;
        document.getElementById("listNum2").innerHTML = "Normale bouw";         //Normale bouw
        }
    else if (bmi < 30) {
        entry1;
        document.getElementById("listNum2").innerHTML = "Overgewicht";          //Overgewicht
        }
    else if (bmi < 35) {
        entry1;
        document.getElementById("listNum2").innerHTML = "Matig overgewicht";    //Matig overgewicht
        }
    else if (bmi < 40) {
        entry1;
        document.getElementById("listNum2").innerHTML = "Ernstig overgewicht";  //Ernstig overgewicht
        }
    else {
        entry1;
        document.getElementById("listNum2").innerHTML = "Morbide obesitas";     //Morbide obesitas
        }
}
