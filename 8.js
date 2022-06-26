'use strict';
/*Exercise 8
Programar una Calculadora:
-Que pida dos numeros por pantalla
-Si se captura un numero mal ( algo no numerico ), que lo vuelva a pedir
- el resultado de Sumar, Restar, multiplicar y dividir esas dos cifras
- se debe mostrar en el cuerpo de la pagina , en una alerta y en la consola
*/

var num1 = parseInt(prompt("Introduce numero 1: "));
var num2 = parseInt(prompt("Introduce numero 2: "));

while (isNaN(num1)) {
    num1 = parseInt(prompt("Introduce numero 1: "));
}
while (isNaN(num2)) {
    num2 = parseInt(prompt("Introduce numero 2: "));
}

// Falta validar la division by cero, en que parte se podria validar eso.... Recomendacion de escritura de Código
while(num1 <0  || num2 < 0 || isNan(num1) || isNan(num2)){
    alert('Numeros Incorrectos');
    num1 = parseInt(prompt("Introduce numero 1: "));
    num2 = parseInt(prompt("Introduce numero 2: "));
}


var sum = num1 + num2;
var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;

console.log(num1 + " + " + num2 + " = " + sum);
console.log(num1 + " - " + num2 + " = " + sub);
console.log(num1 + " x " + num2 + " = " + mul);
console.log(num1 + " / " + num2 + " = " + div);

alert(num1 + " + " + num2 + " = " + sum);
alert(num1 + " - " + num2 + " = " + sub);
alert(num1 + " x " + num2 + " = " + mul);
alert(num1 + " / " + num2 + " = " + div);

document.write("Suma "+num1 + " + " + num2 + " = " + sum+" | ");
document.write("Resta "+num1 + " - " + num2 + " = " + sub+" | ");
document.write("Multiplicacion "+num1 + " x " + num2 + " = " + mul+" | ");
document.write("Division "+num1 + " / " + num2 + " = " + div+" | ");

