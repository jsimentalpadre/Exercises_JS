'use strict';
/*Exercise 2
- Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
- hasta introducir un numero negativo y ahi mostrar el resultado
*/
var suma = 0;
var n = 0;
do {
    let numero = parseInt(prompt("Inserte un número"));
    suma += numero;
    n++;
} while (numeros > 0);

console.log("La suma de numero es "+suma);
console.log("El promedio de la suma es "+suma/n);