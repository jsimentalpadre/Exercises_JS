'use strict';
/*Exercise 5
- Un programa que muestre todos los numeros DIVISORES de un numero que proporcione el usuario
- Los divisores son los números que se consiguen al dividir a otro de manera exacta, es decir, el residuo de la division es CERO
*/

const num = parseInt(prompt("Inserta numer: "));

for (let i = 0; i <= num; i++){
    if (num % i == 0){
        console.log(num + " es divisible por " + i);
    }
}