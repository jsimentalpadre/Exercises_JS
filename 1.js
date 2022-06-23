'use strict';
/*Exercise 1
- Programa que pida dos numeros y que nos diga cual es mayor , cual menor y si son iguales
- PLUS: Si los numeros no son numeros o son menores o iguales a cero, nos los vuelva a pedir
*/
var num1 = parseInt(prompt("Inserta numero 1: "));
var num2 = parseInt(prompt("Inserta numero 2: "));

while (num1 <= 0 || isNaN(num1)){
    num1 = parseInt(prompt("Inserta numero 1: "));
}
while (num2 <= 0 || isNaN(num2)){
    num2 = parseInt(prompt("Inserta numero 2: "));
}

if (num1 > num2) {
        console.log("El mayor entre "+num1+" and "+num2+"is "+num1);
}
else if (num1 < num2) {
        console.log("El mayor entre "+num2+" y "+num1+"es "+num2);
}
else {
        console.log("Es igual a:");
}
