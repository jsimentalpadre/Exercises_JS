'use strict';
/*Exercise 3
- Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var num1 = parseInt(prompt("Inserta numero 1: "));
var num2 = parseInt(prompt("Inserta numero 2: "));

console.log("Los numeros entre "+num1+" y "+num2+" son: ");
for (let i = num1; i <= num2; i++) {
    console.log(i);
}