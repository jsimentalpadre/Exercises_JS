'use strict';
/*Exercise 4
- Mostrar todos los numeros IMPARES Que esten entre dos numeros introducidos por el usuario
*/

var num1 = parseInt(prompt("Introduce el primer número"));
var num2 = parseInt(prompt("Introduce el segundo número"));

console.log("Los números impares entre "+num1+" y "+num2+" son:");
for (let i = num1; i <= num2; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}