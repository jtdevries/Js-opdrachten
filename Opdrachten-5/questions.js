/**
 * Opdracht over Functiechaning
 * There are multiple ways to solve this so find the most
 * effecient one.
 */

// Give the size of the string
var CountString = function (text) {
  return text.length;
}

// Replace the first word in the chain to a C
var ReplaceThis = function (text) {
  var arr = text.split(' ');
  arr[0] = 'C';
  return arr.join(' ');
}

// Concatenate the two strings
var ConcatString = function (text1, text2) {
  return text1 + text2;
}

// Display the fifth character of the string
var DisplayChar5 = function (text) {
  var result = text.charAt(4);
  return result;
}

// Display the first 9 characters
var DisplayChar9 = function (text) {
  var result = text.substr(0, 9);
  return result;
}

// Capitalize the string
var CapitalString = function (text) {
  var str = text.toUpperCase();
  return str;
}

// Put the string in lowercase
var MinimalizeString = function (text) {
  var low = text.toLowerCase();
  return low;
}

// Delete spaces before and after the chain
var SupprEspaceString = function (text) {
  return (text.trim());
}

// Show true if the input parameter of the function is of type string
var IsString = function (text) {
  var a = typeof text === 'string';
  return a;
}

// Display the file extension
var ExtensionString = function (text) {
  return text.split('.').pop();
}

// Count the number of spaces in the chain
var NumberEspaceString = function (text) {
  return text.match(/([\s]+)/g).length;
}

// Reverse a string of characters
var InverseString = function (text) {
  return text.split('').reverse().join('');
}

/**
 * Oefeningen over getallen en wiskundige berekeningen
 */

// Calculate the power of one number in relation to another (x to the power y)
var CalculationPower = function (x, y) {
  return Math.pow(x, y);
}

// Display the absolute value of a number
var ValueAbsolute = function (number) {
  return Math.abs(number);
}

// Display the absolute values of several numbers
var ValueAbsoluteArray = function (array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = Math.abs(array[i]);
  }

  return array;
}

// Calculate the surface area of a circle according to its radius. Round it up to the nearest integer
var SufaceCircle = function (radius) {
  var area = Math.PI * (radius * radius);
  return (Math.round(area));
}

// Calculate the hypothenuse of a rectangular triangle
var Hypothenuse = function (ab, ac) {
  return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
}

// Calculate the BMI (Weight / (height x height). Keep only two digits after the decimal point.
var CalcIBM = function (weight, height) {
  var bmi = weight / Math.pow(height, 2);
  return Math.round(bmi * 100) / 100;
}
